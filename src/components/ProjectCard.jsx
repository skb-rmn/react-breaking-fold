import PropTypes from 'prop-types';
import defaultProjectImage from '../assets/Team-project.jpg';
function ProjectCard(props) {
    return(
        <div className="card">
            <img src={props.image} alt={props.title} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{props.title}</h2>
                <p className="card-description">{props.description}</p>
            </div>
        </div>
    );
}

ProjectCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,  
};

ProjectCard.defaultProps = {
    title: "Project Title",
    image: defaultProjectImage,
    description: "Lorem Ipsum",
};

export default ProjectCard;