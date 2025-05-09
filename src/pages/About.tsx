import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faHistory, faCar, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Button = ({ icon, label, to }) => {
    return (
        <Link to={to} className="divButton">
            <div className="button">
                <FontAwesomeIcon icon={icon} size="3x" />
            </div>
            <div className="button-name">{label}</div>
        </Link>
    );
};

const About = () => {
    return (
        <div className="container containerAbout" style={{width: "100%"}}>
            <Button icon={faMapMarkerAlt} label="Location" to="/location" />
            <Button icon={faHistory} label="History" to="/history" />
            <Button icon={faCar} label="Take me to the Car" to="/car" />
            <Button icon={faTachometerAlt} label="Max Speed" to="/max-speed" />
        </div>
    );
};

export default About;
