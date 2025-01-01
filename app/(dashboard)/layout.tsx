import Providers from '@store/provider';
import '@styles/globals.css';
import localFont from 'next/font/local';
import ToastContainerWrapper from '../_components/molecules/m-toast-wrapper';
import DashboardLayout from '../_components/layout/dashboard';

/**
 * Documentaion for the dashboard layout
 * @example
 * any component added to this layout would appear in every dashboard pages of the application.
 * related pages such as. localhost:dashboard/audit, etc.
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
          <DashboardLayout>
            <ToastContainerWrapper />
            <div className="">{children}</div>
          </DashboardLayout>
        </body>
      </Providers>
    </html>
  );
}

export default Layout;
