import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-[#282a36] text-[#f8f8f2] items-center p-4 mt-4 border-t border-[#44475a]/40">
      <aside className="grid-flow-col items-center">
        <p>
          Copyright © {new Date().getFullYear()} - All rights reserved
        </p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        {/* Github */}
        <a
          href="https://github.com/arthurazevedods"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:scale-110 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-[#f8f8f2]"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
        </a>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/arthurazevedods/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:scale-110 transition"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6 text-[#f8f8f8]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
        {/* Medium */}
        <a
          href="https://www.medium.com/arthurazevedods/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Medium"
          className="hover:scale-110 transition"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6 text-[#f8f8f2]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.01 6.545c.007-.14-.04-.277-.131-.382L.161 3.73V3.5h6.225l4.807 10.516 4.227-10.516h5.98v.23l-1.7 1.627a.338.338 0 0 0-.128.324v13.59a.338.338 0 0 0 .128.324l1.66 1.627v.23h-8.457v-.23l1.72-1.677c.169-.169.169-.219.169-.324V7.98l-4.8 12.047h-.65L3.07 7.98v8.67c-.047.342.07.687.31.93l2.24 2.72v.23H.16v-.23l2.24-2.72c.238-.243.35-.584.31-.93V6.545z"/>
          </svg>
        </a>
        {/* Twitter/X */}
        <a
          href="https://x.com/arthurazevedods"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:scale-110 transition"
        >
          <FaXTwitter className="h-6 w-6 text-[#f8f8f8]" />
          
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
