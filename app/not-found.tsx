import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FFF8F7] px-6 text-center">

      <h1 className="font-heading text-7xl text-[#3A3333]">
        404
      </h1>

      <p className="mt-6 text-[#6E6262]">
        The page you're looking for doesn't exist.
      </p>

      <Link
        href="/"
        className="mt-10 rounded-full bg-[#D7A8B1] px-8 py-4 text-white transition hover:bg-[#C996A0]"
      >
        Return Home
      </Link>

    </div>
  );
}