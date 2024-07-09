const Headline = ({ text }: { text: string }) => {
  return (
    <div className="">
      <h1 className="text-4xl text-center uppercase text-slate-200">
        {text}
      </h1>
      <h1 className="text-4xl text-center uppercase   -mt-11 mr-2">
        {text}
      </h1>
    </div>
  );
};
export default Headline;
