import Footer from "@web/components/Footer";
import Image from "next/image";
import useTitle from "@web/hooks/useTitle";
import { useRouter } from "next/router";

export default function ErrorPage() {
  useTitle("Not Found");

  const router = useRouter();

  return (
    <>
      <div className="flex h-screen w-screen flex-row items-center justify-center">
        <div className="flex flex-col items-start">
          <Image
            src="/images/dino.png"
            alt="Chrome Dino"
            width={70}
            height={70}
            onClick={() => router.push("/")}
          />
          <h1 className="mt-10 text-4xl font-medium">404 - Not found</h1>
          <h2 className="text-xl text-gray-500">
            Unfortunately, This page doesn&apos;t exist.
          </h2>
          <p className="mt-8 font-light text-gray-700">ERR_NOT_FOUND</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
