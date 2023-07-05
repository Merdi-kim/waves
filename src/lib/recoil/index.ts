import { atom } from 'recoil';

export const lensProfiles = atom({
	key: 'lensProfiles',
	default: [],
});

export const selectedHandle = atom({
	key: 'userHandle',
	default: null,
});
