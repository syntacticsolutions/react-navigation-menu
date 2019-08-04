import React, { useState } from 'react';
import { Link } from "@reach/router";

function ResponsiveNavigation({ background, hoverBackground, linkColor, navLinks, imagePath }) {
    const [ navOpen, setNavOpen ] = useState(0)
    const [ hoverIndex, setHoverIndex ] = useState(-1)
    return (
        <nav
            className="responsive-toolbar"
            style={{ background: background || '#333' }}>
            <ul
                style={{ background: background || '#333' }}
                className={ navOpen ? 'active' : '' }
            >
                <figure className="image-logo" onClick={ () => { setNavOpen(!navOpen) } }>
                    <img src={ imagePath } height="40px" width="40px" alt="toolbar-logo" />
                </figure>
                { navLinks.map((link, index) => 
                    <li
                        key={ index }
                        onMouseEnter={ () => { setHoverIndex(index) } }
                        onMouseLeave={ () => { setHoverIndex(-1) } }
                        style={{ background: hoverIndex === index ? (hoverBackground || '#999') : '' }}
                    >
                        <Link
                            to={link.path}
                            style={{ color: linkColor || '#DDD' }}
                        >
                            { link.text }
                            <i className={ link.icon } />
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default ResponsiveNavigation