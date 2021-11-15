import React, { useState,useEffect, version }from "react";
import "./styles.css";
import { Card,Row,Col,Button } from "react-bootstrap";
import Header from "../../Layout/Header"
import Footer from "../../Layout/footer"
import {VerticalBar} from "./ProfileComponent/VerticalBar";
import CardInsight from "./ProfileComponent/CardInsight";
import CardInfluence from "../Search-Influence/CardInfluence";
import { useParams } from "react-router-dom";

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
                <div>
                    <div className="Caption mb-lg-5">
                        <div className="b1-caption d-flex justify-content-between">
                            <h4>
                                <strong>{detailInfluencer !== undefined? (detailInfluencer.nama) :null}</strong>
                            </h4>
                            <h5 className="location"><i class="fas fa-map-marker-alt "></i>{detailInfluencer !== undefined? (detailInfluencer.lokasi) :null}</h5>
                        </div>
                        <h5 className="kategori">{detailInfluencer !== undefined? (detailInfluencer.kategori) :null}</h5>
                    </div>
                </div>  
            {/* </div>     */}
            <div className="container">
                <div className="row mt-5 mb-lg-5"> 
                        <CardInsight 
                            followers={detailInfluencer !== undefined? (detailInfluencer.insight.followersinstagram) :null} 
                            likes={detailInfluencer !== undefined? (detailInfluencer.insight.likesinstagram) :null}
                            comments={detailInfluencer !== undefined? (detailInfluencer.insight.commentsinstagram) :null}
                            logo="fab fa-instagram fa-lg"
                        />
                        <CardInsight 
                            followers={detailInfluencer !== undefined? (detailInfluencer.insight.followersfacebook) :null} 
                            likes={detailInfluencer !== undefined? (detailInfluencer.insight.likesfacebook) :null}
                            comments={detailInfluencer !== undefined? (detailInfluencer.insight.commentsfacebook) :null}
                            logo="fab fa-facebook fa-lg"
                        />
                        <CardInsight 
                            dataInsight={detailInfluencer !== undefined? (detailInfluencer.insight) :null} 
                            followers={detailInfluencer !== undefined? (detailInfluencer.insight.followerstwitter) :null} 
                            likes={detailInfluencer !== undefined? (detailInfluencer.insight.likestwitter) :null}
                            comments={detailInfluencer !== undefined? (detailInfluencer.insight.commentstwitter) :null}
                            logo="fab fa-twitter fa-lg"
                        />          
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
                        <Col md={6}>
                            <Card>
                                <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                        <p className="text-start">
                                            {' '}
                                            Apa Itu Influencer dan Bagaimana Manfaatnya untuk Bisnis?{' '}
                                        </p>
                                        <footer className="blockquote-footer">
                                            Secara sederhana, influencer adalah seseorang yang bisa memberikan pengaruh di masyarakat.
                                            Anda bisa membuat produk Anda menjadi pusat perhatian dengan cepat. Caranya, menggandeng seseorang yang sedang viral sebagai influencer Anda.
                                        </footer>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md = {4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Hallo, Dewi{}!</Card.Title>
                                    <Card.Text>
                                        Apakah kamu sudah siap membuat produkmu menjadi terkenal bersama {""}
                                    </Card.Text>
                                    <button style={{background:"darkviolet",color:"white",borderRadius:"10px", border:"2px solid white", padding:"8px 30px"}}>Daftar Sekarang</button>
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