import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/Landing-Page/LandingPage"
import FormPengajuan from "../pages/Form-Pengajuan/Form-pengajuan";
import Profile from "../pages/Profile/Profile"

export default function Routers() {
    return(
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/form-pengajuan/:id" element={<FormPengajuan />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    )
}