import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { MetaFunction, LinksFunction } from "@remix-run/node";

import styles from './styles/app.css'
import Header from "./components/Header";
import style from './styles/style.css'



export const links = () => [{ rel: "stylesheet", href: styles }, { rel: "stylesheet", href: style }];

export const meta = () => ({
  charset: "utf-8",
  title: "My Remix App",
  viewport: "width=device-width, initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body class="font-dm9pt">
        <Header />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <html>
      <head>
        <title>Error</title>
      </head>
      <body>
        <h1>Something went wrong</h1>
        <p>{error?.message}</p>
      </body>
    </html>
  );
}

