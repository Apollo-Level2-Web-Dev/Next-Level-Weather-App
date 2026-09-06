import { Outlet } from "react-router";

const MainLayout = () => {
    return (
       
           
            <div  className="min-h-screen flex justify-center items-center">
                <Outlet/>
            </div>
          
        
    );
};

export default MainLayout;