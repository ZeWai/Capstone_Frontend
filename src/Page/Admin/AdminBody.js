import { useState } from "react";
import { ClientsForm } from "./ClientsForm";
import { FarmerForm } from "./FarmerForm";
import { AdminForm } from "./AdminForm";
import { ClientsOview } from "./ClientsOview";
import { FarmerOview } from "./FarmerOview";

export const AdminBody = () => {
    const [currentView, setCurrentView] = useState('Create Clients Account')
    const changeForm = (event) => {
        if (event.target.id === "admin-sub-btn-create-client") {
            return setCurrentView("Create Clients Account");
        } else if (event.target.id === "admin-sub-btn-create-farmer") {
            return setCurrentView("Create Farmer Account");
        } else if (event.target.id === "admin-sub-btn-create-admin") {
            return setCurrentView("Create Admin Account");
        } else if (event.target.id === "admin-sub-btn-overview-client") {
            return setCurrentView("Clients Overview");
        } else if (event.target.id === "admin-sub-btn-overview-farmer") {
            return setCurrentView("Farmer Overview");
        }
    }
    return (
        <>
            <div className="admin-body container-fluid">
                <div className="admin-body-wrapper row">
                    <div className="col-12 col-lg-2 admin-control">
                        <div className="row admin-btn-wrapper">
                            <h1 className="col-12 admin-sub-title">Create Accounts</h1>
                            <button className="col-12 admin-sub-btn" onClick={changeForm} id="admin-sub-btn-create-client">Client</button>
                            <button className="col-12 admin-sub-btn" onClick={changeForm} id="admin-sub-btn-create-farmer">Farmer</button>
                            <button className="col-12 admin-sub-btn" onClick={changeForm} id="admin-sub-btn-create-admin">Admin</button>
                            <h1 className="col-12 admin-sub-title">Accounts Overview</h1>
                            <button className="col-12 admin-sub-btn" onClick={changeForm} id="admin-sub-btn-overview-client">Client</button>
                            <button className="col-12 admin-sub-btn" onClick={changeForm} id="admin-sub-btn-overview-farmer">Farmer</button>
                        </div>
                    </div>
                    <div className="col-12 col-lg-10 admin-form">
                        <div className="row admin-form-container">
                            <h1 className="col-12 admin-title">{currentView}</h1>
                            {currentView === "Create Clients Account" && <ClientsForm />}
                            {currentView === "Create Farmer Account" && <FarmerForm />}
                            {currentView === "Create Admin Account" && <AdminForm />}
                            {currentView === "Clients Overview" && <ClientsOview />}
                            {currentView === "Farmer Overview" && <FarmerOview />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}