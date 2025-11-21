import { Link } from "@remix-run/react";
import Login from "./login";
import Kitchen from "./admin/kitchen";
import Cafe from "./admin/kitchen/cafe";
import FoodWaste from "./admin/kitchen/foodwaste";
import { redirect } from "@remix-run/node";

export function loader() {
  return redirect("/login");
}

export default function Index() {
  return (
    <>
      <Login />
    </>
  );
}

