import { Route, Routes } from "react-router-dom"
import { AccountPage } from "../pages/AccountPage"
import { ProductsAdquiredPage } from "../pages/ProductsAdquiredPage"
import { AdminPage } from '../pages/AdminPage';




export const DashboardRoutes = () => {


   

    return(
        <>
            {
                
                <Routes>
                    <Route path="/account" element={<AccountPage/>}/>
                    <Route path="/admin" element={<AdminPage/>}/>
                    <Route path="/products-adquired" element={<ProductsAdquiredPage/>}/>


                </Routes>
            }
        </>
        
    )
}