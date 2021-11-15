import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../Login/login.css";
import Layouts from "../../Layout";

const Login = () =>{
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        console.log(data);
        localStorage.setItem("isLogin", true);
        navigate("/")
    }
    console.log(errors);
    const getData = JSON.parse(localStorage.getItem('data'));
    return(
        <Layouts>
        <div className='form-container'>
        <div className='form-content-right'>
        <div>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <h1> Login </h1>
                 <div className="col-md-25">
                    <label htmlFor="email" className="form-label">Email</label>
                    <div class="input-group form-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fa-1x fa-envelope-square"></i></span>
                    </div>
                    <input
                    type="email"
                    placeholder="Masukkan Email Anda"
                    className={errors?.email? "is-invalid form-control" : "form-control"}
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
                    <label htmlFor="password" className="form-label">Password</label>
                    <div class="input-group form-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fa-1x fa-key"></i></span>
                    </div>
                    <input
                    type="password"
                    placeholder="Masukkan Password Anda"
                    className={errors?.password? "is-invalid form-control" : "form-control"}
                    {...register("password", {
                        required: true,
                    })}
                    />
                    <div className="invalid-feedback">
                        {errors.password && errors.password.type === "required" && "password harus diisi"}
                    </div>
                    </div>
                </div>


                <div className="mb-6 text-center">
                <button className='form-input btn btn-primary' type="submit">
                    Login
                </button>
                </div>

                <div className="text-center flex justify-evenly">
                    <p className="inline-block text-sm align-baseline">
                Belum punya akun?
                </p>

                <a className="inline-block text-sm align-baseline"
                href="./Daftar">
                    Daftar
                </a>
                </div>

                </form>
                </div>
                </div>
                </div>
                </Layouts>
    );
 };
export default Login;