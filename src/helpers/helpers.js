import { AUTH_URL } from '../constants/endpoints';

export const createRequestPath = (path, id) => {
	if(!id) return `${AUTH_URL}${path}`;
	return `${AUTH_URL}${path}/${id}`;
}