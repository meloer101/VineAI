import { useState } from "react";

const AcmeLogo = () => (
  <svg fill="none" height="36" viewBox="0 0 32 32" width="36" className="shrink-0">
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

const navLinks = [
  { label: "Features", href: "#how-it-works" },
  { label: "Customers", href: "#thanks", active: true },
  { label: "Integrations", href: "#contact" },
];

const menuItems = [
  { label: "Features", href: "#how-it-works" },
  { label: "Customers", href: "#thanks" },
  { label: "Integrations", href: "#contact" },
  { label: "Login", href: "#" },
];

interface NavBarProps {
  className?: string;
}

export default function NavBar({ className = "" }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 w-full bg-black/60 backdrop-blur-xl border-b border-white/10 ${className}`}
      role="navigation"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* 移动端：汉堡 + Logo */}
        <div className="flex min-w-0 flex-1 items-center gap-3 md:flex-initial md:flex-none">
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white/90 hover:bg-white/10 hover:text-white md:hidden"
            aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
            aria-expanded={menuOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <a
            href="#"
            className="flex items-center gap-2 text-white no-underline"
          >
            <AcmeLogo />
            <span className="font-adamina font-normal tracking-tight">ACME</span>
          </a>
        </div>

        {/* 桌面端：导航链接 */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map(({ label, href, active }) => (
            <a
              key={label}
              href={href}
              className={`text-sm font-normal no-underline transition-colors ${
                active
                  ? "text-blue-400"
                  : "text-white/90 hover:text-white"
              }`}
              aria-current={active ? "page" : undefined}
            >
              {label}
            </a>
          ))}
        </div>

        {/* 右侧：Login + Sign Up */}
        <div className="flex shrink-0 items-center gap-4">
          <a
            href="#"
            className="hidden text-sm font-normal text-white/90 no-underline hover:text-white md:inline-block"
          >
            Login
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-normal text-white no-underline hover:bg-blue-500 transition-colors"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* 移动端下拉菜单 - iOS 磨砂玻璃 */}
      {menuOpen && (
        <div
          className="absolute left-0 right-0 top-full border-b border-white/10 bg-black/70 backdrop-blur-xl md:hidden"
          role="dialog"
          aria-label="导航菜单"
        >
          <div className="flex flex-col gap-1 px-4 py-4">
            {menuItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="rounded-lg px-4 py-3 text-base font-normal text-white/90 no-underline hover:bg-white/10 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href="#"
              className="mt-2 rounded-lg bg-blue-600 px-4 py-3 text-center text-base font-normal text-white no-underline hover:bg-blue-500 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}


