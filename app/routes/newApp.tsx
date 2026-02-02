import type { Route } from "./+types/home";
import { News } from "~/news/news";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function newApp() {
  return (
    <>
      <News />
    </>
  );
}