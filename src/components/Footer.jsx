import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto text-center space-y-2">
        <div className="space-x-4">
          <Link to="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:underline">
            Terms
          </Link>
        </div>
        <p>&copy; {new Date().getFullYear()} Kodder.in. All rights reserved.</p>
      </div>
    </footer>
  );
}
