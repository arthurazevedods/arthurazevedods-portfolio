import { FaGithub, FaXTwitter } from "react-icons/fa6";
//import { FiMail } from "react-icons/fi";

export default function Social() {
  return (
    <>
      {/* SVG para o clipPath */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5"></path>
          </clipPath>
        </defs>
      </svg>

      <div className="relative">
        <div className="absolute inset-0 bg-[#282a36]/80 backdrop-blur-xl rounded-2xl border border-[#44475a]/40 shadow-2xl" />
        <div className="relative flex items-end gap-x-3 p-3">
          {/* E-mail */}
          {/* 
          <div className="relative">
            <a
              href="mailto:arthurazevedods@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="E-mail"
            >
              <div
                style={{ clipPath: "url(#squircleClip)" }}
                className="w-14 h-14 bg-gradient-to-br from-[var(--foreground)] via-[#d02222] to-[#d02222] rounded-xl flex items-center justify-center shadow-lg border border-[#ff5555]/50 cursor-pointer transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
              >
                <FiMail className="h-8 w-8 text-[var(--foreground)]" />
              </div>
            </a>
          </div>
          */}
          {/* Github */}
          <div className="relative">
            <a
              href="https://github.com/arthurazevedods"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <div
                style={{ clipPath: "url(#squircleClip)" }}
                className="w-14 h-14 bg-gradient-to-br from-[#44475a] to-[#282a36] rounded-xl flex items-center justify-center shadow-lg border border-[#6272a4]/50 cursor-pointer transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
              >
                <FaGithub className="h-8 w-8 text-[#f8f8f2]" />
              </div>
            </a>
          </div>
          {/* LinkedIn */}
          <div className="relative">
            <a
              href="https://www.linkedin.com/in/arthurazevedods/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <div
                style={{ clipPath: "url(#squircleClip)" }}
                className="w-14 h-14 bg-gradient-to-br from-[#bd93f9] to-[#6272a4] rounded-xl flex items-center justify-center shadow-lg border border-[#bd93f9]/50 cursor-pointer transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-8 w-8 text-[#f8f8f2]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
            </a>
          </div>
          {/* Youtube */}
          {/**
          <div className="relative">
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <div
                style={{ clipPath: "url(#squircleClip)" }}
                className="w-14 h-14 bg-gradient-to-br from-[#ff5555] to-[#bd93f9] rounded-xl flex items-center justify-center shadow-lg border border-[#ff5555]/50 cursor-pointer transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-8 w-8 text-[#f8f8f2]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
            </a>
          </div>
           */}
          {/* Twitter/X */}
          <div className="relative">
            <a
              href="https://x.com/arthurazevedods"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <div
                style={{ clipPath: "url(#squircleClip)" }}
                className="w-14 h-14 bg-gradient-to-br from-[#8be9fd] to-[#6272a4] rounded-xl flex items-center justify-center shadow-lg border border-[#8be9fd]/50 cursor-pointer transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
              >
                <FaXTwitter className="h-8 w-8 text-[#282a36]" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}