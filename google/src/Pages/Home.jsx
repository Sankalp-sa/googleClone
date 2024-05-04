import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google Logo" className="img-fluid w-75" />
                        <div className="input-group mt-3">
                            <span class="material-symbols-outlined input-group-text rounded-start-5 border border-end-0 d-flex flex-column align-items-center justify-content-center ms-1" style={{ backgroundColor: "white" }}>
                                search
                            </span>
                            <input type="text" className="form-control border border-start-0 border-end-0 py-3" placeholder="Search Google or type a URL" aria-label="Search Google or type a URL" />
                            <span class="material-symbols-outlined input-group-text border border-start-0 border-end-0 d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: "white" }}>
                                mic
                            </span>
                            <span class="material-symbols-outlined input-group-text rounded-end-5 border border-start-0 d-flex flex-column align-items-center justify-content-center me-2" style={{ backgroundColor: "white" }}>
                                photo_camera
                            </span>
                        </div>
                        <div className="d-flex justify-content-center mt-4">
                            <button className="btn btn-light px-3 me-1">Google Search</button>
                            <button className="btn btn-light px-3 ms-1">I'm Feeling Lucky</button>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <p>Google offered in: <a href="#">English</a></p>
                        </div>  
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
