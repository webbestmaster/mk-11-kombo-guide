// @flow

/* global PUBLIC_PATH */

import type {Node} from 'react';
import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import {ReduxStoreProvider} from '../../redux-store-provider/provider';
import {System} from '../system/c-system';
import {Auth} from '../auth/c-auth';
import {appConst} from '../../const';
import {userIsAuthenticated, userIsNotAuthenticated} from '../auth/auth-helper';
import {HomePage} from '../../page/home-page/c-home-page';
import {LoginPage} from '../../page/login-page/c-login-page';
import {PageNotFound} from '../../page/page-not-found/c-page-not-found';
import {SettingsPage} from '../../page/settings-page/c-settings-page';
import {CharacterPage} from '../../page/character-page/c-character-page';

import {routes} from './routes';

console.log(appConst);

// eslint-disable-next-line id-match
const publicPath = PUBLIC_PATH;

export function App(): Node {
    return (
        /* eslint-disable react/jsx-max-depth */
        // you can replace the extra <div> with any react component
        <ReduxStoreProvider>
            <>
                <Auth key="auth"/>
                <System key="system">
                    <HashRouter basename={publicPath}>
                        <Switch key="switch">
                            <Route component={userIsNotAuthenticated(LoginPage)} exact path={routes.login}/>

                            <Route component={userIsAuthenticated(HomePage)} exact path={routes.index}/>
                            <Route component={userIsAuthenticated(SettingsPage)} exact path={routes.settings}/>
                            <Route component={userIsAuthenticated(CharacterPage)} exact path={routes.character}/>

                            <Route component={PageNotFound}/>
                        </Switch>
                    </HashRouter>
                </System>
            </>
        </ReduxStoreProvider>
        /* eslint-enable react/jsx-max-depth */
    );
}
