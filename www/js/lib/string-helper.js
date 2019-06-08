// @flow

export function trim(text: string): string {
    return text.trim().replace(/\s+/g, ' ');
}
