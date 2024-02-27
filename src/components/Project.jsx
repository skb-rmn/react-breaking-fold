import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
// import defaultProjectImage from '../assets/Team-project.jpg';
import {DataProjects, DefaultProject} from '../DataSample';
import { useParams } from 'react-router-dom';
function Project() {    
    // const [project, setProject] = useState({
    //     title: 'Project Title',
    //     image: defaultProjectImage,
    //     description: 'Lorem Ipsum',
    //     developedBy: [],
    // });
    const [project, setProject] = useState({...DefaultProject});
    const {id} = useParams();
    

    useEffect(()=>{
        console.log(project);
        const newProject = DataProjects[id];
        // console.log(newProject);
        setProject(p => ({...p, ...newProject}));
    }, [id,]);

    return(
        <div>
            <h1>Project</h1>
            <img src={project.image} alt="Project Image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div>
                <h3>Developed By:</h3>
                {project.developedBy.length > 0? <ul> {project.developedBy.map((dev,index)=><li key={index}>{dev.name}</li>)} </ul> : <p>Data Not Ready</p>}                
            </div>
        </div>
    );
}
Project.propTypes = {
    id: PropTypes.number,
};
Project.defaultProps = {
    id: -1,
};
export default Project;