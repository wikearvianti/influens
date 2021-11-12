import React from "react";
import "./profile.css";

export default function Profile({title, namaUsaha, jenisUsaha}) {
  return (
    <div>
      <div className="d-flex justify-content-center lebar">
        <img
          src="https://images.unsplash.com/photo-1462206092226-f46025ffe607?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=874&q=80"
          class="img-fluid"
          alt="..."
        />
        <div className="d-flex profile-card flex-column align-items-center">
          <div class="profile mb-3">
            {" "}
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
              class="rounded-circle"
              width="50px"
            />{" "}
          </div>
          <div className="fw-bolder mb-2">{title}</div>
          <div className="fw-bold fs-5">{namaUsaha}</div>
          <div className="text-muted fw-bolder">{jenisUsaha}</div>
        </div>
      </div>
      <div className="">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 col-12">
            <table class="table shadow rounded table-hover">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Nama Influencer</th>
                  <th scope="col">Tanggal Pengajuan</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Joko</th>
                  <td>1 September 2021</td>
                  <td>Pengajuan Anda sedang direview</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
