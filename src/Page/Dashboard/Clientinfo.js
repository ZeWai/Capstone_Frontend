import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetClientThunk } from "../../store/Farminfo/actions";
export const Clientinfo = () => {
  const CinfoFromRedux = useSelector((state) => state.FarmStore.Cinfo[0]);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetClientThunk());
  }, [dispatch]);
  return (
    <>
      <section className="intro my-2">
        <div className="container">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-6 col-lg-6 col-sm-12 intro_photo">
                <img
                  src={
                    CinfoFromRedux.image !== undefined
                      ? ` ${process.env.REACT_APP_API_SERVER}/${CinfoFromRedux.image}`
                      : ``
                  }
                  className="img-fluid rounded-start"
                  alt="logo"
                />
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12">
                <div className="card-body farmInfo">
                  <div className="row intro_info">
                    <div className="col-4 ms-4">
                      <img
                        src={
                          CinfoFromRedux.icon !== undefined
                            ? ` ${process.env.REACT_APP_API_SERVER}/${CinfoFromRedux.icon}`
                            : ``
                        }
                        className="App-logo"
                        alt="logo"
                      />
                    </div>

                    <div className="col-6 ">
                      <h4 className="card-title text-left farm_info">
                        Farm Information
                      </h4>
                      <h1 className="text-left mt-5 farm_location">
                        {CinfoFromRedux.name}
                      </h1>
                    </div>
                  </div>
                  <div className="row mx-4 intro_text">
                    <div className="col-4 col-sm-3 info-heading-container">
                      <p className="card-text ms-5 info-heading">
                        Name:
                        <br />
                        Address :<br />
                        <br />
                        Opened :<br />
                      </p>
                    </div>
                    <div className="col-6 col-sm-9 info-content">
                      <span className="card-text">
                        {CinfoFromRedux.name} Rooftop Farm
                        <br />
                        {CinfoFromRedux.address}
                        <br />
                        {CinfoFromRedux.updated_at &&
                        CinfoFromRedux.updated_at[0] !== undefined ? (
                          CinfoFromRedux.updated_at.slice(0, 10)
                        ) : (
                          <></>
                        )}
                        <br />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
