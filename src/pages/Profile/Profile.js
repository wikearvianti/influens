import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import Layouts from "../../Layout";
import "./profile.css";

export default function Profile() {
  let historyData = JSON.parse(localStorage.getItem("history"));
  let userData = JSON.parse(localStorage.getItem("data-daftar"));
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Layouts>
      {isLoading ? (
        <div className="loading">
          <ReactLoading type="balls" color="#fd9822" />
          <div className="fw-bolder">Loading</div>
        </div>
      ) : (
        <>
      <img
        src="https://images.unsplash.com/photo-1462206092226-f46025ffe607?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=874&q=80"
        class="img-fluid"
        alt="..."
      />
      <div className="container-fluid">
        <div className="d-flex justify-content-center position-relative lebar">
          <div className="d-flex profile-card flex-column align-items-center">
            <div class="profile mb-3">
              {" "}
              <img
                src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80"
                class="rounded-circle"
                width="50px"
                alt="..."
              />{" "}
            </div>
            <div className="fw-bolder mb-2">{userData.username}</div>
            <div className="fw-bold fs-5">{userData.usaha}</div>
            <div className="text-muted fw-bolder">{userData.bidang}</div>
          </div>
        </div>
        <div className="my-5 lebar">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8 col-12">
              <div className="fw-bolder my-3">Riwayat Pengajuan</div>

              {historyData === null ? (
                <h4 className="fw-bolder">Kamu Belum Mengajukan</h4>
              ) : (
                <table class="table shadow rounded table-hover">
                  <thead className="table-dark">
                    <tr>
                      <th scope="col">Nama Influencer</th>
                      <th scope="col">Tanggal Pengajuan</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {historyData.map((e, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row">{e.nama}</th>
                          <td>{e.date}</td>
                          <td>Pengajuan Anda sedang direview</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div></>
      )}
    </Layouts>
  );
}
