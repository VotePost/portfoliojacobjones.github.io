"use client";
import Link from "next/link";
import "../scroll-responsive.css";

export default function About() {
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
        {/* SVG overlay for debugging mobile polygon, only visible on mobile */}
        <svg
          viewBox="0 0 100 100"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 30,
            display: "block",
          }}
          className="block md:hidden"
        >
          <polygon
            points="4,7 99,7 99,18 99,82 99,99 4,93 1,82 1,18"
            fill="none"
            stroke="lime"
            strokeWidth="2"
          />
        </svg>
        <div
          id="scroll-text"
          className="relative z-10 text-base md:text-lg text-black text-left w-full h-full flex flex-col justify-start"
        >
          <h1
            className="text-3xl md:text-4xl font-bold mb-2 text-black text-center"
            style={{ marginTop: "-0.5em" }}
          >
            About Me
          </h1>
          <p className="mb-4 indent-8">
            Hi, I&apos;m Jacob Jones. I&apos;m a senior at Randolph College
            studying computer science pursuing a career in software
            development/engineering. I have a passion in art and design, which
            helps me incorporate my creativity into my projects. I enjoy the
            frontend of web development, creating user-friendly interfaces, and
            ensuring a seamless user experience.
          </p>
          <p className="mb-8 indent-8">
            I have experience with full stack development, in which I have worked
            on various projects that involve both frontend and backend
            technologies. My hard skills include HTML, CSS, JavaScript, React,
            Node.js, Python, Java, SQL, YAML, GIT, .NET, Azure Dev Ops, and GitHub.
          </p>
          <Link
            href="/"
            className="bg-black hover:bg-gray-900 text-white font-semibold px-6 py-3 transition-colors text-lg text-center w-full max-w-xs -ml-9 mt-14"
            style={{
              backgroundColor: "#ded1bcff",
              color: "#000000ff", // dark text for contrast
              // border: "2px solid #d2c3abff",
            }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = "hsl(37, 39%, 70%)")}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = "#ded1bcff")}
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
