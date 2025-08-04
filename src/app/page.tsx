import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
      <Image
        src="/Jacob.png"
        alt="Welcome to the Portfolio of Jacob Jones"
        width={800}
        height={500}
        style={{ pointerEvents: "none" }}
      />
      <h1 className="mt-6 text-3xl font-bold text-center">
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
      {/* Projects Section */}
      <div className="mt-24 w-full flex flex-col items-center">
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
          <li className="relative group">
            <button className="block w-full bg-purple-700 rounded-lg px-6 py-4 text-white font-semibold text-center transition-colors hover:bg-purple-900 focus:bg-purple-900">
              Project 2
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-72 bg-gray-900 text-white text-sm rounded-lg px-4 py-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10">
              Description for Project 2.
            </div>
          </li>
          <li className="relative group">
            <button className="block w-full bg-purple-700 rounded-lg px-6 py-4 text-white font-semibold text-center transition-colors hover:bg-purple-900 focus:bg-purple-900">
              Project 3
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-72 bg-gray-900 text-white text-sm rounded-lg px-4 py-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10">
              Description for Project 3.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
