"use client";
import Link from "next/link";

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
            About Me
          </h1>
          <p className="mb-4 indent-8">
            Hi, I'm Jacob Jones. I'm a senior at Randolph College studying
            computer science pursuing a career in software development/engineering.
            I have a passion in art and design, which helps me incorporate my
            creativity into my projects. I enjoy the frontend of web development,
            creating user-friendly interfaces, and ensuring a seamless user
            experience.
          </p>
          <p className="mb-8 indent-8">
            I have experience with full stack development, in which I have worked
            on various projects that involve both frontend and backend
            technologies. My hard skills include HTML, CSS, JavaScript, React,
            Node.js, Python, Java, SQL, YAML, GIT, Azure Dev Ops, and GitHub.
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
