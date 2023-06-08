import React from "react";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <div className="flex justify-center items-center h-[100vh]  ">
      <div className="h-[340px] w-[340px] md:h-[360px] md:w-[480px] border border-gray-300 hover:shadow-lg rounded-lg">
        <div className="h-[60px] bg-[#801fa3] flex items-center justify-center">
          <h1 className="text-center text-2xl font-semibold text-white">
            Login Form
          </h1>
        </div>
        <div className="flex justify-center items-center h-[280px] md:h-[300px]">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Login;
