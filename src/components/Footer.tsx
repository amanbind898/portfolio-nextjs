import Image from 'next/image'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full bg-purple-50 border-t border-purple-200 flex justify-center py-10">
      <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 py-10">
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <p className="text-2xl sm:text-3xl text-gray-900">
            created with <span className="inline-block align-[-2px] text-3xl" aria-hidden>❤️</span> by Aman
          </p>

          <nav aria-label="Social links" className="mt-2">
            <ul className="flex items-center justify-center gap-4 sm:gap-5">
              <li>
                <a
                  href="https://www.linkedin.com/in/aman-bind-306152289"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group inline-flex h-16 w-16 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition hover:text-blue-600 hover:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                >
                  <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden>
                    <path fill="currentColor" d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zm.02 6H2v11h3V9.5zM9 9.5H6v11h3v-6c0-1.66 1.34-3 3-3s3 .99 3 3v6h3v-6.5c0-3.04-2.46-5.5-5.5-5.5-1.28 0-2.47.44-3.4 1.18V9.5z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/amanbind898"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="group inline-flex h-16 w-16 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition hover:text-gray-900 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500/30"
                >
                  <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden>
                    <path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.2-3.37-1.2-.45-1.17-1.1-1.49-1.1-1.49-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05.8-.23 1.65-.35 2.5-.35.85 0 1.7.12 2.5.35 1.9-1.32 2.74-1.05 2.74-1.05.56 1.4.21 2.44.11 2.7.64.72 1.02 1.64 1.02 2.76 0 3.95-2.34 4.82-4.57 5.08.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.05 10.05 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="group inline-flex h-16 w-16 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition hover:text-blue-500 hover:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                >
                  <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden>
                    <path fill="currentColor" d="M18.244 3H21l-6.56 7.49L22 21h-5.78l-4.52-5.46L6.4 21H3.64l6.98-7.97L2 3h5.86l4.08 4.9L18.24 3h.004zM8.3 4.6H5.92l9.88 12.1h2.38L8.3 4.6z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="group inline-flex h-16 w-16 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition hover:text-pink-600 hover:border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500/30"
                >
                  <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden>
                    <path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 .001 7.001A3.5 3.5 0 0 0 12 9.5zM18.5 6A1.5 1.5 0 1 1 17 7.5 1.5 1.5 0 0 1 18.5 6z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>

          <p className="text-xl text-gray-600">
            © {year} Aman Bind. All rights reserved.
          </p>

          <figure className="mt-2">
            <a
              href="https://visitorbadge.io/status?path=https%3A%2F%2Famanbind898.github.io%2F"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitor badge details"
              className="inline-block"
            >
              <Image
                src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Famanbind898.github.io%2F&countColor=%23ba68c8&style=flat&labelStyle=upper"
                alt="Visitors to amanbind898.github.io"
                width={140}
                height={28}
                sizes="140px"
                loading="lazy"
                className="mx-auto rounded"
              />
            </a>
          </figure>
        </div>
      </div>
    </footer>
  )
}
