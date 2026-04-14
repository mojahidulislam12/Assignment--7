import { Link } from "react-router";
import { motion } from "motion/react";
const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-liner-to-br from-[#4F39F6] to-[#9514FA] px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-10 text-center max-w-lg w-full"
      >
        {/* 404 Text */}
        <h1 className="text-7xl font-extrabold text-black drop-shadow-lg">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-black mt-4">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p
          className="text-black
         mt-3"
        >
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Button */}
        <Link to="/">
          <button className="mt-6 px-6 py-3 bg-white text-[#4F39F6] font-semibold rounded-lg hover:scale-105 hover:bg-gray-100 transition-all duration-300 shadow-md">
            ⬅ Back to Home
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
