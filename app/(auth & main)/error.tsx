'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { Button } from '@/app/_components/atoms/a-button';
import ErrorImg from '@/public/assets/webp/error.webp';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-red-600 text-2xl">Something went wrong!</h2>
        <Image src={ErrorImg?.src} alt="error image" width={400} height={400} />
      </div>

      <div className="mt-4">
        <Button onClick={() => reset()} type="submit" variant="primary2" size="xfull">
          <p className="font-[600] text-sm group-hover:text-[#5D17EB] text-[#FFFFFF] px-[1rem]">
            Try again
          </p>
        </Button>
      </div>
    </div>
  );
}
