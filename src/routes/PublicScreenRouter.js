import React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';

import ProductScreen from '../screens/ProductScreen';
import LogInScreen from '../screens/LogInScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';

import Navigation from '../components/Navigation'
import { useSelector } from 'react-redux';

const PublicScreenRouter = () => {

    const {logged} = useSelector(state => state.Auth.user)
    return (
        <>
                <Navigation/>
            <div>
                <Switch>
                    <Route exact path='/' component={HomeScreen} />
                    <Route exact path='/miel' component={ProductScreen}/>
                    
                        { !logged && 
                            (
                                <>
                                <Route exact path='/login' component={LogInScreen} />
                                <Route exact path='/register' component={RegisterScreen} />
                                </>

                            )
                        }
                    
                    <Redirect to="/" />
                    
                </Switch>
            </div>
            
        </>
    );
};

export default PublicScreenRouter;