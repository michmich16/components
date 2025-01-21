import React from 'react';
import PropTypes from 'prop-types';

export const CustomButton = ({
    children,
    onClick,
    width = 'auto',
    height = 'auto',
    color = '#fff',
    backgroundColor = '#007BFF',
    border = 'none',
    borderRadius = '4px',
    fontSize = '16px',
    padding = '10px 20px',
    hoverBackgroundColor = '#0056b3',
    hoverColor = '#fff',
    style = {},
    ...props
}) => {
    const buttonStyle = {
        width,
        height,
        color,
        backgroundColor,
        border,
        borderRadius,
        fontSize,
        padding,
        cursor: 'pointer',
        transition: 'background-color 0.3s, color 0.3s',
        ...style,
    };

    const [hover, setHover] = React.useState(false);

    return (
        <button
            onClick={onClick}
            style={{
                ...buttonStyle,
                backgroundColor: hover ? hoverBackgroundColor : backgroundColor,
                color: hover ? hoverColor : color,
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            {...props}
        >
            {children}
        </button>
    );
};

CustomButton.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    width: PropTypes.string,
    height: PropTypes.string,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    border: PropTypes.string,
    borderRadius: PropTypes.string,
    fontSize: PropTypes.string,
    padding: PropTypes.string,
    hoverBackgroundColor: PropTypes.string,
    hoverColor: PropTypes.string,
    style: PropTypes.object,
};
