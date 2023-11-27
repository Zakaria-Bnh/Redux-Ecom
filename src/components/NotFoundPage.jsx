import { FaRegSadTear } from "react-icons/fa";
const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-lg text-gray-600">
          Oops! The page you are looking for might be in another galaxy.
        </p>
        <FaRegSadTear className="text-[4rem] text-gray-500 mt-8 mx-auto" />
      </div>
    </div>
  );
};

export default NotFoundPage;
