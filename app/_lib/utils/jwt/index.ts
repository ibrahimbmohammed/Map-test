/* eslint-disable import/no-extraneous-dependencies */
import { jwtDecode } from 'jwt-decode';

const isTokenExpired = (token: string | undefined): boolean => {
  if (!token) {
    return true; // Token is considered expired if it doesn't exist
  }

  const decodedToken = jwtDecode(token);
  const currentTime: number = Math.floor(Date.now() / 1000); // Convert to seconds

  return decodedToken?.exp! < currentTime;
};

export default isTokenExpired;
