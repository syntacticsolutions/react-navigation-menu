import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from "@reach/router";

function Toolbar({ background, hoverBackground, linkColor, navLinks, imagePath }) {
    const [ navOpen, setNavOpen ] = useState(0)
    const [ hoverIndex, setHoverIndex ] = useState(-1)

    return (
        <nav
            class="responsive-toolbar"
            style={{ background: background || '#333' }}>
            <ul
                style={{ background: background || '#333' }}
                className={ navOpen ? 'active' : '' }
            >
                <figure class="image-logo" onClick={ () => { setNavOpen(!navOpen) } }>
                    <img src={ imagePath } height="40px" width="40px" alt="toolbar-logo" />
                </figure>
                { navLinks.map((link, index) => 
                    <li
                        onMouseEnter={ () => { setHoverIndex(index) } }
                        onMouseLeave={ () => { setHoverIndex(-1) } }
                        style={{ background: hoverIndex !== index ? (background || '#333') : (hoverBackground || '#999') }}
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

Toolbar.propTypes = {
    navLinks: PropTypes.array.isRequired,
    background: PropTypes.string,
    hoverBackground: PropTypes.string,
    linkColor: PropTypes.string,
    imagePath: PropTypes.string
}

export default Toolbar