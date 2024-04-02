import PropTypes from 'prop-types';

const ColorChanger = ({ color, name }) => {
    const squareStyle = {
        width: '150px',
        height: '150px',
        backgroundColor: color,
        marginBottom: '20px',
        marginRight: '20px',
        textAlign: 'center',
    };

    const nameStyle = {
        fontWeight: 'bold',
        marginBottom: '10px',
    };

    return (
        <div>
        <div style={nameStyle}>{name}</div>
        <div style={squareStyle}></div>
        </div>
    );
};

ColorChanger.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default ColorChanger;
