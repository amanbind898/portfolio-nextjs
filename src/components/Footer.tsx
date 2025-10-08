export default function Footer() {
  return (
    <footer className="footer bg-purple-100 p-8 text-center">
      <div className="container">
        <p className="copyright text-[2rem] text-black mb-4">
          created with <span className="text-red-500 text-[3rem]">❤️</span> by me
        </p>
        <div className="social-icons mt-4 text-[3rem]">
          <a
            href="https://www.linkedin.com/in/aman-bind-306152289"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mr-4 text-gray-800 hover:text-blue-600 transition-colors"
          >
            <span className="text-2xl">💼</span>
          </a>
          <a
            href="https://github.com/amanbind898"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mr-4 text-gray-800 hover:text-gray-600 transition-colors"
          >
            <span className="text-2xl">🔗</span>
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mr-4 text-gray-800 hover:text-blue-400 transition-colors"
          >
            <span className="text-2xl">🐦</span>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mr-4 text-gray-800 hover:text-pink-500 transition-colors"
          >
            <span className="text-2xl">📷</span>
          </a>
        </div>
        <p className="copyright text-[1.6rem] text-gray-700 mt-4">
          &copy; 2024 Aman bind. All rights reserved.
        </p>
      </div>

      {/* Visitor counter */}
      <a href="https://visitorbadge.io/status?path=https%3A%2F%2Famanbind898.github.io%2F" className="mt-4 inline-block">
        <img
          src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Famanbind898.github.io%2F&countColor=%23ba68c8&style=flat&labelStyle=upper"
          alt="Visitor Badge"
          className="mx-auto"
        />
      </a>
    </footer>
  )
}
