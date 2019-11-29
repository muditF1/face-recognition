import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('signout')}
                    className='f6 link dim black underline pa1 pointer'>Sign Out</p>
            </nav>
        );
    } else {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('register')}
                    className='f6 link dim black underline pa1 pointer'>Register</p>
                <p onClick={() => onRouteChange('signin')}
                    className='f6 link dim black underline pa1 pointer'>Sign In</p>
            </nav>
        );
    }
}

export default Navigation;
