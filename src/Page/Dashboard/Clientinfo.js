import logo from './assets/logo.svg';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetClientThunk } from '../../store/Farminfo/actions';
export const Clientinfo = () => {
   
    const CinfoFromRedux = useSelector((state) => state.FramStore.Cinfo[0]);
    let dispatch = useDispatch();

    useEffect(()=>{
        console.log("on dispatch")
        dispatch(GetClientThunk())
    }, [dispatch])
    
    
    return(
        <>
        <section className='intro my-2'>
            <div className='container'>
                <div className='card mb-3'>
                    <div className='row g-0'>
                        <div className='col-md-6 col-lg-6 col-sm-12 intro_photo'>
                            <img src={CinfoFromRedux.image} className="img-fluid rounded-start" alt="logo" />
                        </div>
                        <div className='col-md-6 col-lg-6 col-sm-12'>
                            <div className='card-body farmInfo'>
                                <div className="row intro_info">

                                <div className="col-4 ms-4">
                                <img src={logo} className="App-logo" alt="logo" />
                                </div>

                                <div className="col-6 ">
                                <h4 className="card-title text-left farm_info">Farm Information</h4>
                                <h1 className="text-left mt-5 farm_location" >{CinfoFromRedux.name}</h1>
                                </div>

                                </div>
                                <div className="row mx-4 intro_text">
                                <div className="col-4 info-heading-container">
                                <p className="card-text ms-5 info-heading">
                                    Name:<br/>
                                    Address :<br/><br/>
                                    Size :<br/>
                                    Opened :<br/>
                                </p>
                                </div>
                                <div className="col-6 info-content">
                                <span className="card-text">
                                    {CinfoFromRedux.name} Rooftop Farm<br/>
                                    {CinfoFromRedux.address}<br/>
                                    Size<br/>
                                    Opened<br/>
                                </span>
                                </div>
                                </div>
                            </div>----------
                        </div>
                    </div>
                </div>
            </div>
        </section> 
        </>
    )
}