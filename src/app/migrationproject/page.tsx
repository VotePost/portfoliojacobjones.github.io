"use client";
import Link from "next/link";

export default function MigrationProject() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center px-4">
      <div
        className="relative flex items-center justify-center w-full max-w-4xl h-[950px] md:h-[1100px] mb-8"
        style={{
          backgroundImage: "url('/scroll.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div
          className="relative z-10 text-base md:text-lg text-black text-left w-full h-full flex flex-col justify-start"
          style={{
            padding: "23% 30% 10% 24%",
            clipPath:
              "polygon(20% 7%, 80% 7%, 93% 18%, 93% 82%, 80% 93%, 20% 93%, 7% 82%, 7% 18%)",
            background: "rgba(0, 0, 0, 0)",
          }}
        >
          <h1
            className="text-3xl md:text-4xl font-bold mb-2 text-black text-center"
            style={{ marginTop: "-0.5em" }}
          >
            Migration Project
          </h1>
          <p className="mb-4 indent-8">
            This project involved working as a team to migrate a code-generated web application from one UI library (AntDesign) to another (MUI).
             The process required careful planning, collaboration, and a deep understanding of both libraries to ensure a seamless transition and 
             maintain the application&apos;s functionality and appearance.
          </p>
          <p className="mb-8 indent-8">
            My responsibilities included analyzing the existing AntDesign components, mapping them to their MUI equivalents, 
            and refactoring the codebase to use MUI&apos;s styling and component paradigms. I also contributed to updating custom styles, resolving 
            compatibility issues, and performing thorough testing to ensure the migrated application met all requirements and provided a consistent user experience.
          </p>
          <Link
            href="/"
            className="font-semibold px-6 py-3 transition-colors text-lg text-center w-full max-w-xs ml-0 mt-4"
            style={{
              backgroundColor: "hsl(37, 39%, 87%)",
              color: "#171717",
              border: "2px solid #bfa76a",
            }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = "hsl(37, 39%, 70%)")}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = "hsl(37, 39%, 87%)")}
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}