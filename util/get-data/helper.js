// @flow

import fileSystem from 'fs';

const fsPromises = fileSystem.promises;

import type {CharacterType} from '../../www/js/character-data/character-type';

export function trim(text: string): string {
    return text.trim();
}

export function writeCharacterFile(characterData: CharacterType): Promise<?ErrnoError> {
    const filePath = `./www/js/character-data/character/${characterData.id}/data.json`;
    const dataString = JSON.stringify(characterData);

    return fsPromises.appendFile(filePath, dataString, 'utf8');
}
