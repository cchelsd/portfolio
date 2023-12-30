import Carousel from './carousel.js'

function CreateProjectsPage() {
    return (
        <div className="page" id="projectsPage">   
            <h1 id="projectsHeading">Projects</h1>
            <div id="projectsCarousel">
                <Carousel />
            </div>           
        </div>
    )
}

export default CreateProjectsPage;