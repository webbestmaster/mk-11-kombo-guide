// @flow

import type {CharacterType} from './character-type';
import {mockUpMan} from './character/mock-up-man/mock-up-man';

export const characterList: Array<CharacterType> = [mockUpMan];

export function getCharacterById(characterId: string): CharacterType | null {
    return (
        characterList.find(
            (characterData: CharacterType): boolean => {
                return characterData.id === characterId;
            }
        ) || null
    );
}
