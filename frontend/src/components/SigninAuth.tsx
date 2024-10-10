import { useState } from "react";
import AuthHeader from "./AuthHeader";
import LabledInput from "./LabledInput";
import { SigninInput } from "@rakeshknahak/common-assets-medium-blog";
import Button from "./Button";
import axios from "../axiosConfig.ts";
import { useNavigate } from "react-router-dom";

const SigninAuth = () => {
  const [inputData, setInputData] = useState<SigninInput>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  //TODO: Show error toast and also the zod type error near the input components

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axios.post("/user/signin", inputData).then((response) => {
        localStorage.setItem("accessToken", response.data.accessToken);
        navigate("/blogs");
        setInputData({
          email: "",
          password: "",
        });
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="flex justify-center">
        <div>
          <AuthHeader type="signin" />
          <form onSubmit={handleSubmit} className="pt-4">
            <LabledInput
              label="Email"
              placeholder="example@email.com"
              type="email"
              value={inputData.email}
              onChange={(e) =>
                setInputData((inputData) => ({
                  ...inputData,
                  email: e.target.value,
                }))
              }
            />
            <LabledInput
              label="Password"
              type="password"
              value={inputData.password}
              onChange={(e) =>
                setInputData((inputData) => ({
                  ...inputData,
                  password: e.target.value,
                }))
              }
            />
            <Button label="Signup" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SigninAuth;
