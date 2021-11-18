import { Routes, Route, Navigate  } from "react-router-dom";
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
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/form-pengajuan/:id" element={<FormPengajuan />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/daftar" element={<Daftar />} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path='/search-influence/:idBaru' element={< InfluenceProfile/>} />
            <Route exact path="/search-influence" element={< SearchInfluencer/>} />
            <Route exact path="*" element={<Navigate replace to="/" />} />
        </Routes>
    )
}