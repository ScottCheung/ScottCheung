import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AutoText from "./AutoText";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const correctPassword = "rent";
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("密码错误，请重试");
    }
  };

  const [visible, setVisible] = React.useState(false);

  const handleChange = () => {
    setVisible(!visible);
  };
  if (isAuthenticated) {
    return (
      <div>
        <AutoText />
      </div>
    );
  }

  return (
    <div className="bg-slate-400">
      <section
        id="login"
        className="z-50 w-full h-full ease-in-out bg-gray-50 darrk:bg-gray-900"
      >
        <img
          src="https://a0.muscache.com/im/pictures/6481d1e8-a4d9-4f24-99e7-efccefb9132d.jpg?im_w=1200"
          className="absolute object-cover w-full h-full"
        ></img>
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 glass-effect">
          <div className="flex flex-col items-center justify-center mx-8 bg-white rounded-lg shadow sm:mx-4 lg:py-0">
            <div className="flex items-center justify-between duration-700 ease-in-out shadow">
              <img
                src="https://a0.muscache.com/im/pictures/6481d1e8-a4d9-4f24-99e7-efccefb9132d.jpg?im_w=1200"
                className="hidden object-cover h-full rounded-l-lg w-52 md:flex"
              ></img>
              <div className="flex flex-col w-96">
                <div className="flex items-center justify-center w-full">
                  <Link to="/" className="flex justify-center pt-8">
                    <span className="mr-2 logo vertical-center ">
                      <i className="fi fi-brands-airbnb"></i>
                    </span>
                    <h1>
                      <span className="self-center text-4xl font-semibold text-transparent vertical-center hide-on-small-screen sm:text-2xl whitespace-nowrap darrk:text-white bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                        AutoText
                      </span>
                    </h1>
                  </Link>
                </div>
                <div className="w-full darrk:border md:mt-0 sm:max-w-md xl:p-0 darrk:bg-gray-800 darrk:border-gray-700">
                  <div className="p-6 gap-y-4 md:gap-y-6 sm:p-8">
                    <h5 className="flex justify-start hidden text-xl font-bold leading-tight tracking-tight text-gray-400 darrk:text-white">
                      Login now
                    </h5>
                    <form
                      className="space-y-6 md:space-y-6"
                      onSubmit={handleSubmit}
                    >
                      <div>
                        <label
                          htmlFor="loginEmail"
                          className="block mb-2 text-sm font-medium text-gray-900 darrk:text-white"
                        >
                          Account
                        </label>
                        <input
                          // type='email'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 darrk:bg-gray-700 darrk:border-gray-600 darrk:placeholder-gray-400 darrk:text-white darrk:focus:ring-blue-500 darrk:focus:border-blue-500"
                          placeholder="Account"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="loginPassword"
                          className="block mb-2 text-sm font-medium text-gray-900 darrk:text-white"
                        >
                          Password
                        </label>
                        <div>
                          <div className="relative w-full">
                            <input
                              type={visible ? "text" : "password"}
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="pr-8 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 darrk:bg-gray-700 darrk:border-gray-600 darrk:placeholder-gray-400 darrk:text-white darrk:focus:ring-blue-500 darrk:focus:border-blue-500"
                              placeholder="Password"
                              required
                            />
                            <div
                              type="button"
                              className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                              onClick={handleChange}
                            >
                              {visible ? (
                                <i className="fi fi-sr-eye"></i>
                              ) : (
                                <i className="fi fi-rr-eye-crossed"></i>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="w-full  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center darrk:bg-blue-600 darrk:hover:bg-blue-700 darrk:focus:ring-blue-800"
                      >
                        Log in
                      </button>
                      <p className="hidden text-sm font-light text-gray-500 darrk:text-gray-400">
                        Do not have an account?{" "}
                        <Link
                          to="/register"
                          className="font-medium text-primary-600 hover:underline darrk:text-primary-500"
                        >
                          Register here
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
