// @flow

import fileSystem from 'fs';

const fsPromises = fileSystem.promises;

import type {CharacterType} from '../../www/js/character-data/character-type';

export function trim(text: string): string {
    return text.trim().replace(/\s+/g, ' ');
}

function dashToCamelCase(word: string): string {
    return word.replace(/-([a-z])/gi, (all: mixed, letter: string): string => letter.toUpperCase());
}

function getCharacterDataWriteContent(characterData: CharacterType): string {
    return `// @flow

        /* eslint-disable sonarjs/no-duplicate-string */

        // WARNING: generated file!
        
        import faceImagePath from './face.png';
        
        export const ${dashToCamelCase(characterData.id)} = {
            id: '${characterData.id}',
            imagePath: faceImagePath,
            name: '${characterData.name}',
            move: ${JSON.stringify(characterData.move)},
        };
    `;
}

export function writeCharacterFile(characterData: CharacterType): Promise<?ErrnoError> {
    const filePath = `./www/js/character-data/character/${characterData.id}/data.js`;
    const dataString = getCharacterDataWriteContent(characterData);

    return fsPromises.writeFile(filePath, dataString, 'utf8');
}
