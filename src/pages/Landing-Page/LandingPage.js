import React, {useEffect} from "react";
import "../Landing-Page/LandingPage.css";
import ali from "./Assets/CompanyLogo/ali.svg";
import bsi from "./Assets/CompanyLogo/bsi.svg";
import kemenko from "./Assets/CompanyLogo/kemenko.svg";
import shopee from "./Assets/CompanyLogo/shopee.svg";
import tokped from "./Assets/CompanyLogo/tokped.svg";
import hero from "./Assets/hero.svg";
import cari from "./Assets/cari.svg";
import ajukan from "./Assets/ajukan.svg";
import pilih from "./Assets/pilih.svg";
import tunggu from "./Assets/tunggu.svg";
import Card from "../../Components/Card";
import Layouts from "../../Layout";
import { useAuthState, useAuthDispatch } from "../../Context/auth/auth";
import { fetchApi } from "../../Context/action/action";
import { Link } from "react-router-dom";

export default function LandingPage() {

  const isLogin = localStorage.getItem("isLogin");
  const state = useAuthState()
  const dispatch = useAuthDispatch()

  useEffect(()=>{
    fetchApi(dispatch);
  }, [dispatch])
  
  

  return (
    <Layouts>
      <div className="container-fluid bg-light">
        <div className="container heightHero d-flex align-items-center">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <div className="fs-1 fw-bold lh-base heroText">
                Majukan UMKM bersama influencer terkenal
              </div>
              <p className="heroTextsm">
                Influens memudahkan wirausahawan mempromosi UMKM-nya kepada
                dunia melalui influencer terkenal
              </p>
              <Link to="/profile" className="btn me-2 rounded-pill mainColor" type="button">
                {isLogin ? `Cari influencer` : "Daftar"}
              </Link>
            </div>
            <div className="col-12 col-md-6 d-none d-xs-none d-md-block">
              <img src={hero} width="510" height="360" alt="Logo" />
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5 py-5">
        <div className="fw-bold fs-4 heroText d-flex justify-content-center mb-4">
          Didukung Oleh
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <img src={ali} width="80" height="80" alt="Logo" />
          </div>
          <div className="col d-flex justify-content-center">
            <img src={bsi} width="80" height="80" alt="Logo" />
          </div>
          <div className="col d-flex justify-content-center">
            <img src={kemenko} width="80" height="80" alt="Logo" />
          </div>
          <div className="col d-flex justify-content-center">
            <img src={shopee} width="80" height="80" alt="Logo" />
          </div>
          <div className="col d-flex justify-content-center">
            <img src={tokped} width="80" height="80" alt="Logo" />
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="fw-bold fs-4 heroText d-flex justify-content-center mb-4">
          Cara kerja
        </div>
        <div className="row gy-md-3 gy-sm-3 gy-3">
          <div className="col-md-6 col-lg-3">
            <div className="card h-100">
              <img src={cari} className="card-img p-5" alt="Card Influencer" />

              <div className="card-body">
                <div className="fw-bolder mb-3">1. Cari Influencer</div>
                <div className="text-secondary">
                  Puluhan influencer terdaftar untuk membantu UMKM dalam
                  mempromosikan jasa atau produk mereka
                </div>
                <div className="fw-bolder mt-2 textColor"></div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100">
              <img
                src={ajukan}
                className="card-img p-5"
                alt="Card Influencer"
              />

              <div className="card-body">
                <div className="fw-bolder mb-3">2. Pilih Influencer</div>
                <div className="text-secondary">
                  Pilih influencer yang cocok dengan produk atau jasa yang akan
                  dipromosi
                </div>
                <div className="fw-bolder mt-2 textColor"></div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100">
              <img src={pilih} className="card-img p-5" alt="Card Influencer" />

              <div className="card-body">
                <div className="fw-bolder mb-3">3. Ajukan UMKM</div>
                <div className="text-secondary">
                  Daftarkan Usaha kamu ke influencer yang kamu pilih
                </div>
                <div className="fw-bolder mt-2 textColor"></div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100">
              <img
                src={tunggu}
                className="card-img p-5"
                alt="Card Influencer"
              />

              <div className="card-body">
                <div className="fw-bolder mb-3">4. Tunggu</div>
                <div className="text-secondary">
                  Terakhir, tunggu sampai influencer yang dipilih menyetujui
                  untuk mempromosikan produk atau jasa
                </div>
                <div className="fw-bolder mt-2 textColor"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5 py-5">
        <div className="fw-bold fs-4 heroText d-flex justify-content-center mb-4">
          Top Influencer
        </div>
        <div className="row gx-4 justify-content-center gy-md-3 gy-sm-3 gy-3">
          { state.data !== undefined ?
            state.data.slice(0,3).map((e)=> {return (
              <Card key={e.id} top={true} nama={e.nama} jenis={e.kategori} fllwr={e.followers} src={e.img_profil} link={""}/>
            )}) : <p>Loading...</p>
          
         }
        </div>
      </div>

      <div className="container my-5">
        <div className="p-4 rounded letter mx-5" style={{backgroundColor: "violet"}}>
          <div className="d-flex align-items-center justify-content-between">
            <div className="fw-bold">Langganan Pada Newsletter Kami</div>
            <div className="">
              <button className="btn me-2 rounded-pill mainColor" type="button">
                Daftar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
}
