
import logo2 from "./assets/Icon=Icon - Active growing.png"
import logo3 from './assets/Icon=Icon - Ready to harvest.png'
import logo4 from './assets/Icon=Icon - Ready to sow.png'
import logo5 from './assets/Icon=Icon - Soil planted.png'
import {App3} from './chart'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetOverThunk } from "../../store/Overview/actions"
export const FarmoverV = () => {

    const OinfoFromRedux = useSelector((state) => state.OverStore.Oinfo);
    const PFromRedux = useSelector((state) => state.OverStore.Productivity);
    let dispatch = useDispatch();

    useEffect(()=>{
        console.log("on overdispatch")
        dispatch(GetOverThunk())
    }, [dispatch])
   

    return(
        <>
        <section className='my-2 overview'>
            <div className='container'>
                <h1 className='pt-5'>Farm overview</h1>
                <div className='card mb-3'>
                    <div className="row">
                        <div className='col-lg-5 overview_box'>
                            <div className='impact-up'>
                                <div className='impact-up-partA'>
                                    <div className='impact_group m-2 mt-2'>
                                        <img src={logo2} className="overview_icon m-3" alt="logo" />
                                        <div className='overview_info readyToHarvest'>
                                        <h2 className="overview_title">Ready to harvest</h2>
                                        <h3 className="overview_data">{OinfoFromRedux[0]}</h3>
                                        <h3 className="overview_freq">Planters</h3>
                                        </div>
                                    </div>
                                    <div className='impact_group m-2 mt-2'>
                                        <img src={logo3} className="overview_icon m-3" alt="logo" />
                                        <div className='overview_info activeGrowin'>
                                        <h2 className="overview_title">Active growing</h2>
                                        <h3 className="overview_data">{OinfoFromRedux[1]}</h3>
                                        <h3 className="overview_freq">Planters</h3>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="doughnut-container" >
                                    
                                    <App3 />
                                    </div>
                                
                            </div>
                            <div className='impact-down'>
                                <div className='impact_group m-2 mt-2'>
                                    <img src={logo4} className="overview_icon m-3" alt="logo" />
                                    <div className='overview_info readyToSow'>
                                    <h2 className="overview_title">Ready to sow</h2>
                                    <h3 className="overview_data">{OinfoFromRedux[2]}</h3>
                                    <h3 className="overview_freq">Planters</h3>
                                    </div>
                                </div>
                                <div className='impact_group m-2 mt-2 soil-planted' >
                                    <img src={logo5} className="overview_icon m-3" alt="logo" />
                                    <div className='overview_info'>
                                        <p>hi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className="col-lg-1 empty_div"></div>
                            <div className="col-lg-6">
                        <div className="card-body">
                            <h1 className="productivity">Productivity</h1>
                            
                            <table>
                            <tbody>
                            <tr>
                            <th>Crop</th>
                            <th>Yield</th>
                            <th>Date of Harvest</th>
                            <th>Contribution</th>
                            </tr>
                            {PFromRedux.map((l, i) => (
                            <tr key={i}>
                            <td>{l.name}</td>
                            <td>{l.yield}</td>
                            <td>{l.harvest_date}</td>
                            <td>{l.contribution}</td>
                            </tr>
                            ))}
                            </tbody>
                            </table>
                            
                            
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}