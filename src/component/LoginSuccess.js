import React from "react";
import { Link } from "react-router-dom";

function LoginSuccess() {
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
      <div className=" bg-[#801fa3] w-[340px] h-[340px] md:w-[480px] md:h-[360px] flex justify-center items-center text-white shadow-lg hover:shadow-2xl">
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-4xl">Login was successful</h1>
          <Link to="/" className="my-8 text-xl button text-center">
            Go to Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginSuccess;
