'use client';

import AuthLayoutBg from '@assets/png/auth-layout-bg.png';

interface IAuthLayoutProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: IAuthLayoutProps): JSX.Element | null {
  return (
    <div className="relative w-full py-28 min-h-[50vh] bg-[#FAF8FE] bg-cover">
      <img
        src={AuthLayoutBg.src}
        alt="auth layout background"
        className="absolute bottom-[11rem] md:bottom-[5rem] lg:bottom-[2rem] xl:bottom-[2rem] right-0 md:right-[4rem] lg:right-[8rem] xl:right-[20rem] w-full h-full object-contain object-center"
      />
      <section className="relative z-20 w-full flex items-center justify-center  bg-transparent min-h-[calc(100vh_-_15%)] sm:flex-row">
        <main className="flex bg-white bg-opacity-95 shadow-lg w-full mx-2 md:mx-0 md:w-[39rem] items-center justify-center">
          <div className="px-[0.3rem] py-[2rem] sm:px-[1rem] sm:py-[4rem] w-[20rem] sm:w-[28rem]">
            {/* form children */}
            {children}
          </div>
        </main>
      </section>
    </div>
  );
}

export default AuthLayout;
