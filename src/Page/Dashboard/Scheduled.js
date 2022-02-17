import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetScheduledThunk } from "../../store/Scheduled/actions";

export const Scheduled = () => {
  const SchFromRedux = useSelector((state) => state.ScheduledStore.Scheduled);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetScheduledThunk());
  }, [dispatch]);

  console.log(`SchFromRedux`, SchFromRedux);
  return (
    <>
      <section className="Sch_crop">
        <div className="container">
          <h1 className="pt-4">Scheduled Crops</h1>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="card-body Scheduled_card">
                <table className="Scheduled_table">
                  <tbody>
                    <tr>
                      <th>Zone</th>
                      <th>Crop Name</th>
                      <th>Sowing Date</th>
                      <th>Harvest Date</th>
                      <th>Yield</th>
                      <th>Contribution</th>
                      <th></th>
                    </tr>

                    {SchFromRedux && SchFromRedux.length >= 0
                      ? SchFromRedux.map((l, i) => (
                          <tr key={i}>
                            <td>{l.area}</td>
                            <td>{l.name}</td>
                            <td>
                              {" "}
                              {l.sowing_date &&
                              l.sowing_date[0] !== undefined ? (
                                l.sowing_date.slice(0, 10)
                              ) : (
                                <></>
                              )}
                            </td>
                            <td>
                              {" "}
                              {l.harvest_date &&
                              l.harvest_date[0] !== undefined ? (
                                l.harvest_date.slice(0, 10)
                              ) : (
                                <></>
                              )}
                            </td>
                            <td>{l.yield}kg</td>
                            <td>{l.contribution} </td>
                          </tr>
                        ))
                      : null}
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
