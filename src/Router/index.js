import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/Landing-Page/LandingPage"
import FormPengajuan from "../pages/Form-Pengajuan/Form-pengajuan";
import Profile from "../pages/Profile/Profile"
import Daftar from "../pages/Daftar/daftar";
import Login from "../pages/Login/login";

export default function Routers() {
    return(
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/form-pengajuan/:id" element={<FormPengajuan />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/daftar" element={<Daftar />} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    )
}