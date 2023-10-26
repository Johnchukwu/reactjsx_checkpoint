
import PropTypes from 'prop-types';


const Name = ({ name }) => (


  <h2>{name}</h2>
);

Name.propTypes = {

    name: PropTypes.string.isRequired
    
}


export default Name;
