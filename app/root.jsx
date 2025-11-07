import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import { MetaFunction, LinksFunction } from "@remix-run/node";

import styles from './styles/app.css'
import Header from "./components/Header";
import style from './styles/style.css'



export const links = () => [{ rel: "stylesheet", href: styles }, { rel: "stylesheet", href: style }];

export const meta = () => ({
  charset: "utf-8",
  title: "Sous chef",
  viewport: "width=device-width, initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="font-dm9pt">
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

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-lg">Page Not Found</p>
      </div>
    );
  }

  return <h1>Error: {caught.status}</h1>;
}

