import velkiLogo from "../../assets/velki.webp";
import blogo from "../../assets/bg.png";
import llogo from "../../assets/cricket.webp";

const HomeControl = () => {
  return (
    <div className="bg-adminBackground min-h-screen">
      <h1 className="text-center text-xl font-bold bg-yellow-500 h-10">
        Home Control
      </h1>
      <div className="mx-4 bg-white">
        <div>
          <div className="flex flex-row px-3 items-center justify-between bg-black text-white h-12 ">
            <p className="text-xl">Upload Logo</p>
            <button className="text-xs pl-3 pr-2 py-1 text-black bg-yellow-500">
              +Add
            </button>
          </div>
          <div className=" relative pb-4 pl-16 my-3 border-r border-t border-b border-black w-3/6 lg:w-1/6  ">
            <div className="pt-4 pb-4">
              <img
                src={velkiLogo}
                alt=""
                className="w-auto lg:w-full lg:max-w-full h-6 lg:h-12"
              />
            </div>

            <input
              className="absolute top-0 left-0 w-4 lg:w-5 h-4"
              type="checkbox"
              name=""
              id=""
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className=" absolute top-0 right-0 w-5 lg:w-5 h-4 text-white  bg-red-500 bg- "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>

        <div>
          <div className="flex flex-row px-3 items-center justify-between bg-black text-white h-12 ">
            <p className="text-xl">Upload Slider Image</p>
            <button className="text-xs pl-3 pr-2 py-1 text-black bg-yellow-500">
              +Add
            </button>
          </div>
          <div className="flex flex-row space-x-2">
            <div className="relative border border-black w-2/6 h-40 my-3">
              {/* Image filling the entire border */}
              <img src={blogo} alt="" className="w-full h-full object-cover" />

              <input
                className="absolute top-0 left-0 w-6 h-5"
                type="checkbox"
                name=""
                id=""
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className=" absolute top-0 right-0 w-6 h-5 text-white  bg-red-500 bg- "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>

            <div className="relative border border-black w-2/6 h-40 my-3 overflow-hidden">
              {/* Image filling the entire container */}
              <img src={llogo} alt="" className="w-full h-full object-cover" />
              {/* SVG positioned at the top-left corner */}

              <input
                className="absolute top-0 left-0 w-6 h-5 "
                type="checkbox"
                name=""
                id=""
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className=" absolute top-0 right-0 w-6 h-5 text-white  bg-red-500 bg- "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row px-3 items-center justify-between bg-black text-white h-12 ">
            <p className="text-xl">Upload Notice</p>
            <button className="text-xs pl-3 pr-2 py-1 text-black bg-yellow-500">
              +Add
            </button>
          </div>
          <div className="flex flex-row px-3 items-center justify-between bg-white text-black h-12 ">
            <div className="flex items-center space-x-2">
              <input className="w-4 lg:w-3 h-3" type="checkbox" name="" id="" />
              <p className="text-sm">
                This is Demo Site Developed by Oracle Technology
              </p>
            </div>
            <button className="text-xs pl-3 pr-2 py-1 text-white bg-red-500">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeControl;
