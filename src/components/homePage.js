import profile from './resources/profile-1.png';
import resume from './resources/Chelsea_Dacones_Resume.pdf'

function downloadResume() {
    const downloadLink = document.createElement('a');
    downloadLink.href = resume;
    downloadLink.download = 'chelsea_dacones_resume.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

function CreateHomePage() {
    return (
        <div className="page" id="homePage">
            <div className="content-container">
                <div className="flex-container">
                    <div className="flex-child text">
                        <h1>Hi, I am <span className="lilac">Chelsea</span></h1>
                        <h5>Computer Science Student</h5>
                        <p>A senior Computer Science student at the University of Washington proficient in Java, HTML, CSS, and JavaScript. 
                            I am passionate about front-end development, aiming to craft visually appealing and 
                            intuitive interfaces to elevate the user experience.</p>
                        <button type="button" className='btn btn-primary' onClick={downloadResume}>Download resume</button>  
                    </div>
                    <div className="flex-child image">
                        <img id="profilePhoto" src={profile} alt="Profile Photo"></img>
                    </div>
                </div>  
            </div>
            <div style={{marginTop: '80px', borderBottom: '1px solid #cab4ee'}}></div>
        </div>
    )
}

export default CreateHomePage;