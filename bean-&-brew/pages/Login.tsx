// src/pages/Login.tsx
import React from "react";

const Login: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login form submitted (UI only)");
  };

  return (

    <div className="min-h-screen bg-gradient-to-b from-coffee-950 via-coffee-900 to-coffee-950 pt-24 pb-16">
      <div className="max-w-md mx-auto px-4">
        <div className="w-full flex flex-col items-center gap-8">
          <div className="w-full flex flex-col items-center justify-center gap-8 rounded-2xl bg-white/95 p-8 md:p-10 shadow-2xl">
            <div className="flex flex-col gap-3 text-center">
              <p className="text-text-dark text-4xl font-black leading-tight tracking-[-0.033em]">
                Welcome Back
              </p>
              <p className="text-text-muted text-base font-normal leading-normal">
                Login to continue to Bean &amp; Brew
              </p>
            </div>

            <form className="flex w-full flex-col gap-6" onSubmit={handleSubmit}>
              {/* Email */}
              <label className="flex flex-col w-full">
                <p className="text-text-dark text-base font-medium leading-normal pb-2">
                  Email Address
                </p>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-dark focus:outline-0 focus:ring-0 border border-border-light bg-background-light focus:border-primary h-14 placeholder:text-text-muted p-[15px] text-base font-normal leading-normal"
                  placeholder="Enter your email"
                  type="email"
                />
              </label>

              {/* Password */}
              <label className="flex flex-col w-full">
                <p className="text-text-dark text-base font-medium leading-normal pb-2">
                  Password
                </p>
                <div className="flex w-full flex-1 items-stretch rounded-lg">
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-dark focus:outline-0 focus:ring-0 border border-border-light bg-background-light focus:border-primary h-14 placeholder:text-text-muted p-[15px] rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
                    placeholder="Enter your password"
                    type="password"
                  />
                  <div className="text-text-muted flex border border-border-light bg-background-light items-center justify-center px-4 rounded-r-lg border-l-0">
                    {/* أيقونة شكلية */}
                    <span className="material-symbols-outlined text-2xl">
                     
                    </span>
                  </div>
                </div>
              </label>

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <input
                    className="h-5 w-5 rounded border-border-light border-2 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 focus:border-primary focus:outline-none"
                    id="remember-me"
                    type="checkbox"
                  />
                  <label
                    className="text-text-dark text-base font-normal leading-normal cursor-pointer"
                    htmlFor="remember-me"
                  >
                    Remember me
                  </label>
                </div>
                <button
                  type="button"
                  className="text-primary text-base font-medium leading-normal hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              {/* Sign In button – شكلي فقط */}
              <button
                className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-4 bg-primary text-white text-lg font-bold leading-normal tracking-[0.015em]"
                type="submit"
              >
                <span className="truncate">Sign In</span>
              </button>
            </form>
          </div>

          <p className=" text-sm">
            Don’t have an account?{" "}
            <button className="font-bold text-primary hover:underline">
              Create one
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;