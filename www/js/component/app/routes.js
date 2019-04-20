// @flow

export function getCharacterPath(characterId: string): string {
    return '/character/' + characterId;
}

export const routes = {
    index: '/',
    login: '/login',
    character: getCharacterPath(':characterId'),
};
