import {FormControl,Button,Dropdown,ButtonGroup,Card} from 'react-bootstrap'
import Header from '../../Layout/Header'
import React from 'react'
import { useState,useEffect } from 'react'
import Cards from '../../Components/Card'
import Footer from '../../Layout/footer'
import CardInfluence from './CardInfluence'
import { useAuthState } from "../../Context/auth/auth";

export default function SearchInfluencer(){
    const state = useAuthState()

    return(
        <React.Fragment>
            <Header></Header>
            <div className="container">
                <div className="search mt-4">
                    <div className="d-flex justify-content-end">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            style={{ width: "20%" }}
                        />
                        {/* <Button variant="outline-success">Search</Button> */}
                    </div>
                </div>
                {/* <div className="container"> */}
                    <aside className="d-block p-4 mt-4 me-4 mb-5" style={{ float: "left",boxShadow: "0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06)",borderRadius:"10px"}}>
                        <h5 className="text-center">Daftar Kategori</h5>
                            <Dropdown className="my-3">
                                <Dropdown.Toggle className="px-5" id="dropdown-custom-1" style={{backgroundColor:"transparent", color:"black", fontSize:"small",border:"1px solid #94A2B3",width:"200px"}}>
                                    Pilih Kategori
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Beauty Influencer</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Food Vlogger</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Gamers</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown className="my-3">
                                <Dropdown.Toggle className="px-5" id="dropdown-custom-1" style={{backgroundColor:"transparent", color:"black", fontSize:"small",border:"1px solid #94A2B3",width:"200px"}}>
                                    Pilih Lokasi
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">DKI Jakarta</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Jawa Barat</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            {/* <button type="button" className="btn btn-sm btn-block">Filter</button> */}
                            <div className="d-grid gap-2">
                                <Button size="sm" style={{backgroundColor:"darkviolet", border:"0px"}}>
                                    Filter
                                </Button>
                            </div>
                    </aside>
                    <div className="row">
                        {
                            state.data !== undefined ? state.data.map((val) => {
                                console.log(state.data);
                                return (
                                    <CardInfluence 
                                        img={val.img_profil}
                                        name={val.nama}
                                        location={val.lokasi}
                                        category={val.kategori}
                                        followers={val.followers}
                                    />
                                )
                            }) : <p>Loading...</p>
                        }
                    </div>
        
            </div>
            <Footer />
        </React.Fragment>
    )
}