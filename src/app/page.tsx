
"use client";
import { MouseEvent, useEffect, useState } from "react";

export default function Home() {
  // Detect touch device
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  // Show/hide project descriptions on tap (mobile)
  const [showDesc, setShowDesc] = useState<{ [key: number]: boolean }>({});

  // For mobile: tap once to show description, tap again to redirect
  function handleProjectClick(idx: number, url: string, e: React.MouseEvent<HTMLAnchorElement>) {
    if (isTouch) {
      if (!showDesc[idx]) {
        e.preventDefault();
        setShowDesc((prev) => ({ ...prev, [idx]: true }));
      } else {
        // allow navigation
        setShowDesc((prev) => ({ ...prev, [idx]: false }));
      }
    }
    // On desktop, let default behavior happen
  }

  // For mobile: tap once to show description, tap again to redirect

  return (
    <div className="min-h-screen bg-black flex flex-col items-center text-white">
      {/* Header with external links */}
      <header className="w-full flex justify-center items-center py-6 bg-black">
        <nav className="flex gap-2 w-full max-w-5xl justify-center">
          <a
            href="https://www.linkedin.com/in/jacob-jones-408576240/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-purple-700 hover:bg-purple-900 text-white font-semibold px-2 py-1 transition-colors text-sm sm:text-lg max-w-[90px] sm:max-w-xs w-full text-center truncate"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/VotePost"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-purple-700 hover:bg-purple-900 text-white font-semibold px-2 py-1 transition-colors text-sm sm:text-lg max-w-[90px] sm:max-w-xs w-full text-center truncate"
          >
            GitHub
          </a>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-purple-700 hover:bg-purple-900 text-white font-semibold px-2 py-1 transition-colors text-sm sm:text-lg max-w-[90px] sm:max-w-xs w-full text-center truncate"
          >
            Resume
          </a>
          <a
            href="/about"
            className="block bg-purple-700 hover:bg-purple-900 text-white font-semibold px-2 py-1 transition-colors text-sm sm:text-lg max-w-[90px] sm:max-w-xs w-full text-center truncate"
          >
            About Me
          </a>
        </nav>
      </header>
      {/* Hero Section: image, text, arrow */}
      <section className="w-full flex flex-col items-center justify-center" style={{ minHeight: "100vh" }}>
        <img
          src="/Jacob.png"
          alt="Welcome to the Portfolio of Jacob Jones"
          className="mb-8"
          style={{
            width: "100vw",
            maxWidth: "320px",
            height: "auto",
            aspectRatio: "16/9",
            pointerEvents: "none",
            display: "block",
          }}
        />
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Welcome to the Portfolio of Jacob Jones</h1>
        <span className="text-lg mb-2">Scroll to see projects</span>
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
      </section>
      {/* Projects Section */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center bg-black">
        <h2 className="text-4xl md:text-4xl font-bold mb-8">Projects</h2>
        <ul className="space-y-8 w-full max-w-xl mt-8">
          {/* Project 1 */}
          <li className="relative group">
            <a
              href="https://github.com/VotePost/votepost"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-purple-700 px-8 py-6 text-lg text-white font-semibold text-center transition-colors hover:bg-purple-900 focus:bg-purple-900 cursor-pointer"
              style={{ textDecoration: "none" }}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleProjectClick(0, "https://github.com/VotePost/votepost", e)}
            >
              VotePost
            </a>
            {/* Description: show on hover (desktop) or tap (mobile) */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 mt-2 w-72 bg-gray-900 text-white text-sm rounded-lg px-4 py-2 z-10 transition-opacity duration-200
                ${showDesc[0] ? "opacity-100" : "opacity-0 pointer-events-none"} group-hover:opacity-100 group-hover:pointer-events-auto`}
              style={{ cursor: isTouch ? "pointer" : "default" }}
            >
              A web application that hosts the ability to create and take polls.
              {isTouch && <span className="block mt-2 text-xs text-purple-300">(Tap again to visit)</span>}
            </div>
          </li>
          {/* Project 2 */}
          <li className="relative group">
            <a
              href="https://github.com/VotePost/votepost.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-purple-700 px-8 py-6 text-lg text-white font-semibold text-center transition-colors hover:bg-purple-900 focus:bg-purple-900 cursor-pointer"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleProjectClick(1, "https://github.com/VotePost/votepost.github.io", e)}
            >
              Portfolio
            </a>
            <div
              className={`absolute left-1/2 -translate-x-1/2 mt-2 w-72 bg-gray-900 text-white text-sm rounded-lg px-4 py-2 z-10 transition-opacity duration-200
                ${showDesc[1] ? "opacity-100" : "opacity-0 pointer-events-none"} group-hover:opacity-100 group-hover:pointer-events-auto`}
              style={{ cursor: isTouch ? "pointer" : "default" }}
            >
              A personal portfolio showcasing my projects and skills.
              {isTouch && <span className="block mt-2 text-xs text-purple-300">(Tap again to visit)</span>}
            </div>
          </li>
          {/* Project 3 */}
          <li className="relative group">
            <a
              href="/migrationproject"
              className="block bg-purple-700 px-8 py-6 text-lg text-white font-semibold text-center transition-colors hover:bg-purple-900 focus:bg-purple-900 cursor-pointer"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleProjectClick(2, "/migrationproject", e)}
            >
              Migrating UI Libraries
            </a>
            <div
              className={`absolute left-1/2 -translate-x-1/2 mt-2 w-72 bg-gray-900 text-white text-sm rounded-lg px-4 py-2 z-10 transition-opacity duration-200
                ${showDesc[2] ? "opacity-100" : "opacity-0 pointer-events-none"} group-hover:opacity-100 group-hover:pointer-events-auto`}
              style={{ cursor: isTouch ? "pointer" : "default" }}
            >
              A project in which I worked as a team to migrate a code-generated web application from one UI library (AntDesign) to another (MUI).
              {isTouch && <span className="block mt-2 text-xs text-purple-300">(Tap again to visit)</span>}
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}