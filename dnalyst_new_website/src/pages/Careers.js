import React from 'react';
import { Helmet } from 'react-helmet';

const Careers = () => {
    const openEmailClient = (position) => {
        const subject = encodeURIComponent(`Application for ${position} Position`);
        const body = encodeURIComponent(
`Dear Hiring Manager,

I am interested in applying for the ${position} position at dnalyst.

Please find my details below:

Full Name: 
Email: 
Phone: 
Years of Experience: 
Current Location: 
Notice Period: 

I have attached my resume for your consideration.

Best regards,
[Your Name]`
        );
        
        window.location.href = `mailto:it@molsys.in?subject=${subject}&body=${body}`;
    };

    return (
        <>
            <Helmet>
                <title>Careers - dnalyst</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
            </Helmet>
            
            <div className="careers-container">
                <div className="careers-hero">
                    <h1>Join Our Innovative Team</h1>
                    <p className="hero-subtitle">Shape the future of healthcare technology with us</p>
                </div>
                
                <div className="application-process">
                    <div className="process-card">
                        <i className="fas fa-envelope-open-text"></i>
                        <h3>How to Apply</h3>
                        <p>Email your resume to <a href="mailto:it@molsys.in">it@molsys.in</a> or click "Apply Now" below</p>
                    </div>
                </div>
                
                <div className="job-openings">
                    <div className="job-card">
                        <div className="job-header">
                            <h2>Jr. Developer AI/ML</h2>
                            <span className="job-location">
                                <i className="fas fa-map-marker-alt"></i> Mangalore, Karnataka
                            </span>
                        </div>
                        
                        <div className="job-content">
                            <p className="job-summary">Help develop cutting-edge healthcare AI solutions in a dynamic team environment.</p>
                            
                            <div className="job-section">
                                <h4>Key Responsibilities</h4>
                                <ul>
                                    <li>Develop and implement machine learning models</li>
                                    <li>Work with healthcare datasets to derive insights</li>
                                    <li>Collaborate with cross-functional teams</li>
                                </ul>
                            </div>
                            
                            <div className="job-section">
                                <h4>Requirements</h4>
                                <ul>
                                    <li>B.E/B.Tech in AI/ML or Computer Science</li>
                                    <li>0-1 years of experience in AI/ML development</li>
                                    <li>Experience with Python and ML frameworks</li>
                                    <li>Knowledge of Transformer architectures</li>
                                </ul>
                            </div>
                        </div>
                        
                        <button className="apply-button" onClick={() => openEmailClient('Jr. Developer AI/ML')}>
                            Apply Now <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                    
                    <div className="job-card">
                        <div className="job-header">
                            <h2>Sales Executive</h2>
                            <span className="job-location">
                                <i className="fas fa-map-marker-alt"></i> Mangalore, Karnataka
                            </span>
                        </div>
                        
                        <div className="job-content">
                            <p className="job-summary">Promote our innovative biotech solutions to healthcare providers and institutions.</p>
                            
                            <div className="job-section">
                                <h4>Key Responsibilities</h4>
                                <ul>
                                    <li>Identify and pursue new business opportunities</li>
                                    <li>Build and maintain client relationships</li>
                                    <li>Present product demonstrations</li>
                                </ul>
                            </div>
                            
                            <div className="job-section">
                                <h4>Requirements</h4>
                                <ul>
                                    <li>2-4 years in biotech/healthcare sales</li>
                                    <li>Excellent communication skills</li>
                                    <li>Proficiency in multiple regional languages</li>
                                    <li>Knowledge of healthcare IT solutions</li>
                                </ul>
                            </div>
                        </div>
                        
                        <button className="apply-button" onClick={() => openEmailClient('Sales Executive')}>
                            Apply Now <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                :global(body) {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    color: #333;
                    line-height: 1.6;
                    background-color: #f8f9fa;
                    margin: 0;
                    padding: 0;
                }
                
                .careers-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 40px 20px;
                }
                
                .careers-hero {
                    text-align: center;
                    padding: 60px 20px;
                    background: linear-gradient(135deg, #cc5500, #653714ff);
                    color: white;
                    border-radius: 8px;
                    margin-bottom: 40px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                }
                
                .careers-hero h1 {
                    font-size: 2.5rem;
                    margin-bottom: 15px;
                    font-weight: 700;
                }
                
                .hero-subtitle {
                    font-size: 1.2rem;
                    opacity: 0.9;
                    max-width: 700px;
                    margin: 0 auto;
                }
                
                .application-process {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 50px;
                }
                
                .process-card {
                    background: white;
                    padding: 30px;
                    border-radius: 8px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
                    text-align: center;
                    width: 100%;
                    max-width: 600px;
                    transition: transform 0.3s ease;
                }
                
                .process-card:hover {
                    transform: translateY(-5px);
                }
                
                .process-card i {
                    font-size: 2.5rem;
                    color: #3498db;
                    margin-bottom: 20px;
                }
                
                .process-card h3 {
                    margin-bottom: 15px;
                    color: #2c3e50;
                }
                
                .process-card a {
                    color: #cc5500;
                    text-decoration: none;
                    font-weight: 600;
                }
                
                .job-openings {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 30px;
                }
                
                .job-card {
                    background: white;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
                    transition: all 0.3s ease;
                }
                
                .job-card:hover {
                    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
                    transform: translateY(-3px);
                }
                
                .job-header {
                    padding: 25px;
                    background: linear-gradient(135deg, #f8f9fa, #e9ecef);
                    border-bottom: 1px solid #dee2e6;
                }
                
                .job-header h2 {
                    margin: 0;
                    color: #2c3e50;
                    font-size: 1.8rem;
                }
                
                .job-location {
                    display: inline-block;
                    margin-top: 10px;
                    color: #6c757d;
                    font-size: 0.95rem;
                }
                
                .job-content {
                    padding: 25px;
                }
                
                .job-summary {
                    font-size: 1.1rem;
                    margin-bottom: 25px;
                    color: #495057;
                }
                
                .job-section {
                    margin-bottom: 25px;
                }
                
                .job-section h4 {
                    color: #2c3e50;
                    margin-bottom: 15px;
                    font-size: 1.2rem;
                    position: relative;
                    padding-bottom: 8px;
                }
                
                .job-section h4:after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 50px;
                    height: 2px;
                    background: #cc5500;
                }
                
                .job-section ul {
                    padding-left: 20px;
                }
                
                .job-section li {
                    margin-bottom: 8px;
                    position: relative;
                }
                
                .job-section li:before {
                    content: '•';
                    color: #cc5500;
                    font-weight: bold;
                    display: inline-block;
                    width: 1em;
                    margin-left: -1em;
                }
                
                .apply-button {
                    display: block;
                    width: 100%;
                    padding: 15px;
                    background: #cc5500;
                    color: white;
                    border: none;
                    font-size: 1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-align: center;
                }
                
                .apply-button:hover {
                    background: #c07e4fff;
                }
                
                .apply-button i {
                    margin-left: 8px;
                    transition: transform 0.3s ease;
                }
                
                .apply-button:hover i {
                    transform: translateX(3px);
                }
                
                @media (min-width: 768px) {
                    .job-openings {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    
                    .careers-hero h1 {
                        font-size: 3rem;
                    }
                }
            `}</style>
        </>
    );
};

export default Careers;