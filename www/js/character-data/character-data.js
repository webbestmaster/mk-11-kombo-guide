// @flow

import type {CharacterType} from './character-type';

import {baraka} from './character/baraka/data';
import {cassieCage} from './character/cassie-cage/data';
import {cetrion} from './character/cetrion/data';
import {dvorah} from './character/dvorah/data';
import {erronBlack} from './character/erron-black/data';
import {frost} from './character/frost/data';
import {geras} from './character/geras/data';
import {jacquiBriggs} from './character/jacqui-briggs/data';
import {jade} from './character/jade/data';
import {jaxBriggs} from './character/jax-briggs/data';
import {johnnyCage} from './character/johnny-cage/data';
import {kabal} from './character/kabal/data';
import {kano} from './character/kano/data';
import {kitana} from './character/kitana/data';
import {kollector} from './character/kollector/data';
import {kotalKahn} from './character/kotal-kahn/data';
import {kungLao} from './character/kung-lao/data';
import {liuKang} from './character/liu-kang/data';
import {noobSaibot} from './character/noob-saibot/data';
// import {raiden} from './character/raiden/data';
// import {scorpion} from './character/scorpion/data.js';
// import {skarlet} from './character/skarlet/data';
// import {shaoKahn} from './character/shao-kahn/data';
// import {sonyaBlade} from './character/sonya-blade/data';
// import {subZero} from './character/sub-zero/data';

export const characterList: Array<CharacterType> = [
    baraka,
    cassieCage,
    cetrion,
    dvorah,
    erronBlack,
    frost,
    geras,
    jacquiBriggs,
    jade,
    jaxBriggs,
    johnnyCage,
    kabal,
    kano,
    kitana,
    kollector,
    kotalKahn,
    kungLao,
    liuKang,
    noobSaibot,
    // raiden,
    // scorpion,
    // shaoKahn,
    // skarlet,
    // sonyaBlade,
    // subZero,
];

export function getCharacterById(characterId: string): CharacterType | null {
    return (
        characterList.find((characterData: CharacterType): boolean => {
            return characterData.id === characterId;
        }) || null
    );
}
