import React from "react";

export default function Signup() {
  return (
    <div className="flex justify-center flex-1 min-h-screen">
      <div className="w-3/5 my-auto">
        <div>
          <h1 className="mx-auto text-center text-2xl xl:text-3xl">
            Welcome to Monday.com
          </h1>
        </div>
        <div className="mt-2 flex flex-col items-center text-center">
          <p className="">Get started - it's free. No credit card needed.</p>
          <div className="w-full flex-1 mt-8">
            <div className="flex flex-col items-center">
              <button className="w-full max-w-xs shadow border border-gray-300 rounded-md py-2 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline ">
                <div className="bg-white rounded-full">
                  <svg className="w-4" viewBox="0 0 533.5 544.3">
                    <path
                      d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                      fill="#4285f4"
                    />
                    <path
                      d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                      fill="#34a853"
                    />
                    <path
                      d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                      fill="#fbbc04"
                    />
                    <path
                      d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                      fill="#ea4335"
                    />
                  </svg>
                </div>
                <span className="ml-4">Continue with Google</span>
              </button>
            </div>

            <div className="my-6 border-b text-center">
              <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide bg-white transform translate-y-1/2">
                Or
              </div>
            </div>

            <div className="mx-auto max-w-xs">
              <input
                className="w-full px-8 py-2 rounded-md bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="email"
                placeholder="name@company.com"
              />

              <button className="mt-5 tracking-wide bg-blue-500 text-gray-100 w-full py-2 rounded-md hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                <span className="ml-3">Continue</span>
              </button>
              <p className="mt-6 text-xs text-gray-600 text-center">
                By proceeding, you agree to the{" "}
                <a
                  href="#"
                  className="border-b border-gray-500 border-dotted text-blue-500"
                >
                  Terms of Service
                </a>{" "}
                and its
                <a
                  href="#"
                  className=" border-b border-gray-500 border-dotted text-blue-500"
                >
                  {" "}
                  Privacy Policy
                </a>
              </p>
              <p className="mt-6 text-xs text-center font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <a
                  className="text-xs text-blue-600 hover:underline dark:text-blue-500"
                  href="/sign-up"
                >
                  Log in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-indigo-100 text-center hidden lg:flex overflow-hidden">
        <div
          className=" w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/welcome-to-monday.png)",
          }}
        ></div>
      </div>
    </div>
  );
}
