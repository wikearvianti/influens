import React from "react";
import logo from "../Assets/Group.svg";

export default function FormPengajuan() {
  return (
    <div className="my-5">
      <div className="fw-bolder fs-4 mb-3">Form Pengajuan Usaha</div>
      <div className="shadow-sm p-4">
        <form className="row g-5">
          <div className="col-12">
            <div className="g-3 row">
              <div className="fw-bold fs-5">Data Diri Anda</div>
              <div className="col-md-6">
                <label for="validationDefault01" className="form-label">
                  Nama lengkap
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault01"
                  required
                />
              </div>
              <div className="col-md-6">
                <label for="validationDefault02" className="form-label">
                  NIK
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault02"
                  required
                />
              </div>
              <div className="col-md-6">
                <label for="validationDefaultUsername" className="form-label">
                  Email
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefaultUsername"
                    aria-describedby="inputGroupPrepend2"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6" />
              <div className="col-md-6">
                <label for="validationDefault03" className="form-label">
                  Nomor telepon / No. HP
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault03"
                  required
                />
              </div>
              <div className="col-md-6">
                <label for="validationDefault03" className="form-label">
                  No. HP (WhatsApp)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault03"
                  required
                />
              </div>

              <div className="col-md-6">
                <label for="validationDefault04" className="form-label">
                  Jabatan
                </label>
                <select className="form-select" id="validationDefault04" required>
                  <option selected disabled value="">
                    Pilih...
                  </option>
                  <option>Operasional</option>
                  <option>Staff</option>
                  <option>Pemilik</option>
                  <option>dll</option>
                </select>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="g-3 row">
              <div className="fw-bold fs-5">Data Usaha (UMKM)</div>
              <div className="col-md-6">
                <label for="validationDefault01" className="form-label">
                  Nama Usaha
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault01"
                  required
                />
              </div>

              <div className="col-md-6">
                <label for="validationDefault04" className="form-label">
                  Bidang Usaha
                </label>
                <select className="form-select" id="validationDefault04" required>
                  <option selected disabled value="">
                    Pilih...
                  </option>
                  <option>Kuliner</option>
                  <option>Fashion</option>
                  <option>Pendidikan</option>
                  <option>Otomotif</option>
                  <option>Agribisnis</option>
                  <option>Tour and Travel</option>
                  <option>Produk kreatif</option>
                  <option>Kecantikan</option>
                  <option>dll</option>
                </select>
              </div>

              <div className="col-md-6">
                <label for="validationDefault02" className="form-label">
                  Alamat Usaha
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault02"
                  required
                />
              </div>

              <div className="col-md-6" />

              <div className="col-md-6">
                <label for="validationDefaultUsername" className="form-label">
                  Tahun Berdiri
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefaultUsername"
                    aria-describedby="inputGroupPrepend2"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Agreement and Button */}
          <div className="col-12">
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck2"
                required
              />
              <label className="form-check-label text-muted" for="invalidCheck2">
                saya menyetujui persyaratan dan ketentuan influens
              </label>
            </div>
            <button
              className="btn rounded-pill mainColor"
              type="submit"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Ajukan usaha saya
            </button>
          </div>
        </form>
      </div>

      {/* Modal Pop up */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="d-flex justify-content-center flex-column align-items-center">
                <img
                  src={logo}
                  width="300"
                  alt="Logo"
                  className="mt-5 mb-5 d-none d-xs-none d-md-block"
                />
                <div className="fw-bolder fs-5 text-center">
                  Asik, Pengajuan berhasil dilakukan
                </div>
                <div className="text-center mt-2">
                  Tunggu pengajuan usaha kamu, hingga disetujui oleh influencer
                  terpilih
                </div>
              </div>
            </div>
            <div className="p-4 d-flex justify-content-center">
              <button
                type="button"
                className="btn rounded-pill mainColor"
                data-bs-dismiss="modal"
              >
                Okee
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
