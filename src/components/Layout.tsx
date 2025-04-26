
import React from "react";
import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  const navigation = [
    { name: "Dashboard", path: "/" },
    { name: "Drivers", path: "/drivers" },
    { name: "Compare", path: "/compare" },
  ];

  return (
    <div className="min-h-screen bg-f1-black">
      <header className="border-b border-f1-darkgrey sticky top-0 z-10 bg-f1-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <span className="font-bungee text-2xl tracking-wider text-f1-red">F1</span>
                <span className="font-bungee ml-1 text-lg tracking-wider text-f1-silver">RETRO</span>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`py-2 text-sm font-medium transition ${
                    location.pathname === item.path
                      ? "text-f1-red border-b-2 border-f1-red"
                      : "text-f1-lightgrey hover:text-f1-silver"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      
      <footer className="border-t border-f1-darkgrey py-6 mt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-f1-lightgrey text-sm">
          <p>F1 Retro Cards & Stats - 2023-2024 Season Data</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
