import React, { useEffect, useState } from 'react';
function NavItem(props) {
    const [currentLocation, setCurrentLocation] = useState('');

    useEffect(() => {
        const currentLocationWithoutParams = window.location.pathname;
        setCurrentLocation(currentLocationWithoutParams);
    }, []);

    return (
        <li className="nav-item">
            <a href={props.href} className={`nav-link ${currentLocation === props.href ? "active" : "link-dark"
                }`}
                aria-current={
                    currentLocation === props.href ? "page" : undefined
                }>
                {props.children}
            </a>
        </li>
    )
}

export default NavItem