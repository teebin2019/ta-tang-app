
export default function Nav() {
  return (
    <nav className="bg-gradient-to-r from-orange-500 to-red-500 shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3">
          <span className="text-3xl">🍜</span>
          <span className="self-center text-2xl font-bold text-white drop-shadow-lg">
            อาหารท่าฉาง
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg md:hidden hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-white font-semibold hover:text-orange-100 transition-colors"
              >
                หน้าแรก
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block py-2 px-3 text-white font-semibold hover:text-orange-100 transition-colors"
              >
                เกี่ยวกับ
              </a>
            </li>
            <li>
              <a
                href="/food"
                className="block py-2 px-3 text-white font-semibold hover:text-orange-100 transition-colors"
              >
                อาหาร
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block py-2 px-3 text-white font-semibold hover:text-orange-100 transition-colors"
              >
                ติดต่อ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
