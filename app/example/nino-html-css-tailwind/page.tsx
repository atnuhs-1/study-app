import React from "react";

export default function Page() {
  return (
    <>
      <header className="h-16 border-b gap-6 flex items-center container">
        <a
          className="font-bold inline-block rounded-md px-2 py-1 hover:bg-zinc-200"
          href="#"
        >
          LOGO
        </a>{" "}
        {/* h1はページにひとつだけあるのが理想 タイトルなど*/}
        <span className="flex-1"></span> {/* ロゴを左寄せ、メニューを右寄せにするためのもの */}
        <nav className="">
          <ul className="flex gap-6">
            <li>
              <a
                href="#"
                className="hover:bg-zinc-100 rounded-md px-2 py-1 inline-block "
              >
                menu1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:bg-zinc-100 rounded-md px-2 py-1 inline-block "
              >
                menu1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:bg-zinc-100 rounded-md px-2 py-1 inline-block "
              >
                menu1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:bg-zinc-100 rounded-md px-2 py-1 inline-block "
              >
                menu1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:bg-zinc-100 rounded-md px-2 py-1 inline-block "
              >
                menu1
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="aspect-video flex flex-col justify-center from-sky-600 bg-gradient-to-tr to-pink-500">
          <div className="container">
            <h1 className="font-bold text-white text-4xl">
              スペシャルキャンペーン実施中
            </h1>
            <p className="mt-4 text-lg text-white">
              今すぐお問い合わせお待ちしてます
            </p>
            <a
              href="#"
              className="bg-white px-4 font-semibold py-2 inline-block shadow-lg rounded-full mt-6 hover:shadow-2xl transition duration-500"
            >
              お問い合わせ
            </a>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <h2 className="font-bold text-2xl text-center mb-4">
              サービスの特徴
            </h2>
            <p className="text-center text-zinc-600 mb-8">素敵なサービスです</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="aspect-video bg-zinc-200"></div>
              <div className="aspect-video bg-zinc-200"></div>
              <div className="aspect-video bg-zinc-200"></div>
              <div className="aspect-video bg-zinc-200"></div>
              <div className="aspect-video bg-zinc-200"></div>
              <div className="aspect-video bg-zinc-200"></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t pt-20 pb-10">
        <div className="container">
          <div className="grid grid-cols-4">
            <ul className="space-y-2"> {/* 一番上の子供以外二スペース */}
              <li>会社概要</li>
              <li>会社概要</li>
              <li>会社概要</li>
              <li>会社概要</li>
            </ul>
          </div>
          <p className="text-sm mt-6">&copy; nino</p>
        </div>
      </footer>
    </>
  );
}
