interface inputProps {
  label: string;
  placeholder?: string;
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const LabledInput = ({
  label,
  placeholder,
  onChange,
  value,
  type,
}: inputProps) => {
  return (
    <div className="pt-2">
      <label
        htmlFor={label}
        className="block mb-2 text-md font-semibold text-gray-900"
      >
        {label}
      </label>
      <input
        type={type}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default LabledInput;
