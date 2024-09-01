import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;

    axios
      .post(
        `http://localhost:3000/api/user/forgetPassword`,
        { email },
        { withCredential: true }
      )
      .then((res) => {
        if (res.data.status) {
          console.log("successfully login");
          navigate("/login");
        }
      });
  };
  return (
    <div className="mt-[20%]">
      <h2 className="text-5xl text-sky-600 text-center">FORGET PASSWORD</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="mt-1 mb-4 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          id=""
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-2 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Login
        </button>
        <p className="text-center">
          New ?{" "}
          <Link className="text-red-500" to="/login">
            login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default ForgetPassword;
