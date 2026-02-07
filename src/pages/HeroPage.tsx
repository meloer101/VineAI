import TextType from "@/components/TextType";
import NavBar from "@/components/NavBar";
import ArrowDown from "@/components/ArrowDown";
import essayImg from "@/assets/Essay.svg";
import LightRays from "@/components/LightRays";

const HeroPage = () => {
  return (
    <div className="relative w-full bg-black overflow-x-hidden">
      {/* ========== Hero 区：整屏，NavBar + TextType + h1 + 按钮共享 min-h-screen，LightRays 为背景 ========== */}
      <section className="relative flex min-h-screen flex-col">
        {/* 背景：LightRays 铺满整个 Hero 区 */}
        <div className="absolute inset-0 z-0">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            className="h-full w-full"
            pulsating={false}
            fadeDistance={1}
            saturation={1}
          />
        </div>

        {/* NavBar：fixed 固定在视口顶部，整页滚动时始终可点击 */}
        <NavBar className="z-20" />

        {/* 主内容：与 NavBar 同属 Hero，预留 NavBar 高度(pt-16)后居中占满剩余高度 */}
        <div className="relative z-10 flex min-h-screen flex-1 flex-col items-center justify-center gap-8 px-4 pb-16 pt-20">
          <TextType
            className="max-w-4xl text-center font-normal tracking-tight text-white text-hero-sm md:text-hero-lg"
            text={["Build your brand with AI", "We are a team of creators"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            deletingSpeed={50}
          />
          <h1 className="font- text-center text-hero-sm font-normal text-white md:text-hero-sm">
            Leave repetition to intelligence.
            <br />
            Return writing to thinking.
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              className="rounded-lg bg-blue-500 px-6 py-2.5 text-white transition-colors hover:bg-blue-600"
            >
              Start
            </button>
            <button
              type="button"
              className="rounded-lg border border-white/30 bg-transparent px-6 py-2.5 text-white transition-colors hover:bg-white/10"
            >
              GitHub
            </button>
          </div>
        </div>
      </section>

      {/* ========== One Sentence + Options 区 ========== */}
      <section
        id="how-it-works"
        className="relative z-10 bg-black py-16 md:py-24"
      >
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-4">
          <h2 className="font-adamina text-hero-sm italic text-white md:text-hero-md">
            One Sentence + few Options =?
          </h2>
          <p className="mt-8 text-hero-sm font-normal text-white">
            i want to write an essay about Anthropology
          </p>
          <div className="mt-16 flex justify-center">
            <ArrowDown
              variant="white"
              className="rotate-90 h-8 w-8 md:h-10 md:w-10"
            />
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center md:gap-8 gap-2">
            <button
              type="button"
              className="rounded-xl bg-white px-6 py-3 font-normal text-black text-hero-sm transition-opacity hover:opacity-90"
            >
              what topic ?
            </button>
            <button
              type="button"
              className="rounded-xl bg-white px-6 py-3 font-normal text-black text-hero-sm transition-opacity hover:opacity-90"
            >
              how many words
            </button>
            <button
              type="button"
              className="rounded-xl bg-white px-6 py-3 font-normal text-black text-hero-sm transition-opacity hover:opacity-90"
            >
              Any details ?
            </button>
          </div>
          <div className="mt-8 flex justify-center">
            <ArrowDown variant="white" />
          </div>

          {/* 文章内容卡片 */}
          <div className="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl bg-white p-6 shadow-xl md:p-8">
            <div className="absolute right-4 top-4 flex flex-col items-end gap-1 text-right">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-red-100 text-red-600">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </span>
              <span className="text-xs font-normal text-gray-500">
                Check for updates
              </span>
            </div>
            <div className="mb-4 flex justify-center">
              <img
                src={essayImg}
                alt=""
                className="max-h-48 w-auto object-contain md:max-h-64"
              />
            </div>
            <h3 className="text-left font-normal text-black text-hero-sm md:text-hero-md">
              Effect of optical and electronic structure on the photocatalytic
              activity of Al doped ZnO ALD thin films on glass fibers
            </h3>
            <p className="mt-3 text-left text-sm font-normal text-gray-700">
              Sena Gulecᵃ, Asife B. Aratª, Shafiqul Islamᵇ, Halil I. Akyildiz
              <sup>a, b, *</sup>
            </p>
            <p className="mt-1 text-left text-xs font-normal text-gray-600">
              ᵃ Bursa Uludag University, Department of Textile Engineering,
              Bursa 16059, Türkiye
              <br />ᵇ UNAM-National Nanotechnology Center, Bilkent University,
              Ankara 06800, Türkiye
            </p>
            <hr className="my-4 border-gray-200" />
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="text-sm font-normal uppercase text-gray-500">
                  Article info
                </h4>
                <p className="mt-2 text-sm font-normal text-gray-700">
                  <strong>Keywords:</strong> Al-doped ZnO, Atomic layer
                  deposition, Photocatalysis, Textiles.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-normal uppercase text-gray-500">
                  Abstract
                </h4>
                <p className="mt-2 text-sm font-normal leading-relaxed text-gray-700">
                  Photocatalytic water treatment using Al-doped ZnO thin films
                  deposited on glass fabric via ALD was studied.
                  Characterization by FESEM, XRD, XPS, UV-Vis and PL revealed
                  the influence of annealing on structure and optical
                  properties, with implications for wastewater treatment
                  applications.
                </p>
              </div>
            </div>
            <h4 className="mt-6 text-sm font-normal text-black">
              1. Introduction
            </h4>
            <div className="mt-2 columns-1 gap-6 text-sm font-normal leading-relaxed text-gray-700 md:columns-2">
              <p>
                Freshwater pollution from industrial textile dyestuffs remains a
                critical environmental challenge. Semiconductor photocatalysts
                offer a promising route for degrading organic pollutants under
                light irradiation.
              </p>
              <p>
                The composition and structure of catalyst materials strongly
                influence their efficiency. This work examines Al-doped ZnO thin
                films on glass fibers for use in photocatalytic wastewater
                treatment.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              className="flex items-center gap-2 rounded-xl border border-white bg-transparent px-6 py-3 font-normal text-hero-sm text-white transition-colors hover:bg-white/10"
            >
              quick start
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded-xl border border-white bg-transparent px-6 py-3 font-normal text-hero-sm text-white transition-colors hover:bg-white/10"
            >
              documentation
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ========== Thanks for Using 区 ========== */}
      <section id="thanks" className="relative z-10 bg-black py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-adamina text-center text-hero-md font-normal text-white">
            Thanks for Using !
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
            ].map((text, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white p-6 shadow-lg md:p-8"
              >
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gray-300" />
                <p className="text-left font-normal leading-relaxed text-black text-hero-sm">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Contact us 区 ========== */}
      <section id="contact" className="relative z-10 bg-black py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-adamina text-center text-hero-md font-normal text-white">
            contact us
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <p className="font-normal text-white text-hero-sm md:text-hero-md">
                we really appreciate your voice !
              </p>
              <p className="mt-2 font-normal text-hero-sm text-white/80">
                welcome to say your opinion and your priceless advice
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-zinc-900/90 p-6 backdrop-blur-sm md:p-8">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-normal text-white">
                    Billing Address
                  </label>
                  <p className="mt-1 text-xs font-normal text-gray-400">
                    The billing address associated with your payment method
                  </p>
                  <input
                    type="text"
                    className="mt-2 w-full rounded-lg border border-white/20 bg-zinc-800 px-4 py-2.5 text-white placeholder-gray-500 focus:border-white/40 focus:outline-none"
                    placeholder="Enter address"
                  />
                </div>
                <label className="flex items-center gap-2 text-sm font-normal text-white">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 rounded border-gray-500 bg-zinc-800 text-blue-500 focus:ring-blue-500"
                  />
                  Same as shipping address
                </label>
                <div>
                  <label className="block text-sm font-normal text-white">
                    Comments
                  </label>
                  <textarea
                    rows={4}
                    className="mt-2 w-full resize-none rounded-lg border border-white/20 bg-zinc-800 px-4 py-2.5 text-white placeholder-gray-500 focus:border-white/40 focus:outline-none"
                    placeholder="Add any additional comments"
                  />
                </div>
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    className="rounded-lg bg-zinc-700 px-5 py-2.5 text-sm font-normal text-white transition-colors hover:bg-zinc-600"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="rounded-lg border border-white/20 bg-transparent px-5 py-2.5 text-sm font-normal text-white transition-colors hover:bg-white/10"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Footer ========== */}
      <footer className="relative z-10 border-t border-white/10 bg-zinc-900/80 py-12 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                  aria-label="X"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                  aria-label="Discord"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </a>
              </div>
              <p className="text-sm font-normal text-white/80">
                联系我们: hi@verdent.ai
              </p>
              <p className="text-sm font-normal text-white/60">
                © 2026 Verdent AI, Inc. All rights reserved.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <h4 className="text-sm font-normal uppercase tracking-wide text-white/60">
                  产品
                </h4>
                <ul className="mt-3 space-y-2">
                  {[
                    "Verdent",
                    "Verdent for VS Code",
                    "Verdent for Jetbrains",
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm font-normal text-white/80 transition-colors hover:text-white"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-normal uppercase tracking-wide text-white/60">
                  资源
                </h4>
                <ul className="mt-3 space-y-2">
                  {["更新日志", "博客", "研究"].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm font-normal text-white/80 transition-colors hover:text-white"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-normal uppercase tracking-wide text-white/60">
                  公司
                </h4>
                <ul className="mt-3 space-y-2">
                  {["关于我们", "服务条款", "隐私政策"].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm font-normal text-white/80 transition-colors hover:text-white"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HeroPage;
