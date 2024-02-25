import ProjectCard from "../components/ProjectCard";

function Projects(){
    const projects = [{title: "ASD", }, {title: 'QAZ', description: 'Ill baba'},]
    return(
        <div>
            <h1>Projects</h1>
            <ul>
                {projects.map((project,index)=> <li key={index}> <ProjectCard title={project.title} description={project.description} image={project.image}/> </li> )}
            </ul>
        </div>
    );
}
export default Projects;