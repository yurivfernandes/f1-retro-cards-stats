
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-f1-black">
      <div className="text-center">
        <h1 className="text-6xl font-bungee mb-4 text-f1-red">404</h1>
        <p className="text-xl text-f1-silver mb-6">Yellow flag! This page doesn't exist</p>
        <Link to="/" className="px-6 py-3 bg-f1-red text-white font-medium rounded-md hover:bg-f1-red/90 transition">
          Return to Pit Lane
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
