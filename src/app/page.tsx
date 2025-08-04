import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
      <Image
        src="/Jacob.png"
        alt="Welcome to the Portfolio of Jacob Jones"
        width={500}
        height={200}
        style={{ pointerEvents: "none" }}
      />
      <h1 className="mt-6 text-2xl font-bold text-center">
        Welcome to the Portfolio of Jacob Jones
      </h1>
      <div className="mt-8 flex flex-col items-center">
        <span className="text-lg">Scroll to see projects</span>
        <svg
          className="mt-2 animate-bounce"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 5v14m0 0l-7-7m7 7l7-7"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
