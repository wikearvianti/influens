import { Routes, Route } from "react-router-dom";
import App from '../pages/App'
import FormPengajuan from "../pages/Form-Pengajuan/Form-pengajuan";
import Profile from "../pages/Profile/Profile"

export default function Routers() {
    return(
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/form-pengajuan" element={<FormPengajuan />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    )
}