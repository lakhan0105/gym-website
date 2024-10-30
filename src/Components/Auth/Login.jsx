import React, { useState } from "react";
import FormRow from "../reUsables/FormRow";
import { useMyContext } from "../Context/ContextProvider";

function Login() {
  const { loginUser } = useMyContext();

  const [formData, setFormData] = useState({ email: "", password: "" });

  // handle formdata change
  function handleFormData(e) {
    const key = e.target.name;
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  // handleLogin
  function handleLogin(e) {
    e.preventDefault();
    loginUser(formData);
  }

  return (
    <section className="h-[calc(100vh-60px)] md:h-[calc(100vh-100px) mt-[60px] ">
      <form className="ring-1 ring-white/20 rounded text-white max-w-[350px] m-auto mt-[10%] py-5 px-7 bg-[#1a1a1a]">
        <h2 className="text-2xl font-semibold text-center mb-4">Welcome</h2>

        {/* EMAIL */}
        <FormRow
          name={"email"}
          label={"email"}
          type={"email"}
          handleFormData={handleFormData}
          formValue={formData.email}
        />

        {/* PASSWORD */}
        <FormRow
          name={"password"}
          label={"password"}
          type={"password"}
          handleFormData={handleFormData}
          formValue={formData.password}
        />

        {/* LOGIN/SUBMIT BTN */}
        <button
          className="w-full py-1 rounded ring-1 ring-white/20 mt-4 mb-4 bg-blue-600 hover:bg-blue-700"
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
    </section>
  );
}

export default Login;
