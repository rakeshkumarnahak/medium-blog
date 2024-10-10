import { Link } from "react-router-dom";

const AuthHeader = ({ type }: { type: string }) => {
  return (
    <div className="text-center px-10">
      <div className="text-3xl font-bold">Create an account</div>
      <div className="text-md text-slate-400 pt-1">
        {type === "signup"
          ? "Already have an account?"
          : "Don't have an account? "}
        <Link
          to={type === "signup" ? "/Signin" : "/Signup"}
          className="pl-2 underline"
        >
          {type === "signup" ? "Login" : "Signup"}
        </Link>
      </div>
    </div>
  );
};

export default AuthHeader;
