// @flow

export function getCharacterPath(characterId: string): string {
    return '/character/' + characterId;
}

export const routes = {
    index: '/',
    login: '/login',
    settings: '/settings',
    character: getCharacterPath(':characterId'),
};
