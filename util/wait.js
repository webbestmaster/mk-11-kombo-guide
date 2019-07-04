// @flow

/* global setTimeout */

export function waitTime(timeOut: number): Promise<void> {
    return new Promise((resolve: () => void) => {
        setTimeout(resolve, timeOut);
    });
}
