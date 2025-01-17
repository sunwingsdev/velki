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
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import flag from "@/assets/bangladesh.png";
import { useAddUserMutation } from "@/redux/features/allApis/usersApi/usersApi";
import { useToasts } from "react-toast-notifications";
import SpinLoader from "@/components/loaders/SpinLoader";

const Register = () => {
  const [addUser] = useAddUserMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      username: "",
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
      validationCode: "",
    },
  });
  const [loading, setLoading] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { addToast } = useToasts();

  // Function to generate a random 4-digit verification code
  const generateVerificationCode = () => {
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    setVerificationCode(code);
  };

  // Generate code when the component mounts
  useEffect(() => {
    generateVerificationCode();
  }, []);

  // Handle form submission
  const onSubmit = async (data) => {
    // eslint-disable-next-line no-unused-vars
    const { confirmPassword, validationCode, ...userInfo } = data;
    if (data.validationCode === verificationCode) {
      try {
        setLoading(true);
        const { data, error } = await addUser(userInfo);
        if (data.insertedId) {
          addToast("Registration successful", {
            appearance: "success",
            autoDismiss: true,
          });
          setLoading(false);
          navigate("/");
        }
        if (error) {
          console.log(error);
        }
      } catch (error) {
        console.log(error.message);
        addToast(error.message, {
          appearance: "error",
          autoDismiss: true,
        });
        setLoading(false);
      }
    } else {
      addToast("Verification code does not match.", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="uppercase text-3xl font-medium text-center text-black mb-4">
            Sign Up
          </h2>

          {/* Username Input */}
          <div className="relative mb-4">
            <FaUser className="absolute left-2 text-2xl top-1/2 transform -translate-y-1/2" />
            <Input
              type="text"
              placeholder="Username"
              className="pl-12 pr-10 border border-black h-10 sm:h-12 rounded-lg focus:outline-none bg-transparent w-full placeholder:text-lg"
              {...register("username", {
                required: "Username is required.",
                minLength: {
                  value: 4,
                  message: "Username must be at least 4 characters long.",
                },
              })}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Password Input */}
          <div className="relative mb-4">
            <IoIosUnlock className="absolute left-2 text-3xl top-1/2 transform -translate-y-1/2" />
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="pl-12 pr-10 border border-black h-10 sm:h-12 rounded-lg focus:outline-none bg-transparent w-full placeholder:text-lg"
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long.",
                },
              })}
            />
            <div
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-2xl cursor-pointer text-black"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password Input */}
          <div className="relative mb-4">
            <IoIosUnlock className="absolute left-2 text-3xl top-1/2 transform -translate-y-1/2" />
            <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="pl-12 pr-10 border border-black h-10 sm:h-12 rounded-lg focus:outline-none bg-transparent w-full placeholder:text-lg"
              {...register("confirmPassword", {
                required: "Please confirm your password.",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match.",
              })}
            />
            <div
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-2xl cursor-pointer text-black"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* First Name Input */}
          <div className="relative mb-4">
            <FaUser className="absolute left-2 text-2xl top-1/2 transform -translate-y-1/2" />
            <Input
              type="text"
              placeholder="First Name"
              className="pl-12 pr-10 border border-black h-10 sm:h-12 rounded-lg focus:outline-none bg-transparent w-full placeholder:text-lg"
              {...register("firstName", {
                required: "First name is required.",
              })}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* Last Name Input */}
          <div className="relative mb-4">
            <FaUser className="absolute left-2 text-2xl top-1/2 transform -translate-y-1/2" />
            <Input
              type="text"
              placeholder="Last Name"
              className="pl-12 pr-10 border border-black h-10 sm:h-12 rounded-lg focus:outline-none bg-transparent w-full placeholder:text-lg"
              {...register("lastName", {
                required: "Last name is required.",
              })}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>

          {/* Phone Input */}
          <div className="relative mb-4">
            <div className="absolute left-2 flex items-center">
              <img src={flag} alt="Bangladesh" className="w-6 h-6 mr-2" />
              <span className="text-md">+880</span>
            </div>
            <Input
              type="text"
              placeholder="Phone Number"
              className="pl-16 pr-10 border border-black h-10 sm:h-12 rounded-lg focus:outline-none bg-transparent w-full placeholder:text-lg"
              {...register("phone", {
                required: "Phone number is required.",
              })}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Email Input */}
          <div className="relative mb-4">
            <MdEmail className="absolute left-2 text-2xl top-1/2 transform -translate-y-1/2" />
            <Input
              type="email"
              placeholder="Email"
              className="pl-12 pr-10 border border-black h-10 sm:h-12 rounded-lg focus:outline-none bg-transparent w-full placeholder:text-lg"
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[\w-.]+@[\w-]+\.[a-z]{2,}$/i,
                  message: "Invalid email address.",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Validation Code Input */}
          <div className="relative mb-4">
            <FaShield className="absolute left-2 text-2xl top-1/2 transform -translate-y-1/2" />
            <Input
              type="text"
              placeholder="Validation Code"
              className="pl-12 pr-10 border border-black h-10 sm:h-12 rounded-lg focus:outline-none bg-transparent w-full placeholder:text-lg"
              {...register("validationCode", {
                required: "Validation code is required.",
              })}
            />
            <div className="absolute right-2 flex items-center">
              <span className="text-black text-3xl font-bold">
                {verificationCode}
              </span>
              <FaRedo
                className="ml-2 cursor-pointer text-black"
                onClick={generateVerificationCode}
              />
            </div>
            {errors.validationCode && (
              <p className="text-red-500 text-sm mt-1">
                {errors.validationCode.message}
              </p>
            )}
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center gap-2 mb-4">
            <input
              type="checkbox"
              className="border-gray-300 rounded focus:ring-0"
            />
            <label htmlFor="rememberMe">
              I agree and understand the
              <Link
                to="/terms              and-conditions"
                className="text-blue-500 underline"
              >
                Terms & Conditions
              </Link>
            </label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-black text-white h-10 sm:h-12 rounded-lg"
          >
            {loading ? <SpinLoader /> : "Sign Up"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
