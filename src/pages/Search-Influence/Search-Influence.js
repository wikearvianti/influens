import {FormControl} from 'react-bootstrap'
import Header from '../../Layout/Header'
import React from 'react'
import { useState,useEffect } from 'react'
import Footer from '../../Layout/footer'
import CardInfluence from './CardInfluence'
import { useLocation } from "react-router-dom";


export default function SearchInfluencer(){
    // eslint-disable-next-line
    const [error, setError] = useState(null)
    // eslint-disable-next-line
    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState([])
    const [q, setQ] = useState("")
    const [searchParam] = useState(["nama","kategori","lokasi"])
    const [filterParam, setFilterParam] = useState(["All"])

    let location = useLocation();
    // const qs = require('query-string');
    // const params = qs.parse(location.search);
    console.log(location)
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
        
        function search(items) {
            return items.filter((item) => {
                    // eslint-disable-next-line eqeqeq
                    if (item.lokasi == filterParam || item.kategori == filterParam) {
                        return searchParam.some((newItem) => {
                            return (
                                item[newItem]
                                    .toString()
                                    .toLowerCase()
                                    .indexOf(q.toLowerCase()) > -1
                            )
                        })
                        // eslint-disable-next-line eqeqeq
                    } else if (filterParam == "All") {
                        return searchParam.some((newItem) => {
                            return (
                                item[newItem]
                                    .toString()
                                    .toLowerCase()
                                    .indexOf(q.toLowerCase()) > -1
                            )
                        })
                    }
                });
        }

    return(
        <React.Fragment>
            <Header></Header>
            <div className="container mb-4">
                <div className="search mt-4">
                    <div className="d-flex justify-content-end">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="formcontrol me-2"
                            aria-label="Search"
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            style={{ width: "25%" }}
                        />
                    </div>
                </div>
                    <aside className="d-block p-4 mt-4 me-4 mb-5 d-lg-block d-sm-none" style={{ float: "left",boxShadow: "0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06)",borderRadius:"10px"}}>

                    <h6 className="fw-bold" >Filter Influencer Favoritemu</h6>
                    <div className="select">
                        <select
                            onChange={(e) => {
                                setFilterParam(e.target.value);
                            }}
                            className="custom-select w-100 m-auto my-3"
                            style={{border:"1px solid rgb(51,0,123)",color:"#444444"}}
                            
                        >
                            <option value="All"disabled>Filter By Lokasi</option>
                            <option value="DKI Jakarta">DKI Jakarta</option>
                            <option value="Jawa Barat">Jawa Barat</option>
                        </select>
                        <span className="focus"></span>
                    </div>  
                    <div className="select">
                        <select
                            onChange={(e) => {
                                setFilterParam(e.target.value);
                            }}
                            className="custom-select m-auto w-100 mb-3" 
                            style={{border:"1px solid rgb(51,0,123)",color:"#444444"}}
                        >
                            <option value="All" disabled>Filter By Kategori</option>
                            <option value="Beauty Influencer">Beauty Influencer</option>
                            <option value="Food Vlogger">Food Vlogger</option>
                            <option value="Pendidikan">Pendidikan</option>
                        </select>
                        <span className="focus"></span>
                    </div>
                    </aside>
                    <div className="row">
                        {
                            items !== undefined ? 
                            search(items).map((val) => {
                                console.log(val)
                                 return (
                                    <div className="col-lg-4 col-md-6 col-sm-12 g-4" key={items.id}>
                                    <CardInfluence 
                                        img={val.img_profil}
                                        name={val.nama}
                                        location={val.lokasi}
                                        category={val.kategori}
                                        followers={val.followers}
                                        idBaru={val.id}
                                    />
                                    </div>
                                )
                            }) 
                             : <p>Loading...</p>
                        }
                    </div>
        
            </div>
            <Footer />
        </React.Fragment>
    )
}