import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetClientListThunk } from "../../store/Client/actions";
import { GetFarmerListThunk } from "../../store/Client/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";

export const ClientsOview = () => {
  //fetch client list for reduers
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.clientStore.ClientList);
  const farmers = useSelector((state) => state.farmerStore.FarmerList);
  //state
  const [FarmerListByClient, setFarmerListByClient] = useState([]);
  const [Farmers, setFarmers] = useState([]);
  const [CurrentFarmerList, setCurrentFarmerList] = useState([]);
  const [CurrentClient, setCurrentClient] = useState([]);
  const [modal, setModal] = useState(false);
  //array
  let newAssign = [...CurrentFarmerList];
  let targetId;
  //loading
  useEffect(() => {
    dispatch(GetClientListThunk());
    dispatch(GetFarmerListThunk());
  }, [dispatch]);
  useEffect(() => {
    setFarmerListByClient(clients);
  }, [clients]);
  useEffect(() => {
    setFarmers(farmers);
  }, [farmers]);
  //event hanlder
  const editList = (e) => {
    newAssign = FarmerListByClient[e.currentTarget.id].farmer;
    setCurrentFarmerList(newAssign);
    setModal(true);
    setCurrentClient(clients[e.currentTarget.id].id);
    return newAssign;
  };
  const deleteAccount = (e) => {
    targetId = clients[e.currentTarget.id].id;
    axios
      .put(`${process.env.REACT_APP_API_SERVER}/api/deleteAccount/${targetId}`)
      .then((res) => {
        //reload client list
        dispatch(GetClientListThunk());
      });
  };
  const assignFarmer = (e) => {
    let addBtn = "admin-popup-list-add-btn";
    let minusBtn = "admin-popup-list-minus-btn";
    let targetFarmer = parseInt(e.target.name);
    let existCheck = CurrentFarmerList.indexOf(targetFarmer) !== -1;
    let findIndex = CurrentFarmerList.indexOf(targetFarmer);
    if (e.target.id === minusBtn) {
      if (existCheck) {
        newAssign.splice(findIndex, 1);
      }
    } else if (e.target.id === addBtn) {
      if (!existCheck) {
        newAssign.push(targetFarmer);
      }
    }
    setCurrentFarmerList(newAssign);
    return CurrentFarmerList;
  };
  const submitNewAssign = () => {
    let newAssignForm = {
      removeId: CurrentClient,
      newAssign: newAssign,
    };
    axios
      .delete(`${process.env.REACT_APP_API_SERVER}/api/resetAssign`, {
        data: newAssignForm,
      })
      .then((res) => {
        setModal(false);
        //reload client list
        dispatch(GetClientListThunk());
        dispatch(GetFarmerListThunk());
      });
  };
  return (
    <>
      <div className="admin-list-wrapper">
        <div className="admin-list row" style={{ backgroundColor: "#F5F5F5" }}>
          <p className="admin-list-item-name col-5">Client Name</p>
          <p className="admin-list-item-name col-5">no. of farmer assigned</p>
          <p className="admin-list-item-name col-2"></p>
        </div>
      </div>
      {FarmerListByClient && FarmerListByClient[0] !== undefined ? (
        FarmerListByClient.map((Farmer, index) => (
          <div key={"overview-wrapper-" + Farmer.id}>
            <div className="admin-client-overview-wrapper">
              <div
                className="admin-list row"
                style={
                  index % 2 === 0
                    ? { backgroundColor: "#FFFFFF" }
                    : { backgroundColor: "#f5f5f5" }
                }
              >
                <p className="admin-list-item-user col-5">{Farmer.name}</p>
                <p className="admin-list-item-label col-5">
                  {Farmer.farmer.length}
                </p>
                <div className="admin-list-farmer-edit-wrapper col-2">
                  <button
                    style={
                      index % 2 === 0
                        ? { backgroundColor: "#FFFFFF" }
                        : { backgroundColor: "#f5f5f5" }
                    }
                    className="admin-list-farmer-edit-btn"
                    onClick={editList}
                    id={index}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    style={
                      index % 2 === 0
                        ? { backgroundColor: "#FFFFFF" }
                        : { backgroundColor: "#f5f5f5" }
                    }
                    className="admin-list-farmer-del-btn"
                    onClick={deleteAccount}
                    id={index}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <>
          <div className="admin-client-overview-wrapper">
            <p className="admin-form-errMsg">No Client here!</p>
          </div>
        </>
      )}
      <Modal className="admin-popup-wrapper" show={modal}>
        <Modal.Header className="admin-popup-header">
          <h1 className="admin-popup-header-title">Assign Farmer</h1>
        </Modal.Header>
        <Modal.Body className="admin-modal-body">
          {Farmers && Farmers[0] !== undefined ? (
            Farmers.map((farmer) => {
              return (
                <div key={"admin-popup-list-li-" + farmer.name}>
                  <div className="admin-popup-body row">
                    <div className="admin-popup-list-name-wrapper col-6">
                      <div className="admin-popup-list-name-inner-wrapper row">
                        <p className="admin-popup-list-name col-12">
                          {farmer.name}
                        </p>
                      </div>
                    </div>
                    <div className="admin-popup-list-btn-wrapper col-6">
                      <div className="admin-popup-list-btn-inner-wrapper row">
                        {CurrentFarmerList.indexOf(farmer.id) !== -1 ? (
                          <button
                            key={"farmer-" + farmer.id + "-minus"}
                            className="admin-popup-list-minus-btn"
                            id="admin-popup-list-minus-btn"
                            onClick={assignFarmer}
                            name={farmer.id}
                          >
                            ❌Unassigned
                          </button>
                        ) : (
                          <button
                            key={"farmer-" + farmer.id + "-add"}
                            className="admin-popup-list-add-btn"
                            id="admin-popup-list-add-btn"
                            onClick={assignFarmer}
                            name={farmer.id}
                          >
                              ✔️ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Assigned
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <></>
          )}
        </Modal.Body>
        <Modal.Footer className="admin-popup-footer">
          <Button
            className="admin-popup-submit-btn"
            onClick={submitNewAssign}
            name={CurrentClient}
          >
            Submit
          </Button>
          <Button
            className="admin-popup-cancel-btn"
            onClick={() => setModal(false)}
            name={CurrentClient}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
