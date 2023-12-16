const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center relative w-[100vw] h-[200px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="146"
        height="145"
        className=" absolute"
      >
        <g fill="none" fillRule="evenodd" stroke="#CFD8EF">
          <circle cx="63" cy="82" r="62.5" />
          <circle cx="105" cy="41" r="40.5" />
        </g>
      </svg>
      <div className="flex flex-col justify-center items-center absolute gap-2">
        <h1 className=" text-2xl  text-[#293356] font-bold">
          Simple, traffic-based pricing
        </h1>
        <p className=" text-sm text-[#858FAD] ">
          Sign-up for our 30-day trial.
        </p>
        <p className=" text-sm text-[#858FAD]">No credit card required.</p>
      </div>
    </header>
  );
};
export default Header;
