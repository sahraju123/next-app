"use client";
import React, { useEffect, useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Navigation } from "./components";
import { GlobalProvider } from "./context/GlobalContext";

export default function Portfolio() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Ensure this runs only on the client
    if (typeof window !== "undefined") {
      console.log("Checking localStorage...");
      const storedToken = localStorage.getItem("token");

      if (storedToken) {
        console.log("Retrieved token from localStorage:", storedToken);
        setToken(storedToken);
      } else {
        console.log("No token found in localStorage.");
        setToken(null);
      }
    } else {
      console.log("Server-side rendering detected, localStorage unavailable.");
    }
  }, []);

  console.log("Token state:", token);

  return (
    <GlobalProvider>
      <NextUIProvider>
        <div className="bg-gray-900 text-white min-h-screen">
          <Navigation.InteractiveNavBar token={token} />
          <Navigation.Header />
          <section className="py-10 bg-gray-800">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-blue-400 mb-4">About Me</h2>
              <p className="text-gray-300 leading-relaxed">
                I’m Bijay Shrestha, a passionate professional with expertise in counseling, business studies, accounting, and emerging technologies.
              </p>
            </div>
          </section>
          <div className="container">
            <Navigation.Skills />
          </div>
          <div className="py-10 bg-gray-800 text-center">
            <Navigation.ProfessionalSkills />
          </div>
          <footer id="contact" className="py-10 bg-gray-900 text-center">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-blue-400 mb-4">Get in Touch</h2>
              <p className="text-gray-400">
                Email: shrprince4321@gmail.com | LinkedIn: https://www.linkedin.com/in/prince-shrestha-b25565179/
              </p>
            </div>
          </footer>
        </div>
      </NextUIProvider>
    </GlobalProvider>
  );
}
