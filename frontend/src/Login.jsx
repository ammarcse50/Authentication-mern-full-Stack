import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mt-[20%]">
    <h2 className="text-5xl text-sky-600 text-center">Login</h2>
    <form className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <input
        type="email"
        name="email"
        placeholder="email"
        className="mt-1 mb-4 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        id=""
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        className="mb-4 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        id=""
      />
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white p-2 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Login
      </button>
      <p>
        New ? <Link className="text-red-600" to="/signup">Register</Link>
      </p>
    </form>
  </div>
  );
};

export default Login;