import {Card} from "react-bootstrap"

export default function CardInsight({logo,followers,likes,comments}){
    return (
        <div className="card col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12 p-2 g-2 align-items-center" >
                <div className="py-3">
                    <i class={logo}style={{ color: "#29AAF3"}}> Insight</i>
                    
                </div>
            <div className="d-flex justify-content-between">
                <div className="p-lg-3">
                    <h4 className="text-center fw-bold">{followers}</h4>
                    <h6>Followers </h6>
                </div>
                <div className="p-lg-3">
                    <h4 className="text-center fw-bold">{likes}</h4>
                    <h6>Reactions </h6>
                </div>
                <div className="p-lg-3">
                    <h4 className="text-center fw-bold">{comments}</h4>
                    <h6>Comments </h6>
                </div>
            </div>
        </div>
    )
}