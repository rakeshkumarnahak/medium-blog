import Quote from "../components/Quote";
import SigninAuth from "../components/SigninAuth";

const Signin = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <SigninAuth />
      <div className="hidden lg:block">
        <Quote />
      </div>
    </div>
  );
};

export default Signin;
