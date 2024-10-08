import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials=true
  const handleSubmit = (e) => {
    console.log("clicked");
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
  const user = {email,password}
  console.log(user);

    axios
      .post(
        `http://localhost:3000/api/user/login`,
        { email, password }
      )
      .then((res) => {
        console.log(res);
        if (res.request.status===200) {
          console.log("successfully login");
          navigate("/");
        }
      });
  };

  return (
    <div className="mt-[20%]">
      <h2 className="text-5xl text-sky-600 text-center">Login</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
      >
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
          <Link className="text-red-500 font-bold " to="/forgetPassword">Forget Password?</Link>
        </p>
        <p>
          New ?{" "}
          <Link className="text-red-600" to="/signup">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
