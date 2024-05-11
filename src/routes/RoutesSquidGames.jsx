import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cueva_Encantada from "../pages/cueva_encantada/Cueva_Encantada";
import Login from "../pages/login/Login";

export default function RoutesSquidGames() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cueva_encantada" element={<Cueva_Encantada />} />
            </Routes>
        </BrowserRouter>
    )
}