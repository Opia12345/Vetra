import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-900 text-center p-6">
      <h1 className="text-9xl font-bold mb-6 text-blue-600">404</h1>
      <p className="text-2xl mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-lg text-blue-500 hover:text-blue-700 font-semibold transition duration-300">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
