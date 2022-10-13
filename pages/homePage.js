import React from "react";
import Link from "next/link";
import Aboutus from "./about/aboutus";

function HomePage() {
  return (
    <div>
      <nav>
        <div class="container mx-auto px-6 py-2 flex justify-between items-center">
          <Link href="/">
            <a class="font-bold text-2xl lg:text-4xl">CAL MANAGEMENT</a>
          </Link>
          <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
              <svg
                class="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div class="hidden lg:block">
            <ul class="inline-flex">
              <Link href="">
                <a class="px-4 hover:text-gray-800">Pricing</a>
              </Link>
              <Link href="">
                <a class="px-4 hover:text-gray-800">Premium</a>
              </Link>
              <Link href="">
                <a class="px-4 hover:text-gray-800">Contact</a>
              </Link>
              <Link href="/about/aboutus">
                <a class="px-4 hover:text-gray-800">About</a>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      <div class=" flex py-20 bg-slate-500 items-center justify-center">
        <div class=" mx-auto px-6  ">
          <h2 class="text-4xl font-bold mb-2 text-white">Create event</h2>
          <h3 class="text-2xl mb-8 text-gray-200">
            Smart event anywhere you go.
          </h3>

          <Link href="/login">
            <button class="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
              Get started
            </button>
          </Link>
        </div>
      </div>
      <footer class="text-center text-white bg-[#caced1]">
        <div class="container p-6">
          <div class="grid lg:grid-cols-6 md:grid-cols-3 gap-4">
            <div class="lg:mb-0 mb-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
                class="w-full rounded-md shadow-lg"
              />
            </div>
            <div class="lg:mb-0 mb-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp"
                class="w-full rounded-md shadow-lg"
              />
            </div>
            <div class="lg:mb-0 mb-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp"
                class="w-full rounded-md shadow-lg"
              />
            </div>
            <div class="lg:mb-0 mb-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp"
                class="w-full rounded-md shadow-lg"
              />
            </div>
            <div class="lg:mb-0 mb-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp"
                class="w-full rounded-md shadow-lg"
              />
            </div>
            <div class="lg:mb-0 mb-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp"
                class="w-full rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>

        <div class="text-center bg-[rgba(0, 0, 0, 0.2)]">
          © 2022 Copyright:
          <a class="text-white" href="/">
            Cal management
          </a>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
