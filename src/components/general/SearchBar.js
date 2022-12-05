import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './general.css';

export default function SearchBar({ title, setTitle }) {
    /*
    Create src/components/general/SearchBar.js:

    The file should import general.css
    The file should export a functional component named SearchBar as default:
    Button must accept these props:
    title: String – The controlled state
    setTitle: String – The setState function of the above state.
    SearchBar’s return value must contain a html input with the appropriate attributes from the props.
    Create hendleInput function that takes the onChange event as parameter and sets the value to the event target value using the setTitle prop and pass it to the input onChange event.
    */
    return (
        <div className="search-bar">
            <FontAwesomeIcon icon="search" />
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Search"
            />
        </div>
    );
}
