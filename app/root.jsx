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



export const links = () => [{ rel: "stylesheet", href: styles }];

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
      <body>
        <Header/>
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

