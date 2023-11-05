export type HamburgerProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Hamburger = ({
  isOpen = false,
  setIsOpen = () => {},
}: HamburgerProps) => {
  return (
    <div
      className="flex flex-col justify-around w-[40px] h-[40px] cursor-pointer"
      onClick={() => setIsOpen((prevValue) => !prevValue)}
    >
      <div
        className={`w-full h-1 bg-white rounded-md duration-500 ease-in-out ${
          isOpen ? "rotate-45 translate-y-[12px]" : ""
        }`}
      ></div>
      <div
        className={`w-full h-1 bg-white rounded-md duration-300 ease-in-out ${
          isOpen ? "opacity-0" : ""
        }`}
      ></div>
      <div
        className={`w-full h-1 bg-white rounded-md duration-500 ease-in-out ${
          isOpen ? "-rotate-45 -translate-y-[14px]" : ""
        }`}
      ></div>
    </div>
  );
};

export default Hamburger;
