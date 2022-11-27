import React from 'react'
import Hero from '../pricing/Heros'

export default function About() {
  return (
    <div>
        <div>
            <Hero/>
        </div>
  
  
    <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
            <a href="index.html" className="navbar-brand p-0">
                <h1 className="m-0">Save&Insure</h1>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <a href="index.html" className="nav-item nav-link">Home</a>
                    <a href="about.html" className="nav-item nav-link active">About</a>
                    <a href="contact.html" className="nav-item nav-link">Contact</a>
                </div>
                <butaton type="button" className="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></butaton>
            </div>
        </nav>

        <div className="container-fluid bg-primary py-5 bg-header" style="margin-bottom: 90px;">
            <div className="row py-5">
                <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                    <h1 className="display-4 text-white animated zoomIn">About Us</h1>
                    <a href="" className="h5 text-white">Home</a>
                    <i className="far fa-circle text-white px-2"></i>
                    <a href="" className="h5 text-white">About</a>
                </div>
            </div>
        </div>
    </div>
   
    <div className="modal fade" id="searchModal" tabindex="-1">
        <div className="modal-dialog modal-fullscreen">
            <div className="modal-content" style="background: rgba(9, 30, 62, .7);">
                <div className="modal-header border-0">
                    <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body d-flex align-items-center justify-content-center">
                    <div className="input-group" style="max-width: 600px;">
                        <input type="text" className="form-control bg-transparent border-primary p-3" placeholder="Type search keyword"/>
                        <button className="btn btn-primary px-4"><i className="bi bi-search"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-7">
                    <div className="section-title position-relative pb-3 mb-5">
                        <h5 className="fw-bold text-primary text-uppercase">About Us</h5>
                        <h1 className="mb-0">The Best affordable healthcare services</h1>
                    </div>
                    <p className="mb-4">Comprehensive benefits and affordable healthcare plans for East Africans. Extended in 3 countries serving 95% of underserved communities</p>
                    <div className="row g-0 mb-3">
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                            <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Award Winning</h5>
                            <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Professional Staff</h5>
                        </div>
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                            <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>24/7 Support</h5>
                            <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Fair Prices</h5>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
                        <div className="bg-primary d-flex align-items-center justify-content-center rounded" style="width: 60px; height: 60px;">
                            <i className="fa fa-phone-alt text-white"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="mb-2">Call to ask any question</h5>
                            <h4 className="text-primary mb-0">+254 115938318</h4>
                        </div>
                    </div>
                    <a href="quote.html" className="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Request A Quote</a>
                </div>
                <div className="col-lg-5" style="min-height: 500px;">
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="img/insurance2.jpg" style="object-fit: cover;"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
                <h5 className="fw-bold text-primary text-uppercase">Team Members</h5>
                <h1 className="mb-0">Professional Staff Ready to Help You</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                    <div className="team-item bg-light rounded overflow-hidden">
                        <div className="team-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="img/team-1.jpg" alt=""/>
                            <div className="team-social">
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-twitter fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-instagram fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <h4 className="text-primary">Full Name</h4>
                            <p className="text-uppercase m-0">Designation</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                    <div className="team-item bg-light rounded overflow-hidden">
                        <div className="team-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="img/team-2.jpg" alt=""/>
                            <div className="team-social">
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-twitter fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-instagram fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <h4 className="text-primary">Full Name</h4>
                            <p className="text-uppercase m-0">Designation</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                    <div className="team-item bg-light rounded overflow-hidden">
                        <div className="team-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="img/team-3.jpg" alt=""/>
                            <div className="team-social">
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-twitter fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-instagram fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <h4 className="text-primary">Full Name</h4>
                            <p className="text-uppercase m-0">Designation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5 mb-5">
            <div className="bg-white">
                <div className="owl-carousel vendor-carousel">
                    <img src="img/vendor-1.jpg" alt=""/>
                    <img src="img/vendor-2.jpg" alt=""/>
                    <img src="img/vendor-3.jpg" alt=""/>
                    <img src="img/vendor-4.jpg" alt=""/>
                    <img src="img/vendor-5.jpg" alt=""/>
                    <img src="img/vendor-6.jpg" alt=""/>
                    <img src="img/vendor-7.jpg" alt=""/>
                    <img src="img/vendor-8.jpg" alt=""/>
                    <img src="img/vendor-9.jpg" alt=""/>
                </div>
            </div>
        </div>
    </div>
   
    </div>
  )
}
