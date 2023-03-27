import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';

export function middleware(request: NextRequest) {
  const token = request ? request.cookies.get('accessToken')?.value : null;
  // token 확인후 로그인 페이지로 리다이렉트

  if (!token && request.nextUrl.pathname.startsWith('/mainpage')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  if (!token && request.nextUrl.pathname.startsWith('/diary')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // 토큰있을떄 로긴 랜딩접근시 메인페이지로
  if (token && request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/mainpage', request.url));
  }
  if (token && request.nextUrl.pathname.startsWith('/landing')) {
    return NextResponse.redirect(new URL('/mainpage', request.url));
  }
}
export const config = {
  // matcher: '/:path*'
  matcher: ['/diary', '/diary/:path*', '/mainpage', '/landing', '/login']
};