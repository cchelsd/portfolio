import HomePage from './homePage';
import AboutPage from './aboutPage';
import ProjectsPage from './projectsPage'
import React, { useState } from 'react';
import Monogram from './resources/monogram.png'

function CreateHeader() {
    const [activeTab, setActiveTab] = useState(1);
    
    const updateTab = (tab) => {
        setActiveTab(tab);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const offset = section.id === "home" ? 50 : 20;
        const offsetTop = section.getBoundingClientRect().top + window.scrollY - navbarHeight - offset;
        if (section) {
            window.scrollTo({ behavior: 'smooth', top: offsetTop})
        }
    };

    // const renderTabContent = () => {
    //     return (
    //         <>
    //             {/* Your navigation code */}
    //             <div className='tab-content'>
    //                 <div className={`fade-in-out ${activeTab === 1 ? 'active' : ''}`}>
    //                     {activeTab === 1 && <HomePage />}
    //                 </div>
    //                 <div className={`fade-in-out ${activeTab === 2 ? 'active' : ''}`}>
    //                     {activeTab === 2 && <AboutPage />}
    //                 </div>
    //                 <div className={`fade-in-out ${activeTab === 3 ? 'active' : ''}`}>
    //                     {activeTab === 3 && <ProjectsPage />}
    //                 </div>
    //             </div>
    //         </>
    //     ) 
    // };

    const renderTabContent = (section) => {
        return (
            <>
                <section id="home" className="section">
                    <HomePage />
                </section>

                <section id="about" className="section">
                    <AboutPage />
                </section>

                <section id="projects" className="section">
                    <ProjectsPage />                 
                </section>
            </>
        )
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
                <div className="container-fluid">
                    <a className="navbar-brand lilac" href="#"><img src={Monogram} id='monogram'></img></a>
                    <button className="navbar-toggler" type="button" onClick={() => updateTab(1)} data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <button className={`nav-link btn ${activeTab === 1 ? 'active' : ''}`} onClick={() => {updateTab(1); scrollToSection('home')}}>Home</button>
                            </li>
                            <li className="nav-item">
                                <button className={`nav-link btn ${activeTab === 2 ? 'active' : ''}`} onClick={() => {updateTab(2); scrollToSection('about')}}>About Me</button>
                            </li>
                            <li className="nav-item">
                                <button className={`nav-link btn ${activeTab === 3 ? 'active' : ''}`} onClick={() => {updateTab(3); scrollToSection('projects')}}>Projects</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='container-fluid'>
                {renderTabContent()};
            </div>
        </>
    ) 
}
        
export default CreateHeader;