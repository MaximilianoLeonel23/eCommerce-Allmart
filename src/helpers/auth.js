import { tokenName } from "../constants/env";

export const token = () => localStorage.getItem(tokenName);

export const setToken = (token) => localStorage.setItem(tokenName, token);

export const deleteToken = () => localStorage.removeItem(tokenName);

export const clearLocal = () => localStorage.clear();
