import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest}
            component={props => (
                (isAuthenticated)
                ? <Component {...props}/>
                : <Redirect to="/"/>
            )}
         />
    );
};

export default PrivateRoute;