import { cookies } from 'next/headers';

const getServerCookie = () => {
  const cookieStore = cookies();
  const token = cookieStore.get('userToken');

  return token;
};

export default getServerCookie;
