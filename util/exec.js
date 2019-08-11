// @flow

import {exec as childProcessExec} from 'child_process';

export type ExecResultType = void | string | Error;

export function exec(command: string): Promise<ExecResultType> {
    return new Promise((resolve: ExecResultType => mixed) => {
        childProcessExec(
            command,
            {encoding: 'utf-8'},
            (error: Error | mixed, stdout: string | Buffer, stderr: string | Buffer) => {
                console.log('exec:', error, stdout, stderr);
                if (error instanceof Error) {
                    resolve(error);
                    return;
                }

                if (typeof stdout === 'string') {
                    resolve(stdout);
                    return;
                }

                resolve();
            }
        );
    });
}
