import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <footer className="footer-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <div className="fs-left">
                        <div className="logo">
                            <Link to="./index.html">
                                <img src="img/footer-logo.png" alt=""/>
                            </Link>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                            viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>
                </div>
                <div className="col-lg-6 offset-lg-1">
                    <form action="#" className="subscribe-form">
                        <h3>Subscribe to our newsletter</h3>
                        <input type="email" placeholder="Your e-mail"/>
                        <button type="submit">Subscribe</button>
                    </form>
                    <div className="social-links">
                        <Link to="#"><i className="fa fa-instagram"></i><span>Instagram</span></Link>
                        <Link to="#"><i className="fa fa-pinterest"></i><span>Pinterest</span></Link>
                        <Link to="#"><i className="fa fa-facebook"></i><span>Facebook</span></Link>
                        <Link to="#"><i className="fa fa-twitter"></i><span>Twitter</span></Link>
                        <Link to="#"><i className="fa fa-youtube"></i><span>Youtube</span></Link>
                    </div>
                </div>
            </div>
        </div>
    </footer>

	<div className="search-model">
		<div className="h-100 d-flex align-items-center justify-content-center">
			<div className="search-close-switch">+</div>
			<form className="search-model-form">
				<input type="text" id="search-input" placeholder="Search here....."/>
			</form>
		</div>
	</div>
    </>
    )
}

export default Footer