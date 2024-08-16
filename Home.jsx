import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Custom styles

function Home() {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <header className="hero-section text-center text-white">
                <div className="hero-overlay">
                    <div className="hero-content">
                        <h1 className="display-4 mb-4">Welcome to Our Amazing App</h1>
                        <p className="lead mb-4">
                            Discover innovative solutions and explore a variety of features designed to make your experience exceptional.
                        </p>
                        <Link to="/register" className="btn btn-light btn-lg mx-2">Get Started</Link>
                        <Link to="/login" className="btn btn-primary btn-lg mx-2">Login</Link>
                    </div>
                </div>
            </header>

            {/* Features Section */}
            <section className="features-section py-5">
                <div className="container text-center">
                    <h2 className="mb-5">Our Key Features</h2>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="feature-card shadow-lg">
                                <img src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?w=996&t=st=1723745284~exp=1723745884~hmac=207b808abdcce6c7915db2148b32fb0825212e1a9c6db645182cd70c932c0465" className="img-fluid" alt="Feature 1" />
                                <div className="feature-card-body">
                                    <h4>Feature 1</h4>
                                    <p>Discover how Feature 1 can enhance your productivity and streamline your workflow.</p>
                                    <Link to="/feature1" className="btn btn-outline-primary">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="feature-card shadow-lg">
                                <img src="https://img.freepik.com/free-vector/web-site-development-programming-coding_107791-2187.jpg?w=1380&t=st=1723745721~exp=1723746321~hmac=eb64e4f5fa2d19f6ab92544bbed2001cecaf7fca8f0f8c423be012a0e8693fbf" className="img-fluid" alt="Feature 2" />
                                <div className="feature-card-body">
                                    <h4>Feature 2</h4>
                                    <p>Explore Feature 2 and see how it integrates seamlessly into your daily tasks.</p>
                                    <Link to="/feature2" className="btn btn-outline-primary">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="feature-card shadow-lg">
                                <img src="https://img.freepik.com/free-vector/colored-big-data-analytics-isometric-composition-with-abstract-3d-network-storage-windows-apps-air-illustration_1284-28905.jpg?w=740&t=st=1723745812~exp=1723746412~hmac=d9df96ab51c18b608c4e8cab483da11669022852a7e6787fad7353948619ff5e" className="img-fluid" alt="Feature 3" />
                                <div className="feature-card-body">
                                    <h4>Feature 3</h4>
                                    <p>Learn about Feature 3 and how it offers unique benefits tailored to your needs.</p>
                                    <Link to="/feature3" className="btn btn-outline-primary">Learn More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer bg-dark text-white text-center py-3">
                <p className="mb-0">© 2024 Your Company. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
