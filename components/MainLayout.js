import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function MainLayout({ children, title = "Next App" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="keywords"
          content="next, next.js, nextjs, javascript, js, react, react.js"
        />
        <meta name="description" content="this is yt tutor for next.js" />
        <meta charSet="utf-8" />
      </Head>
      <nav>
        <Link href={"/"}>
          <a>Home</a>
        </Link>
        <Link href={"/about"}>
          <a>About</a>
        </Link>
        <Link href={"posts"}>
          <a>Posts</a>
        </Link>
      </nav>
      <main>{children}</main>
      <style jsx>{`
        nav {
          position: fixed;
          height: 60px;
          top: 0;
          left: 0;
          right: 0;
          background: darkblue;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        nav a {
          text-decoration: none;
          color: #fff;
        }
        main {
          margin-top: 60px;
          padding: 1rem;
        }
      `}</style>
    </>
  );
}
