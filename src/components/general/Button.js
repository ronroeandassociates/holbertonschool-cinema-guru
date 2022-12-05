
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './general.css';


export default function Button({ label, className, onClick, icon }) {
    /*
    Create src/components/general/Button.js:

    The file should import general.css
    The file should export a functional component named Button as default:
    Button must accept these props:
    label: String – The button label
    className: String – Button custom classes
    onClick: Function – The onClick handler for the button.
    icon(optional): FontAwesomeIcon – An icon to decorate the button with.
    Button’s return value must contain a html button tag with the appropriate attributes from the props.
    Inside the button tag, there should be a FontAwesomeIcon if provided and the button text.
    Bind the button onClick event with the onClick function passed from the props.
    */

    return (
        <button className={`button ${className}`} onClick={onClick}>
            {icon && <FontAwesomeIcon icon={icon} />}
            {label}
        </button>
    )
}
