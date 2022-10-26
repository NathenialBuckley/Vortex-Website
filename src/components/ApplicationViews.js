import { Outlet, Route, Routes } from "react-router-dom";
import { Applications } from "./Applications";

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <Outlet />
                </>
            }>
                <Route path="application" element={<Applications />} />
            </Route>
        </Routes>
    )
}