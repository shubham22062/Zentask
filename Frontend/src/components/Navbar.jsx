import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex">
          <img
            src="https://c8.alamy.com/comp/2A8G6MJ/to-do-icon-isolated-on-white-background-to-do-list-symbol-for-your-web-site-design-logo-app-ui-to-do-sign-flat-stytle-2A8G6MJ.jpg"
            alt="Logo"
            className="w-8 h-8"
          />
          <span className="text-xl font-bold text-black">TodoMaster</span>
        </div>

        <div className="flex gap-3">
          <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition">
            P
          </button>
          <button className="px-4 py-2 bg-gray-100 text-black rounded-2xl hover:bg-red-800">
            Signout
          </button>
        </div>
      </div>
    </nav>
  );
}
