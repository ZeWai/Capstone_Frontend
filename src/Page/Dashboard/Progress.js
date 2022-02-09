import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetProgressThunk,GetProgressSThunk } from '../../store/Progress/actions';
import logo from './assets/logo.svg';

export const Progress = () => {

    


    const ProgressFromRedux = useSelector((state) => state.ProgressStore.Progress);
    const SFromRedux = useSelector((state) => state.ProgressStore.Single[0]);
    let dispatch = useDispatch();

    const getSingleP = (name) =>{
        console.log("at getSinP", name)
        dispatch(GetProgressSThunk(name))
    }



    useEffect(()=>{
        console.log("on dispatch",ProgressFromRedux)
        dispatch(GetProgressThunk())
        
    }, [dispatch])
    
    console.log("hi")
    return (
        <>
        {ProgressFromRedux.length>0 ?
        <section className="progress1 carousel slide" data-bs-ride="carousel">
            <div className="container">
                <h1 className="pt-5">Progress of Crops</h1>
            </div>
            <div className="mb-3 carousel">
            
            { ProgressFromRedux.map((l, i) => (
            <button className="w3-bar-item w3-button tablink w3-red active" data-bs-target="#progress"
            data-bs-slide-to="0" onClick={()=> getSingleP(l.id)} key={i}>{l.name}</button>
            
            ))}
            </div>
           
            <div className="carousel-inner">
            <div className="crops carousel-item active">
            <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">{SFromRedux.name}</h5>

                        <div className="row my-5 mx-4">
                            <div className="col-6">
                                <p className="card-text">
                                    Status: <br/>
                                    Type: <br/>
                                    Planting Zone: <br/>
                                    Sowing Month: <br/>
                                    Excepted Harvest Month:
                                </p>
                            </div>
                            <div className="col-5">
                                <span className="card-text">
                                    status <br/>
                                    {SFromRedux.type} <br/>
                                    Zone A <br/>
                                    {SFromRedux.sowing_date} <br/>
                                    name
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
              

                <div className="col-md-6 col-sm-12 d-flex justify-content-end crops_img">
                    <img src={logo}
                        className="img-fluid rounded-start" alt="chili" />
                    <span className="crops_date">05/01/2021</span>
                </div>
            </div>
             </div>
             </div>
            </div>  
        </section>: null}
        </> 
    )
}
