export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FFF8F7]">
      <div className="flex flex-col items-center">

        <div className="h-14 w-14 animate-spin rounded-full border-4 border-[#E9CDD2] border-t-[#C996A0]" />

        <p className="mt-6 font-accent text-2xl text-[#B88A93]">
          Gracie's
        </p>

      </div>
    </div>
  );
}