import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "@reach/router";

class Toolbar extends Component {
    constructor (props) {
        super(props)
        this.state = { 
            navOpen: false,
            hoverIndex: -1
        }
    }

    set = (key, payload) => {
        this.setState({ [key]: payload })
    }

    render() {
        const { background, hoverBackground, linkColor, navLinks, imagePath } = this.props;
        const { hoverIndex, navOpen } = this.state
        return (
            <nav style={{ background: background || '#333' }}>
                <ul
                    style={{ background: background || '#333' }}
                    class={ navOpen ? 'active' : '' }
                >
                    <figure class="image-logo" onClick={ () => { this.set('navOpen', !navOpen) } }>
                        <img src={ imagePath } height="40px" width="40px" alt="toolbar-logo" />
                    </figure>
                    {   
                        navLinks.map((link, index) => 
                            <li
                                onMouseEnter={ () => { this.set('hoverIndex', index) } }
                                onMouseLeave={ () => { this.set('hoverIndex', -1) } }
                                style={{ background: hoverIndex === index ? (background || '#333') : (hoverBackground || '#999') }}
                            >
                                <Link
                                    to={link.path}
                                    style={{ color: linkColor || '#DDD' }}
                                >
                                    { link.text }
                                    <i className={ link.icon } />
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </nav>
        )
    }
}


Toolbar.propTypes = {
    navLinks: PropTypes.array.isRequired,
    background: PropTypes.string,
    hoverBackground: PropTypes.string,
    linkColor: PropTypes.string,
    imagePath: PropTypes.string
}

export default Toolbar