"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center text-white">
      {/* Sticky image only */}
      <div
        className="sticky top-0 z-20 flex flex-col items-center bg-black pt-8 pb-4 transition-all duration-300"
        style={{
          paddingTop: scrolled ? "10px" : "64px",
          paddingBottom: scrolled ? "4px" : "32px",
        }}
      >
        <Image
          src="/Jacob.png"
          alt="Welcome to the Portfolio of Jacob Jones"
          width={scrolled ? 200 : 800}
          height={scrolled ? 125 : 500}
          style={{
            pointerEvents: "none",
            transition: "width 0.3s, height 0.3s",
          }}
        />
      </div>
      {/* Welcome text and arrow, hidden after scroll */}
      {!scrolled && (
        <div className="flex flex-col items-center mt-8">
          <h1 className="text-3xl font-bold text-center mb-6">
            Welcome to the Portfolio of Jacob Jones
          </h1>
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
      )}
      {/* Spacer to force scrolling */}
      <div className="h-[600px]"></div>
      {/* Projects Section */}
      <div className="w-full flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <ul className="space-y-4 w-full max-w-xl">
          <li className="relative group">
            <a
              href="https://github.com/VotePost/votepost"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-purple-700 rounded-lg px-6 py-4 text-white font-semibold text-center transition-colors hover:bg-purple-900 focus:bg-purple-900"
              style={{ textDecoration: "none" }}
            >
              VotePost
            </a>
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-72 bg-gray-900 text-white text-sm rounded-lg px-4 py-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10">
              A web application that hosts the ability to create and take polls.
            </div>
          </li>
          {/* Add more projects here */}
        </ul>
      </div>
    </div>
  );
}
