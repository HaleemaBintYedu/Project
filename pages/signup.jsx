import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

// import {useForm} from "react-hook-form"
// import {yupResolver} from "@hookform/resolvers/yup"
// import * as yup from "yup"
// //form validation
// const schema = yup.object().shape({
//     name: yup.string().required("Please fill the gap"),
//     email: yup.string().email().required("Please enter email"),
//     password: yup.string().min(4).max(32).required("Password required"),
//     confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
// })

const signup = () => {
  const [data, SetData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    SetData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = data;

    if (name == "" && email == "" && password == "" && confirmPassword == "") {
      setError("please provide all the information");
      return;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError("Please enter your email");
      return;
    }

    if (password !== confirmPassword) {
      setError("Your password do not match");
      return;
    }
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/register`,
        data
      );
      router.push("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
        <div class="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-20 h-20 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-center">Join us</h3>
        {error & <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div class="mt-4">
            <div>
              <label class="block" for="Name">
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                id="name"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
                                focus:ring-1 focus:ring-blue-600"
                onChange={handleChange}
                value={data.name}
              />
            </div>
            <div class="mt-4">
              <label class="block" for="email">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
                                focus:ring-1 focus:ring-blue-600"
                onChange={handleChange}
                value={data.email}
              />
            </div>
            <div class="mt-4">
              <label class="block">Password</label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 
                                focus:ring-blue-600"
                onChange={handleChange}
                value={data.password}
              />
            </div>
            <div class="mt-4">
              <label class="block">Confirm Password</label>
              <input
                type="password"
                placeholder="Password"
                id="confirmPassword"
                name="confirmPassword"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
                                focus:ring-1 focus:ring-blue-600"
                onChange={handleChange}
                value={data.confirmPassword}
              />
            </div>
            <span class="text-xs text-teal-400">Password must be same!</span>
            <div class="flex">
              <button
                type="submit"
                class="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg 
                    hover:bg-blue-900"
              >
                Create Account
              </button>
            </div>
            <div class="mt-6 text-grey-dark">
              Already have an account?
              <Link href="/login">
                <a class="text-blue-600 hover:underline" href="#">
                  Log in
                </a>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default signup;
