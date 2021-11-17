import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/Landing-Page/LandingPage"
import FormPengajuan from "../pages/Form-Pengajuan/Form-pengajuan";
import Profile from "../pages/Profile/Profile"
import Daftar from "../pages/Daftar/daftar";
import Login from "../pages/Login/login";
import InfluenceProfile from "../pages/Influence-Profile/InfluenceProfile";
import SearchInfluencer from "../pages/Search-Influence/Search-Influence";

export default function Routers() {
    
    return(
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/form-pengajuan/:idBaru" element={<FormPengajuan />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/daftar" element={<Daftar />} />
            <Route path="/login" element={<Login/>} />
             <Route path='/search-influence/:idBaru' element={< InfluenceProfile/>} />
            <Route path="/search-influence" element={< SearchInfluencer/>} />
        </Routes>
    )
}