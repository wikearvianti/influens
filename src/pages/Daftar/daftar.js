import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import "./daftar.css";
import Layouts from "../../Layout";

const Daftar = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        localStorage.setItem('data-daftar', JSON.stringify(data));
        console.log(data);
        navigate("/login")
    }

    const dataRegis = localStorage.getItem("data-daftar")
    console.log(dataRegis);

    console.log(errors);
    return (
        <Layouts>
            <div className='form-container my-5 py-5'>
                <div className="g-3 row justify-content-center">
                    <form noValidate onSubmit={handleSubmit(onSubmit)}>
                        <h1> Daftar </h1>
                        <div className="col-md-25">
                            <label htmlFor="username" className="form-label">Username</label>
                            <div class="input-group form-group ">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-user"style={{fontSize: "1.5em"}}></i></span>
                                </div>
                                <input
                                    type="username"
                                    placeholder="Masukkan Username Anda"
                                    className={errors?.username ? "is-invalid form-control" : "form-control"}
                                    {...register("username", {
                                        required: true,
                                    })}
                                />
                                <div className="invalid-feedback">
                                    {errors.username && errors.username.type === "required" && "username harus diisi"}
                                </div>
                            </div>
                        </div>

                        <div className="col-md-25">
                            <label htmlFor="email" className="form-label">Email</label>
                            <div class="input-group form-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="far fa-envelope" style={{fontSize: "1.5em"}}></i></span>
                                </div>
                                <input
                                    type="email"
                                    placeholder="Masukkan Email Anda"
                                    className={errors?.email ? "is-invalid form-control" : "form-control"}
                                    {...register("email", {
                                        required: true,
                                    })}
                                />
                                <div className="invalid-feedback">
                                    {errors.email && errors.email.type === "required" && "email harus diisi"}
                                </div>
                            </div>
                        </div>

                        <div className="col-md-25">
                            <label htmlFor="validationDefault04" className="form-label">
                                Bidang Usaha
                            </label>
                            <div class="input-group form-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-briefcase" style={{fontSize: "1.5em"}}></i></span>
                                </div>
                                <select
                                    className={
                                        errors?.bidang ? "is-invalid form-select" : "form-select"
                                    }
                                    {...register("bidang", { required: true })}
                                >
                                    <option selected disabled value="">
                                        Bidang Usaha
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
                            <div className="invalid-feedback">
                                {errors.bidang &&
                                    errors.bidang.type === "required" &&
                                    "Pilih bidang usaha"}
                            </div>
                        </div>

                        <div className="col-md-25">
                            <label htmlFor="usaha" className="form-label">Nama Usaha</label>
                            <div class="input-group form-group ">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-user" style={{fontSize: "1.5em"}}></i></span>
                                </div>
                                <input
                                    type="usaha"
                                    placeholder="Masukkan Nama Usaha Anda"
                                    className={errors?.usaha ? "is-invalid form-control" : "form-control"}
                                    {...register("usaha", {
                                        required: true,
                                    })}
                                />
                                <div className="invalid-feedback">
                                    {errors.usaha && errors.usaha.type === "required" && "nama usaha harus diisi"}
                                </div>
                            </div>
                        </div>

                        <div className="col-md-25">
                            <label htmlFor="password" className="form-label">Password</label>
                            <div class="input-group form-group1">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-key" style={{fontSize: "1.5em"}}></i></span>
                                </div>
                                <input
                                    type="password"
                                    placeholder="Masukkan Password Anda"
                                    className={errors?.password ? "is-invalid form-control" : "form-control"}
                                    {...register("password", {
                                        required: true,
                                    })}
                                />
                                <div className="invalid-feedback">
                                    {errors.password && errors.password.type === "required" && "password harus diisi"}
                                </div>
                            </div>
                        </div>

                        <div className="mt-5 text-center d-grid "> 
                         <button className='form-input btn btn-lg mainColor rounded-pill' type="submit">
                             Daftar
                         </button>
                         </div>
                    </form>
                </div>
            </div>
        </Layouts>
    );
};
export default Daftar;