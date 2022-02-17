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
      <section className="intro">
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
                <table className="intro_info">
                  <tbody>
                    <tr>
                      <th className="Cinfologo">
                        <br />
                        <img
                          src={
                            CinfoFromRedux.icon !== undefined
                              ? ` ${process.env.REACT_APP_API_SERVER}/${CinfoFromRedux.icon}`
                              : ``
                          }
                          className="App-logo"
                          alt="logo"
                        />
                      </th>
                      <th className="Cinfoheader">
                        <h4 className="Cinfoheadertitle">Farm infomation</h4>
                        <h1 className="CinfoName">{CinfoFromRedux.name}</h1>
                      </th>
                    </tr>
                    <tr>
                      <td className="Cinfocol">Name:</td>
                      <td>{CinfoFromRedux.name} Rooftop Farm</td>
                    </tr>
                    <tr>
                      <td className="Cinfocol">Address:</td>
                      <td>{CinfoFromRedux.address}</td>
                    </tr>
                    <tr>
                      <td className="Cinfocol">Opened:</td>
                      <td>
                        {" "}
                        {CinfoFromRedux.name &&
                        CinfoFromRedux.name !== undefined ? (
                          CinfoFromRedux.updated_at.slice(0, 10)
                        ) : (
                          <></>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
