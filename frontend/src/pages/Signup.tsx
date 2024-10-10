import SignupAuth from "../components/SignupAuth";
import Quote from "../components/Quote";

const Signup = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <SignupAuth />
      <div className="hidden lg:block">
        <Quote />
      </div>
    </div>
  );
};

export default Signup;
