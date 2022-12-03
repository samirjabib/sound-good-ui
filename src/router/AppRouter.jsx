
import { Routes, Route } from "react-router-dom"
import { AuthRoutes } from "../auth"
import { HomePage } from "../home"
import { Layout } from "../ui"
import { DashboardRoutes } from "../dashboard/routes/DashboardRoutes"


export const AppRouter = () => {

    const user = {
        id:1,
        name:'samir',
        role:"admin",
    }

    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                {/* Public Routes  */}
                <Route path="/" element={<HomePage/>}/>
                <Route path ="/auth/*" element = {<AuthRoutes/>}/>

                {/*Protected Route */}
                <Route path='/dashboard/*' element={<DashboardRoutes/>}/>
            </Route>
        </Routes>
    )
}