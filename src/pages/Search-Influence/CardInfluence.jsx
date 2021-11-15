import { Card,Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./cardinfluence.css"

export default function CardInfluence({img,name,location,category,followers,idBaru,href}){
    return (
        <div className="cardInfluence p-0 bg-light" style={{boxShadow: "0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06)"}}>
            <div className="image p-0" style={{ height: "250px" }}>
                <img
                    src={img}
                    className="img-fluid"
                    style={{ width: "100%", height: "250px", objectFit: "cover" }}
                />
                <div className="card-img-overlay float-end p-2 fw-bold fs-6">top</div>
            </div>
            <div className="product-detail-container p-2">
                <div className="d-flex">
                    <div className="ms-lg-1 ms-md-1 ms-sm-1"><strong style={{color:"rgb(51,0,123)"}}>{name}</strong></div>
                    <button className="" style={{background:"linear-gradient(to right,#AF1B87, darkviolet)",color:"white",borderRadius:"20px", border:"2px solid white",width:"50px"}}>
                        top
                    </button>
                </div>
                <div className="d-flex">
                    <div className="ms-lg-1">{category}</div>
                    <div className="me-lg-1"><i class="fas fa-map-marker-alt" style={{color:"rgb(51,0,123)"}}></i> {location}</div>
                </div>
                <div className="d-flex gap-2 justify-content-between align-items-center">
                    <div className="jenis_wisata ms-lg-1 fw-normal fs-7" ><span><i class="fas fa-users" style={{color:"rgb(51,0,123)"}}></i> {followers}</span></div>
                </div>
                <Link className='btn w-100 mt-2 mb-1' style={{ backgroundColor: "darkviolet", color: "white" }} to={`/search-influence/${idBaru}`}>
                    readmore
                </Link>
            </div>
        </div>
        // </div>
    )
}