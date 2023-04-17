import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const Home = () => {
    const user = useContext(AuthContext);
    return (
        <div>
            {
                user &&
                <span>{user.displayName}</span>
            }
        </div>
    );
};

export default Home;