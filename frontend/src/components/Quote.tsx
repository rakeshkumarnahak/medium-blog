const Quote = () => {
  return (
    <div className="h-screen bg-gray-200 bg-opacity-60 flex flex-col justify-center ">
      <div className="flex justify-center">
        <div className="max-w-lg">
          <div className=" text-3xl font-bold ">
            "The customer service I recieved was exceptional. The support team
            went above and beyond to address my concern"
          </div>
          <div className="text-lg font-bold text-left mt-4">
            Jules Winnfield
          </div>
          <div className="text-slate-400 text-sm font-semibold text-left ">
            CEO, Acme Inc
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
