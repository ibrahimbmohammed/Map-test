import Providers from '@store/provider';
import '@styles/globals.css';
import localFont from 'next/font/local';
import ToastContainerWrapper from '../_components/molecules/m-toast-wrapper';
import Navbar from '../_components/molecules/m-navbar';
import Footer from '../_components/molecules/m-footer';

/**
 * Documentaion for the entry layout
 * @example
 * this is not the auth layout, but rather the index.ts layout
 * any component added to this layout would appear in every page of the application.
 * specifically root related pages. localhost:3000/about, etc.
 */

const museo = localFont({
  src: [
    {
      path: '../../public/assets/fonts/Satoshi-Light.otf',
      weight: '100',
    },
    {
      path: '../../public/assets/fonts/Satoshi-Regular.otf',
      weight: '300',
    },
    {
      path: '../../public/assets/fonts/Satoshi-Medium.otf',
      weight: '400',
    },
    {
      path: '../../public/assets/fonts/metropolis.regular.otf',
      weight: '500',
    },
    {
      path: '../../public/assets/fonts/Satoshi-Bold.otf',
      weight: '700',
    },
    {
      path: '../../public/assets/fonts/Satoshi-Black.otf',
      weight: '900',
    },
    {
      path: '../../public/assets/fonts/Satoshi-Black.otf',
      weight: '1000',
    },
  ],
  variable: '--font-museo',
});

export const metadata = {
  title: "Medical Advanced Platform",
  description: "Medical Advanced Platform",
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Providers>
        <body className={`${museo.variable} font-sans`}>
          <ToastContainerWrapper />
          <Navbar />
          <div>{children}</div>
          <Footer />
        </body>
      </Providers>
    </html>
  );
}

export default Layout;
