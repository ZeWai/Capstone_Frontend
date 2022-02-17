import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  GetProgressThunk,
  GetProgressSThunk,
} from "../../store/Progress/actions";

export const Progress = () => {
  const ProgressFromRedux = useSelector(
    (state) => state.ProgressStore.Progress
  );
  const SFromRedux = useSelector((state) => state.ProgressStore.Single[0]);
  let dispatch = useDispatch();

  const getSingleP = (name) => {
    console.log("at getSinP", name);
    dispatch(GetProgressSThunk(name));
  };
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = `${yyyy}-${mm}-${dd}`;
  useEffect(() => {
    dispatch(GetProgressThunk());
  }, [dispatch]);

  return (
    <>
      {ProgressFromRedux.length > 0 ? (
        <section className="progress1 carousel slide" data-bs-ride="carousel">
          <div className="container">
            <h1 className="pt-5">Progress of Crops</h1>
          </div>
          <div className="mb-3 carousel">
            {ProgressFromRedux.map((l, i) => (
              <button
                className="w3-bar-item "
                data-bs-target="#progress"
                data-bs-slide-to="0"
                onClick={() => getSingleP(l.id)}
                key={i}
              >
                {l.name}
              </button>
            ))}
          </div>

          <div className="carousel-inner">
            <div className="crops carousel-item active">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-6">
                    <div className="card-body">
                      <h5 className="card-title">{SFromRedux.name}</h5>

                      <div className="row my-5 mx-4">
                        <div className="col-6">
                          <p className="card-text">
                            Status: <br />
                            Type: <br />
                            Planting Zone: <br />
                            Sowing Date: <br />
                            Estimated Harvest Date:
                          </p>
                        </div>
                        <div className="col-5">
                          <span className="card-text">
                            {SFromRedux.harvest_date < today
                              ? "Ready to harvest"
                              : "Active growing"}{" "}
                            <br />
                            {SFromRedux.type} <br />
                            Zone {SFromRedux.area} <br />
                            {SFromRedux.sowing_date &&
                            SFromRedux.sowing_date[0] !== undefined ? (
                              SFromRedux.sowing_date.slice(0, 10)
                            ) : (
                              <></>
                            )}
                            <br />
                            {SFromRedux.harvest_date &&
                            SFromRedux.harvest_date[0] !== undefined ? (
                              SFromRedux.harvest_date.slice(0, 10)
                            ) : (
                              <></>
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-12 d-flex justify-content-end crops_img">
                    <img
                      src={
                        SFromRedux.image !== undefined
                          ? ` ${process.env.REACT_APP_API_SERVER}/${SFromRedux.image}`
                          : ``
                      }
                      className="img-fluid rounded-start"
                      alt="chili"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};
