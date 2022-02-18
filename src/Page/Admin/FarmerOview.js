import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetClientListThunk } from "../../store/Client/actions";
import { GetFarmerListThunk } from "../../store/Client/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";

export const FarmerOview = () => {
  //fetch client list for reduers
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.clientStore.ClientList);
  const farmers = useSelector((state) => state.farmerStore.FarmerList);
  //state
  const [ClientListByFarmer, setClientListByFarmer] = useState([]);
  const [Clients, setClients] = useState([]);
  const [CurrentClientList, setCurrentClientList] = useState([]);
  const [CurrentFarmer, setCurrentFarmer] = useState([]);
  const [modal, setModal] = useState(false);
  //array
  let newAssign = [...CurrentClientList];
  let targetId;
  //loading
  useEffect(() => {
    dispatch(GetClientListThunk());
    dispatch(GetFarmerListThunk());
  }, [dispatch]);
  useEffect(() => {
    setClientListByFarmer(farmers);
  }, [farmers]);
  useEffect(() => {
    setClients(clients);
  }, [clients]);
  //event hanlder
  const editList = (e) => {
    newAssign = ClientListByFarmer[e.currentTarget.id].client;
    setCurrentClientList(newAssign);
    setModal(true);
    setCurrentFarmer(farmers[e.currentTarget.id].id);
    return newAssign;
  };
  const deleteAccount = (e) => {
    targetId = farmers[e.currentTarget.id].id;
    axios
      .put(`${process.env.REACT_APP_API_SERVER}/api/deleteAccount/${targetId}`)
      .then((res) => {
        //reload farmer list
        dispatch(GetFarmerListThunk());
      });
  };
  const assignPlace = (e) => {
    let addBtn = "admin-popup-list-add-btn";
    let minusBtn = "admin-popup-list-minus-btn";
    let targetClient = parseInt(e.target.name);
    let existCheck = CurrentClientList.indexOf(targetClient) !== -1;
    let findIndex = CurrentClientList.indexOf(targetClient);
    if (e.target.id === minusBtn) {
      if (existCheck) {
        newAssign.splice(findIndex, 1);
      }
    } else if (e.target.id === addBtn) {
      if (!existCheck) {
        newAssign.push(targetClient);
      }
    }
    setCurrentClientList(newAssign);
    return CurrentClientList;
  };
  const submitNewPlace = () => {
    let newPlaceForm = {
      removeId: CurrentFarmer,
      newAssign: newAssign,
    };
    axios
      .delete(`${process.env.REACT_APP_API_SERVER}/api/resetPlace`, {
        data: newPlaceForm,
      })
      .then((res) => {
        setModal(false);
        //reload farmer list
        dispatch(GetClientListThunk());
        dispatch(GetFarmerListThunk());
      });
  };
  return (
    <>
      <div className="admin-list-wrapper">
        <div className="admin-list row" style={{ backgroundColor: "#F5F5F5" }}>
          <p className="admin-list-item-name col-5">Farmer Name</p>
          <p className="admin-list-item-name col-5">no. of place assigned</p>
          <p className="admin-list-item-name col-2"></p>
        </div>
      </div>
      {ClientListByFarmer && ClientListByFarmer[0] !== undefined ? (
        ClientListByFarmer.map((client, index) => (
          <div key={client.id}>
            <div className="admin-client-overview-wrapper">
              <div
                className="admin-list row"
                style={
                  index % 2 === 0
                    ? { backgroundColor: "#FFFFFF" }
                    : { backgroundColor: "#f5f5f5" }
                }
              >
                <p className="admin-list-item-user col-5">{client.name}</p>
                <p className="admin-list-item-label col-5">
                  {client.client.length}
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
            <p className="admin-form-errMsg clo">No farmer here!</p>
          </div>
        </>
      )}
      <Modal className="admin-popup-wrapper" show={modal}>
        <Modal.Header className="admin-popup-header">
          <h1 className="admin-popup-header-title">Assign Farmer</h1>
        </Modal.Header>
        <Modal.Body className="admin-modal-body">
          {Clients && Clients[0] !== undefined ? (
            Clients.map((clients) => {
              return (
                <div key={"admin-popup-list-li-" + clients.name}>
                  <div className="admin-popup-body row">
                    <div className="admin-popup-list-name-wrapper col-6">
                      <div className="admin-popup-list-name-inner-wrapper row">
                        <p className="admin-popup-list-name col-12">
                          {clients.name}
                        </p>
                      </div>
                    </div>
                    <div className="admin-popup-list-btn-wrapper col-6">
                      <div className="admin-popup-list-btn-inner-wrapper row">
                        {CurrentClientList.indexOf(clients.id) !== -1 ? (
                          <button
                            key={"client-" + clients.id + "-minus"}
                            className="admin-popup-list-minus-btn"
                            id="admin-popup-list-minus-btn"
                            onClick={assignPlace}
                            name={clients.id}
                          >
                            ❌Unassigned
                          </button>
                        ) : (
                          <button
                            key={"client-" + clients.id + "-add"}
                            className="admin-popup-list-add-btn"
                            id="admin-popup-list-add-btn"
                            onClick={assignPlace}
                            name={clients.id}
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
            onClick={submitNewPlace}
            name={CurrentFarmer}
          >
            Submit
          </Button>
          <Button
            className="admin-popup-cancel-btn"
            onClick={() => setModal(false)}
            name={CurrentFarmer}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
