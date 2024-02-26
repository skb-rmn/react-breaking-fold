import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import defaultProjectImage from '../assets/Team-project.jpg';
import DataProjects from '../DataSample';
import { useParams } from 'react-router-dom';
function Project() {    
    const [project, setProject] = useState({
        title: 'Project Title',
        image: defaultProjectImage,
        description: 'Lorem Ipsum',
    });
    const {id} = useParams();
    
    useEffect(()=>{
        const newProject = DataProjects[id];
        console.log(newProject);
        setProject(p => ({...p, ...newProject}));
    }, [id]);

    return(
        <div>
            <h1>Project</h1>
            <img src={project.image} alt="Project Image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
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