import React, { useState,useEffect, version }from "react";
import "./styles.css";
import { Card,Row,Col,Button } from "react-bootstrap";
import Header from "../../Layout/Header"
import Footer from "../../Layout/footer"
import {VerticalBar} from "./ProfileComponent/VerticalBar";
import CardInsight from "./ProfileComponent/CardInsight";
import CardInfluence from "../Search-Influence/CardInfluence";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function InfluenceProfile(){
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch("https://my-json-server.typicode.com/dewimardanicristin/db-influence/influencer")
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);
    
    let {idBaru} = useParams();
    console.log(idBaru);
    let detailInfluencer = (items !== undefined ? items.find((x) => x.id === Number(idBaru)) : null);
    // const detailInfluencer = items.find((searchData)=>searchData.id === Number(idBaru)) 
    console.log(detailInfluencer);
    console.log(items);

    // state.data !== undefined ?
    //         state.data.slice(0,3).map((e)=> {return (
    //           <Card key={e.id} top={true} nama={e.nama} jenis={e.kategori} fllwr={e.followers} src={e.img_profil} link={""}/>
    //         )}) : <p>Loading...</p>
    return(
        <React.Fragment>
             <Header />
            {/* <div className="container-fluid"> */}
                <div className="FotoSampul">
                    <img
                        src={detailInfluencer !== undefined? (detailInfluencer.img_sampul) :null}
                        alt="First slide"
                    />
                </div>
                <div className="FotoProfile mb-lg-5" style={{margin:"0px 200px"}}>
                    <img className="rounded-circle"
                         src={detailInfluencer !== undefined? (detailInfluencer.img_profil) :null}
                    />
                    <br/>
                </div>
                
            {/* </div>     */}
            <div className="container">
                <br/><br/>
                <div className="mt-5">
                    <div className="Caption mb-lg-5">
                        <div className="b1-caption d-flex justify-content-between">
                            <h4>
                                <strong style={{color:"rgb(51,0,123)"}}>{detailInfluencer !== undefined? (detailInfluencer.nama) :null}</strong>
                            </h4>
                            <h5 className="location"><i class="fas fa-map-marker-alt "></i> {detailInfluencer !== undefined? (detailInfluencer.lokasi) :null}</h5>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h5 className="kategori">{detailInfluencer !== undefined? (detailInfluencer.kategori) :null}</h5>
                            <div className="d-flex">
                                <i class="fas fa-star" style={{color:"rgb(51,0,123)"}}></i>
                                <i class="fas fa-star" style={{color:"rgb(51,0,123)"}}></i>
                                <i class="fas fa-star" style={{color:"rgb(51,0,123)"}}></i>
                                <i class="fas fa-star" style={{color:"rgb(51,0,123)"}}></i>
                            </div>
                        </div>
                    </div>
                </div>  
                <hr style={{color:"rgb(51,0,123)"}}/>
                    <h3 className="fw-bold">Data Insight</h3>
                <div className="row-3 d-flex justify-content-center my-4">
                    <div className="cardx p-4 col-4 me-3" >
                        <div className="d-flex justify-content-between py-3">
                            <div className="ms-4">
                                <i class="fab fa-instagram fa-lg" style={{ color: "#B41A82" }}></i>
                                <strong style={{color:"#272D4E"}}> Insight</strong>
                            </div>
                            <div className="me-4">
                                <i class="fas fa-chart-line" style={{ color: "#29AAF3" }}></i>
                                <strong>+11%</strong>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                                <div className="col-lg-4 col-md-3 col-sm-3">
                                    <div className="py-3">
                                        <h4 className="text-center fw-bold">{detailInfluencer !== undefined ? (detailInfluencer.insight.followersinstagram) : null}</h4>
                                        <h6 className="text-center">Followers </h6>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-3 col-sm-3">
                                    <div className="py-3">
                                        <h4 className="text-center fw-bold">{detailInfluencer !== undefined ? (detailInfluencer.insight.likesinstagram) : null}</h4>
                                        <h6 className="text-center">Reactions </h6>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-3 col-sm-3">
                                    <div className="py-3">
                                        <h4 className="text-center fw-bold">{detailInfluencer !== undefined ? (detailInfluencer.insight.commentsinstagram) : null}</h4>
                                        <h6 className="text-center">Comments</h6>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="cardx p-4 col-4 me-3" >
                        <div className="d-flex justify-content-between py-3">
                            <div className="ms-4">
                                <i class="fab fa-facebook fa-lg" style={{ color: "#486AA5" }}></i>
                                <strong style={{color:"#272D4E"}}> Insight</strong>
                            </div>
                            <div className="me-4">
                                <i class="fas fa-chart-line" style={{ color: "#29AAF3" }}></i>
                                <strong>+11%</strong>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                                <div className="col-lg-4 col-md-3 col-sm-3">
                                    <div className="py-3">
                                        <h4 className="text-center fw-bold">{detailInfluencer !== undefined ? (detailInfluencer.insight.followersinstagram) : null}</h4>
                                        <h6 className="text-center">Followers </h6>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-3 col-sm-3">
                                    <div className="py-3">
                                        <h4 className="text-center fw-bold">{detailInfluencer !== undefined ? (detailInfluencer.insight.likesinstagram) : null}</h4>
                                        <h6 className="text-center">Reactions </h6>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-3 col-sm-3">
                                    <div className="py-3">
                                        <h4 className="text-center fw-bold">{detailInfluencer !== undefined ? (detailInfluencer.insight.commentsinstagram) : null}</h4>
                                        <h6 className="text-center">Comments</h6>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="cardx p-4 col-4" >
                        <div className="d-flex justify-content-between py-3">
                            <div className="ms-4">
                                <i class="fab fa-twitter fa-lg" style={{ color: "#29AAF3"}}></i>
                                <strong style={{color:"#272D4E"}}> Insight</strong>
                            </div>
                            <div className="me-4">
                                <i class="fas fa-chart-line" style={{ color: "#29AAF3" }}></i>
                                <strong>+11%</strong>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                                <div className="col-lg-4 col-md-3 col-sm-3">
                                    <div className="py-3">
                                        <h4 className="text-center fw-bold">{detailInfluencer !== undefined ? (detailInfluencer.insight.followersinstagram) : null}</h4>
                                        <h6 className="text-center">Followers </h6>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-3 col-sm-3">
                                    <div className="py-3">
                                        <h4 className="text-center fw-bold">{detailInfluencer !== undefined ? (detailInfluencer.insight.likesinstagram) : null}</h4>
                                        <h6 className="text-center">Reactions </h6>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-3 col-sm-3">
                                    <div className="py-3">
                                        <h4 className="text-center fw-bold">{detailInfluencer !== undefined ? (detailInfluencer.insight.commentsinstagram) : null}</h4>
                                        <h6 className="text-center">Comments</h6>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            

                <div className="tags mb-lg-5">
                    <h3 className="mb-4"><strong>Tags</strong></h3>
                    {
                        detailInfluencer !== undefined?
                        detailInfluencer.tags.map((val) => {
                            return(
                               <>
                                    <button className="mx-2" style={{background:"linear-gradient(to right,#AF1B87, darkviolet)",color:"white",borderRadius:"20px", border:"2px solid white", padding:"8px 30px"}}>
                                        {val}
                                    </button>
                               </> 
                            )
                        }) :null
                    }
                </div>
                
                <div className="about mt-4 mb-4">
                    <h3><strong>About</strong></h3>
                    <Row className=" mt-4 mb-4 g-4 justify-content-between">
                        <Col md={7}>
                            {/* <Card> */}
                                <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                        <p className="text-start">
                                            {' '}
                                            Apa Itu Influencer dan Bagaimana Manfaatnya untuk Bisnis?{' '}
                                        </p>
                                        <footer className="blockquote-footer">
                                            Secara sederhana, influencer adalah seseorang yang bisa memberikan pengaruh di masyarakat.
                                            Anda bisa membuat produk Anda menjadi pusat perhatian dengan cepat. Caranya, menggandeng seseorang yang sedang viral sebagai influencer Anda.
                                            Semoga informasi di atas dapat membantu mengembangkan bisnis Anda lebih baik lagi. Sukses untuk Anda!
                                        </footer>
                                    </blockquote>
                                </Card.Body>
                            {/* </Card> */}
                        </Col>
                        <Col md = {5}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Hallo,</Card.Title>
                                    <Card.Text>
                                        Apakah kamu sudah siap membuat produkmu menjadi terkenal bersama {detailInfluencer !== undefined? (detailInfluencer.nama) :null}
                                    </Card.Text>
                                    <Link className='btn w-50 mt-2 mb-1' style={{ backgroundColor: "darkviolet", color: "white" }} to={`/form-pengajuan/:${idBaru}`}>
                                        Daftar Sekarang
                                    </Link>
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>

                <div className="chart mb-5">
                    <h3><strong>Engagement Rate</strong></h3>
                    <Row>
                        <VerticalBar />
                    </Row>
                </div>

                <div className="mt-4 mb-4">
                    <div className="text-center mt-5">
                        <h5><strong>Lihat Lebih Banyak</strong></h5>
                        <h3>Lihat Influencer Lainnya yang Mungkin Anda Suka</h3>
                        <div className="row " key={items.id}>      
                                {
                                    items.slice(1,4).map((val)=>{
                                        return(
                                            <div className="col-lg-4 col-md-6 col-sm-12 g-4" key={items.id}>
                                                <CardInfluence 
                                                    img={val.img_profil}
                                                    name={val.nama}
                                                    location={val.lokasi}
                                                    category={val.kategori}
                                                    followers={val.followers}
                                                /> 
                                            </div> 
                                        )
                                    })
                                }
                         
                        </div>
                    </div>
                </div>
                </div>
                <Footer />
           
         </React.Fragment>
    )
}