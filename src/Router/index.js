import { Routes, Route } from "react-router-dom";
import App from '../pages/App'
import Daftar from "../pages/Daftar/daftar";
import Login from "../pages/Login/login";

export default function Routers() {
    return(
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/daftar" element={<Daftar />} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    )
}