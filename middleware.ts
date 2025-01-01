import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import isTokenExpired from './app/_lib/utils/jwt';

export const config = {
  matcher: '/dashboard/:path*',
};
// request: NextRequest
export function middleware() {
  // const path = request.nextUrl.pathname;
  // const previousRoute = encodeURIComponent(path);
  // const cookie = request.cookies.get('userToken');

  // if (!request.cookies.has('userToken')) {
  //   return NextResponse.redirect(
  //     new URL(`/auth/login${previousRoute ? `?previousRoute=${previousRoute}` : ''}`, request.url),
  //   );
  // }
  // if (cookie?.value && isTokenExpired(cookie?.value)) {
  //   return NextResponse.redirect(
  //     new URL(`/auth/login${previousRoute ? `?previousRoute=${previousRoute}` : ''}`, request.url),
  //   );
  // }
  return NextResponse.next();
}
