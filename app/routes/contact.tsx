import type { Route } from "./+types/home";
import { Contact } from "~/contact/contact";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function ContactPage() {
  return (
    <>
      <Contact />
    </>
  );
}