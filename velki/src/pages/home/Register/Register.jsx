import { Input } from "@/components/ui/input";
import {
  FaChevronLeft,
  FaTimes,
  FaEye,
  FaEyeSlash,
  FaUser,
  FaRedo,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaShield } from "react-icons/fa6";
import { IoIosUnlock } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import flag from "@/assets/bangladesh.png";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [inputCode, setInputCode] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Function to generate a random 4-digit verification code
  const generateVerificationCode = () => {
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    setVerificationCode(code);
  };

  // Generate code when the component mounts
  useEffect(() => {
    generateVerificationCode();
  }, []);

  // Function to go back to the previous route
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-white h-screen">
      <div className="relative bg-slate-600 px-3 py-3 text-white text-center">
        <FaChevronLeft
          className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-2 cursor-pointer"
          onClick={handleGoBack}
        />
        <p>Sign Up</p>
      </div>
      <img
        className="h-1/6 w-full"
        src="https://www.wickspin24.live/images/velki-bg-login.webp"
        alt=""
      />
      <div className="w-full p-2 sm:p-6 text-[#6F8898]">
        <form action="">
          <h2 className="uppercase text-3xl font-medium text-center text-black mb-4">
            Sign Up
          </h2>
          {/* username Input */}
          <div className="relative flex w-full items-center gap-1.5  rounded mb-4">
            <div className="w-full h-full relative">
              <FaUser className="absolute left-2 text-2xl top-1/2 transform -translate-y-1/2 " />
              <Input
                type="text"
                id="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Username"
                className="pl-12 pr-10 border border-black h-10 sm:h-12 rounded-lg focus:outline-none bg-transparent w-full placeholder:text-lg"
              />
              {email && (
                <div
                  className="bg-[#14805e] p-1 absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full"
                  onClick={() => setEmail("")}
                >
                  <FaTimes />
                </div>
              )}
            </div>
          </div>
          {/* Password Input */}
          <div className="relative w-full mb-4">
            <IoIosUnlock className="absolute text-3xl left-2 top-1/2 transform -translate-y-1/2 " />
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="pl-12 pr-10 border border-black h-10  sm:h-12 rounded-lg focus:outline-none bg-transparent w-full placeholder:text-lg"
            />
            <div
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-2xl cursor-pointer text-black"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          {/* Confirm Password Input */}
          <div className="relative w-full mb-4">
            <IoIosUnlock className="absolute text-3xl left-2 top-1/2 transform -translate-y-1/2 " />
            <Input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="pl-12 pr-10 border border-black h-10 sm:h-12 rounded-lg focus:outline-none bg-transparent w-full placeholder:text-lg"
            />
            <div
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-2xl cursor-pointer text-black"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          {/* First name Input */}
          <div className="relative flex w-full items-center gap-1.5  rounded mb-4">
            <div className="w-full h-full relative">
              <FaUser className="absolute left-2 text-2xl top-1/2 transform -translate-y-1/2 " />
              <Input
                type="text"
                id="firstName"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="First Name"
                className="pl-12 pr-10 border border-black h-10 sm:h-12 rounded-lg focus:outline-none bg-transparent w-full placeholder:text-lg"
              />
              {email && (
                <div
                  className="bg-[#14805e] p-1 absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full"
                  onClick={() => setEmail("")}
                >
                  <FaTimes />
                </div>
              )}
            </div>
          </div>
          {/* Last name Input */}
          <div className="relative flex w-full items-center gap-1.5  rounded mb-4">
            <div className="w-full h-full relative">
              <FaUser className="absolute left-2 text-2xl top-1/2 transform -translate-y-1/2 " />
              <Input
                type="text"
                id="lastName"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Last Name"
                className="pl-12 pr-10 border border-black h-10 sm:h-12 rounded-lg focus:outline-none bg-transparent w-full placeholder:text-lg"
              />
              {email && (
                <div
                  className="bg-[#14805e] p-1 absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full"
                  onClick={() => setEmail("")}
                >
                  <FaTimes />
                </div>
              )}
            </div>
          </div>

          {/* Phone number Input */}
          <div className="relative w-full mb-4">
            <div className="absolute left-2 text-md top-1/2 transform -translate-y-1/2 flex items-center">
              <img className="size-6" src={flag} alt="" />
              <p className="text-sm">+880</p>
            </div>
            <Input
              type="text"
              id="phone"
              value={email}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
              className="pl-16 pr-10 border border-black h-10 sm:h-12 rounded-lg focus:outline-none bg-transparent w-full placeholder:text-lg"
            />
          </div>
          {/* Email Input */}
          <div className="relative w-full mb-4">
            <MdEmail className="absolute left-2 text-2xl top-1/2 transform -translate-y-1/2 " />
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="pl-12 pr-10 border border-black h-10 sm:h-12 rounded-lg focus:outline-none bg-transparent w-full placeholder:text-lg"
            />
          </div>

          {/* Verification Code */}
          <div className="relative w-full mb-4">
            <FaShield className="absolute text-2xl left-2 top-1/2 transform -translate-y-1/2 " />
            <Input
              type="text"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              placeholder="Validation Code"
              className="pl-12 pr-10 h-10 sm:h-12 rounded-lg focus:outline-none border border-black bg-transparent w-full placeholder:text-lg"
            />
            <div className="absolute font-bold text-xl right-2 top-1/2 transform -translate-y-1/2 cursor-pointer flex items-center">
              <span className="text-black text-3xl">{verificationCode}</span>
              <FaRedo
                className="ml-2 text-black"
                onClick={generateVerificationCode}
              />
            </div>
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center justify-start my-2 px-4">
            <div className="flex items-center gap-2 mb-4">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="border-gray-300 rounded focus:ring-0"
              />
              <label htmlFor="rememberMe" className="">
                I agree and understand the{" "}
                <Link
                  to="/terms-conditions"
                  className="underline text-blue-500"
                >
                  Terms & Conditions
                </Link>
              </label>
            </div>
          </div>

          {/* Confirm Button */}
          <div className="flex items-center justify-center">
            <Button
              type="submit"
              className="bg-[#ffc800] text-black w-1/3 text-base py-6"
            >
              Confirm
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
