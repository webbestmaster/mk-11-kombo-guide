// @flow

/* global BUILD_DATE */

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component} from 'react';

import {Page} from '../../component/page/c-page';
import {Header} from '../../component/header/c-header';
import {Scroll} from '../../component/ui/scroll/c-scroll';
import {CharacterList} from '../../component/character-list/c-character-list';

import {Locale} from '../../component/locale/c-locale';

import homePageStyle from './home-page.style.scss';

export function HomePage(): Node {
    return (
        <Page>
            <Header hasBackButton={false} hasMenuButton title={<Locale stringKey="APP_NAME"/>}/>
            <Scroll>
                <CharacterList/>
            </Scroll>
        </Page>
    );
}
