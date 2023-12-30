import profile from './resources/profile-2.PNG';

function CreateAboutPage() {
    return (
        <div className="page" id="aboutPage">       
            <div className="flex-container">
                <div className="flex-child image">      
                    <h1>Who am I?</h1>
                    <p>I'm a senior Computer Science enthusiast at the University of Washington, deeply interested by web development 
                        and eagerly looking forward to exploring mobile app development in the future.</p>   
                    <img id="profilePhoto" src={profile} alt="Profile Photo"></img>     
                    <h4>The Journey Begins</h4>
                    <p>My journey into Computer Science all began when I was a kid, around the age of 8. My sister, who was in middle school at the time, 
                        started exploring the world of coding on Codecademy. My sister informed me of this platform, and I too started delving into Codecademy, 
                        where I dived into HTML, laying the foundation for my journey in programming.</p>
                    <h4>From HTML to a Passion for Coding</h4>
                    <p>As I delved into the world of HTML, I discovered I had a passion for coding. I began looking into other languages as a kid, and performed some basic coding in languages such as Java and Ruby. 
                        It wasn't until I went to college where I really got to expand my knowledge.</p>                                        
                </div>
                <div className="flex-child text">    
                    <h4>Academic Journey</h4>
                    <p>Throughout my academic tenure, I've delved into coursework exploring software development, algorithms, and databases. I've discovered my passion for both front-end and back-end development.
                        While I deeply appreciate the complexity and problem-solving aspects of back-end, my "eye" for design and love for creating intuitive and appealing user interfaces drive my inclination towards front-end. I have always had 
                        a love for art, creating drawings and digital designs since I was a kid. Therefore, I was very excited to take a UI/UX Design Course at UW, which I then subsequently enrolled in a Client/Server Programming class
                        where I greatly expanded my knowledge of web development and databases. My knowledge from my UI/UX Design course allowed me to create an interface for the web app we designed, to enhance the user experience.</p>
                    <h4>Beyond the Screen</h4>
                    <p>Beyond coding, I enjoy playing puzzle games, which not only sharpens my problem-solving skills, but also nurtures a methodical approach 
                        to overcoming challenges—a mindset that carries over into my coding pursuits. I also enjoy creating art in my free-time, whether it be drawing, painting, or digital art, this creative outlet fuels my love for design.
                        The combination of creativity and technology sharpens my aesthetic sense and stimulates new ideas for user interface design.</p>
                    <h4>The Road Ahead</h4>
                    <p>As I approach the end of my senior year, my goal is to explore and delve deeper into the 
                        fields of web development, mobile app development, and possibly beyond. Although I am passionate about these fields, I am aware of the wide range of options in the tech industry. 
                        My goal is to obtain practical experience that will help me discover my true calling—a particular field or specialty where I can make meaningful contributions. 
                        Considering how rapidly technology is developing, I find graduate school to be an appealing proposition. It offers a chance for in-depth exploration, improving my skills, and perhaps providing 
                        me clarity on the exact trajectory I wish to pursue withing the ever-evolving landscape of computer science.</p>  
                    
                </div>
                <div style={{marginTop: '80px', borderBottom: '1px solid #cab4ee'}}></div>
            </div>
        </div>       
    )
}

export default CreateAboutPage;