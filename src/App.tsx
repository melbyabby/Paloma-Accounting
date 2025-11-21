import { useState } from "react";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import Login from "./pages/Login";

type Page = "home" | "demo" | "login";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  // Make setCurrentPage available globally for navigation
  if (typeof window !== "undefined") {
    (window as any).navigateTo = setCurrentPage;
  }

  if (currentPage === "demo") {
    return <Demo />;
  }

  if (currentPage === "login") {
    return <Login />;
  }

  return <Home />;
}
