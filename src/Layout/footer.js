import React from 'react'
import './styles/footer.css';

export default function Footer() {
    return (
    <div id="container" className="mt-auto bg-dark">
            <div className="d-flex justify-content-between container py-5">
                <div>
                    <p> Copyright &copy;
                    2019, Influens
                    </p>
                </div>
                <div className="">
                <i class="fab fa-instagram"></i>
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter-square"></i>
                </div>
            </div>
         </div>
    )
}