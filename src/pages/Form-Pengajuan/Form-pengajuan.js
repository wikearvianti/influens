import React, { useState, useEffect } from "react";
import logo from "../Assets/Group.svg";
import Layouts from "../../Layout";
import { useForm } from "react-hook-form";
import ModalComponent from "../../Components/Modal";
import { useNavigate, useParams } from "react-router";
import { useAuthDispatch, useAuthState } from "../../Context/auth/auth";
import { fetchApi } from "../../Context/action/action";
import ReactLoading from "react-loading";

function SaveDataToLocalStorage(data) {
  var a = [];
  a = JSON.parse(localStorage.getItem("history")) || [];
  a.push(data);
  localStorage.setItem("history", JSON.stringify(a));
}

function getDate() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const getdate = new Date();

  const month = months[getdate.getMonth()];
  const date = getdate.getDate();
  const year = getdate.getFullYear();

  const result = `${date} ${month} ${year}`;
  let objResult = { date: result };
  return objResult;
}

export default function FormPengajuan() {
  const dispatch = useAuthDispatch();
  const state = useAuthState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchApi(dispatch);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let { id } = useParams();
  let getInfluencer =
    state.data !== undefined
      ? state.data.find((x) => x.id === Number(id))
      : null;

  console.log(getInfluencer);

  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const dateFix = getDate();
    const nameInfluencer = getInfluencer.nama;
    const addDate = { ...data, ...dateFix, nama: nameInfluencer };
    SaveDataToLocalStorage(addDate);
    setModal(true);
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <Layouts>
      {isLoading ? (
        <div className="loading">
          <ReactLoading type="balls" color="#fd9822" />
          <div className="fw-bolder">Loading</div>
        </div>
      ) : (
        <>
          <div className="container my-5">
            <div className="fw-bolder fs-4 mb-3">Form Pengajuan Usaha</div>
            <div className="shadow-sm p-4">
              <form
                className="row g-5"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="col-12">
                  <div className="g-3 row">
                    <div className="fw-bold fs-5">Data Diri Anda</div>
                    <div className="col-md-6">
                      <label
                        htmlFor="validationDefault01"
                        className="form-label"
                      >
                        Nama lengkap
                      </label>
                      <input
                        type="text"
                        className={
                          errors?.firstName
                            ? "is-invalid form-control"
                            : "form-control"
                        }
                        {...register("firstName", { required: true })}
                      />
                      <div className="invalid-feedback">
                        {errors.firstName &&
                          errors.firstName.type === "required" &&
                          "Nama belum terisi"}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label
                        htmlFor="validationDefault02"
                        className="form-label"
                      >
                        NIK
                      </label>
                      <input
                        type="text"
                        className={
                          errors?.NIK
                            ? "is-invalid form-control"
                            : "form-control"
                        }
                        {...register("NIK", { required: true, minLength: 16 })}
                      />
                      <div className="invalid-feedback">
                        {(errors.NIK && errors.NIK.type === "required") ||
                        "minLength"
                          ? "NIK belum terisi atau Kurang dari 16"
                          : null}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label
                        htmlFor="validationDefaultUsername"
                        className="form-label"
                      >
                        Email
                      </label>
                      <div className="input-group">
                        <input
                          type="email"
                          className={
                            errors?.email
                              ? "is-invalid form-control"
                              : "form-control"
                          }
                          {...register("email", {
                            required: true,
                            pattern: /^\S+@\S+\.\S+$/,
                          })}
                        />
                        <div className="invalid-feedback">
                          {(errors.email && errors.email.type === "required") ||
                          "minLength"
                            ? "email tidak valid"
                            : null}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6" />
                    <div className="col-md-6">
                      <label
                        htmlFor="validationDefault03"
                        className="form-label"
                      >
                        Nomor telepon / No. HP
                      </label>
                      <input
                        type="number"
                        className={
                          errors?.phone
                            ? "is-invalid form-control"
                            : "form-control"
                        }
                        {...register("phone", { required: true })}
                      />
                      <div className="invalid-feedback">
                        {errors.phone &&
                          errors.phone.type === "required" &&
                          "Nomor tidak valid"}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label
                        htmlFor="validationDefault03"
                        className="form-label"
                      >
                        No. HP (WhatsApp)
                      </label>
                      <input
                        type="number"
                        className={
                          errors?.wa
                            ? "is-invalid form-control"
                            : "form-control"
                        }
                        {...register("wa", { required: true })}
                      />
                      <div className="invalid-feedback">
                        {errors.wa &&
                          errors.wa.type === "required" &&
                          "Nomor WhatsApp tidak valid"}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label
                        htmlFor="validationDefault04"
                        className="form-label"
                      >
                        Jabatan
                      </label>
                      <select
                        className={
                          errors?.role
                            ? "is-invalid form-select"
                            : "form-select"
                        }
                        {...register("role", { required: true })}
                      >
                        <option selected disabled value="">
                          Pilih...
                        </option>
                        <option>Operasional</option>
                        <option>Staff</option>
                        <option>Pemilik</option>
                        <option>dll</option>
                      </select>
                      <div className="invalid-feedback">
                        {errors.role &&
                          errors.role.type === "required" &&
                          "Pilih Jabatan"}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="g-3 row">
                    <div className="fw-bold fs-5">Data Usaha (UMKM)</div>
                    <div className="col-md-6">
                      <label
                        htmlFor="validationDefault01"
                        className="form-label"
                      >
                        Nama Usaha
                      </label>
                      <input
                        type="text"
                        className={
                          errors?.usaha
                            ? "is-invalid form-control"
                            : "form-control"
                        }
                        {...register("usaha", { required: true })}
                      />
                      <div className="invalid-feedback">
                        {errors.usaha &&
                          errors.usaha.type === "required" &&
                          "Nama usaha belum terisi"}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label
                        htmlFor="validationDefault04"
                        className="form-label"
                      >
                        Bidang Usaha
                      </label>
                      <select
                        className={
                          errors?.bidang
                            ? "is-invalid form-select"
                            : "form-select"
                        }
                        {...register("bidang", { required: true })}
                      >
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
                      <div className="invalid-feedback">
                        {errors.bidang &&
                          errors.bidang.type === "required" &&
                          "Pilih bidang usaha"}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label
                        htmlFor="validationDefault02"
                        className="form-label"
                      >
                        Alamat Usaha
                      </label>
                      <input
                        type="text"
                        className={
                          errors?.address
                            ? "is-invalid form-control"
                            : "form-control"
                        }
                        {...register("address", { required: true })}
                      />
                      <div className="invalid-feedback">
                        {errors.address &&
                          errors.address.type === "required" &&
                          "Alamat belum terisi"}
                      </div>
                    </div>

                    <div className="col-md-6" />

                    <div className="col-md-6">
                      <label
                        htmlFor="validationDefaultUsername"
                        className="form-label"
                      >
                        Tahun Berdiri
                      </label>
                      <div className="input-group">
                        <input
                          type="number"
                          className={
                            errors?.tahun
                              ? "is-invalid form-control"
                              : "form-control"
                          }
                          {...register("tahun", { required: true })}
                        />
                        <div className="invalid-feedback">
                          {errors.tahun &&
                            errors.tahun.type === "required" &&
                            "Tahun berdiri belum terisi"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Agreement and Button */}
                <div className="col-12">
                  <div className="form-check mb-3">
                    <input
                      type="checkbox"
                      id="invalidCheck2"
                      className={
                        errors?.agreement
                          ? "is-invalid form-check-input"
                          : "form-check-input"
                      }
                      {...register("agreement", { required: true })}
                    />
                    <label
                      className="form-check-label text-muted"
                      htmlFor="invalidCheck2"
                    >
                      saya menyetujui persyaratan dan ketentuan influens
                    </label>
                    <div className="invalid-feedback">
                      {errors.agreement &&
                        errors.agreement.type === "required" &&
                        "Kamu harus menyetujui"}
                    </div>
                  </div>
                  <button
                    className="btn rounded-pill mainColor"
                    type="submit"
                    data-bs-target="#exampleModal"
                  >
                    Ajukan usaha saya
                  </button>
                </div>
              </form>
            </div>

            {/* Modal Pop up */}
            {modal === true ? <ModalComponent logo={logo} /> : null}
          </div>
        </>
      )}
    </Layouts>
  );
}
