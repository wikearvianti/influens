import { Routes, Route } from "react-router-dom";
import App from '../pages/App'
import 'bootstrap/dist/css/bootstrap.min.css';
import InfluenceProfile from "../pages/Influence-Profile/InfluenceProfile";
import SearchInfluencer from "../pages/Search-Influence/Search-Influence";

export default function Routers() {
    return(
        <Routes>
            <Route path="/" element={<App />} />
            <Route path='/search-influence/:idBaru' element={< InfluenceProfile/>} />
            <Route path="/search-influence" element={< SearchInfluencer/>} />
        </Routes>
    )
}