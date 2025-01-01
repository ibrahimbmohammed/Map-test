/**
 * Documentaion for the entry page
 * @example
 * this is your typical index.ts page in previous versions of next.js
 * items in this page would be rendered in the root of you project, in the localhost:3000
 */

"use client";
import { FunctionComponent, useEffect } from "react";
import { useRouter } from "next/navigation";

const Home: FunctionComponent = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/dashboard/procurement/qoute");
  }, []);
  return (
    <div className="min-h-screen text-normal text-[#344054]">
      hello landing page, you will be automatically redirected to the dashboard
    </div>
  );
};

export default Home;
