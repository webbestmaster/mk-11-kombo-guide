// @flow

export type NaType = 'N/A';
export type MayBeNaType<BasicType> = BasicType | NaType;

const naValue: NaType = 'N/A';
