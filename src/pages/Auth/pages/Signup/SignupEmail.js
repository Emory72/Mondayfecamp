import React from "react";

export default function SignupEmail() {
  return (
    <div className="flex justify-center flex-1 min-h-screen">
      <div className="email-form w-3/5 p-6 sm:p-12 my-auto ">
        <a
          href="/"
          class="text-indigo-900 z-10 active 
        "
        >
          <img
            src="https://cdn.monday.com/images/logos/monday_logo_short.png"
            class="w-24 py-8 md:py-0 g-image"
          />
        </a>
        <h1 className="mb-4 mt-12 text-3xl">Create your account</h1>

        <form>
          <div>
            <label className="block ">Full name</label>
            <input
              placeholder="Enter your full name"
              className="w-full shadow-inner bg-gray-100 rounded-lg p-3 border-none block mt-1 w-full"
              id="name"
              type="text"
              name="name"
              required="required"
              autoFocus="autofocus"
            />
          </div>

          <div className="mt-4">
            <label className="block ">Password</label>
            <input
              placeholder="Enter at least 8 characters"
              className="w-full shadow-inner bg-gray-100 rounded-lg p-3 border-none block mt-1 w-full"
              id="password"
              type="password"
              name="password"
              required="required"
              autoComplete="new-password"
            />
          </div>

          <div className="mt-4">
            <label className="block ">Account name</label>
            <input
              placeholder="For example, company's or department's name"
              className="w-full shadow-inner bg-gray-100 rounded-lg p-3 border-none block mt-1 w-full"
              id="account name"
              type="account name"
              name="account name"
              required="required"
            />
          </div>

          <div className="flex justify-end mt-12">
            <button className="relative inline-flex items-center rounded-md text-white bg-indigo-600 hover:bg-indigo-700 py-3 px-10">
              Continue
              <svg
                className="px-4"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                className="w-5 h-5"
                aria-hidden="true"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
      <div className="email-background flex-1 bg-indigo-100  hidden lg:flex">
        <div
          className="w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/set-up-your-account.png)",
          }}
        ></div>
      </div>
    </div>
  );
}
