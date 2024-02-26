import {Link} from 'react-router-dom';
import ProjectCard from "../components/ProjectCard";
import DataProjects from '../DataSample';

function Projects(){
    return(
        <div>
            <h1>Projects</h1>
            <ul>
                { DataProjects.map((project,index)=> <li key={index}> <Link to= {'/projects/'+ index}>
                    <ProjectCard title={project.title} description={project.description} image={project.image}/>
                </Link> </li> )}
            </ul>
        </div>
    );
}
export default Projects;