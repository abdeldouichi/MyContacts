import React from 'react';

const NavBar = (props) => {
    let {title} = props;
        return (
            <div>
                <h1>{title}</h1>
            </div>
        );
};
NavBar.defaultProps = {
    title : "default title"
}

export default NavBar;