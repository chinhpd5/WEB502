import { Outlet } from "react-router-dom";
import HeaderAdmin from "./layouts/HeaderAmin";

function AdminLayout(){

    return (
        <>
            <div className="row m-0">
                <div className="col-2 p-0">
                    <HeaderAdmin/>
                </div>
                <div className="col-10 p-0">
                    <Outlet/>
                </div>
            </div>
        </>
    )

}

export default AdminLayout;