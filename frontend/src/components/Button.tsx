interface buttonProps {
  label: string;
}

const Button = ({ label }: buttonProps) => {
  return (
    <button
      type="submit"
      className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm w-full py-2.5 me-2 mb-2 mt-4 "
    >
      {label}
    </button>
  );
};

export default Button;
