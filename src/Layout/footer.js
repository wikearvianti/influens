import React from 'react'
import './styles/footer.css';

export default function Footer() {
    return (
    <div id="container">
            <div className="d-flex justify-content-between container">
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
// <ul>
//<li class="social-items"><a href="#">    <i class="fab fa-instagram"></i></a></li>
//<li class="social-items"><a href="#">    <i class="fab fa-facebook"></i></a></li>
//<li class="social-items"><a href="#">    <i class="fab fa-twitter-square"></i></a></li>
//</ul>