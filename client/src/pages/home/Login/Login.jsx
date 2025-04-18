import { useForm } from "react-hook-form";
import {
  FaChevronLeft,
  FaEye,
  FaEyeSlash,
  FaUser,
  FaRedo,
} from "react-icons/fa";
import { FaShield } from "react-icons/fa6";
import { IoIosUnlock } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  useLazyGetAuthenticatedUserQuery,
  useLoginUserMutation,
} from "@/redux/features/allApis/usersApi/usersApi";
import SpinLoader from "@/components/loaders/SpinLoader";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/redux/slices/authSlice";
import { useToasts } from "react-toast-notifications";
import image from "@/assets/login.png";

const Login = () => {
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const [getUser] = useLazyGetAuthenticatedUserQuery();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const navigate = useNavigate();
  const { addToast } = useToasts();

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  // Watch form values
  const watchInputCode = watch("inputCode", ""); // Watch validation code input

  // Function to generate a random 4-digit verification code
  const generateVerificationCode = () => {
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    setVerificationCode(code);
  };

  // Generate code when the component mounts
  useEffect(() => {
    generateVerificationCode();
  }, []);

  // Form submission handler
  const onSubmit = async (data) => {
    const { username, password } = data;
    try {
      const { data: loginData } = await loginUser({ username, password });

      if (loginData.token) {
        const { data: userData } = await getUser(loginData.token);
        dispatch(setCredentials({ token: loginData.token, user: userData }));
        addToast("Login successful", {
          appearance: "success",
          autoDismiss: true,
        });

        if (userData?.user?.role !== "admin") {
          navigate("/");
        } else {
          navigate("/dashboard");
        }
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      addToast("Provide valid username and password", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  // Check if login button should be enabled
  const isLoginDisabled = !(watchInputCode === verificationCode);

  return (
    <div className="bg-white h-screen">
      <div className="relative bg-slate-600 px-3 py-3 text-white text-center">
        <FaChevronLeft
          className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-2 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <p>Login</p>
      </div>
      <img className="h-2/5 w-full" src={image} alt="" />
      <div className="w-full sm:p-6 text-[#6F8898]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="uppercase text-3xl font-medium text-center text-black">
            LOGIN
          </h2>

          {/* Username Input */}
          <div className="relative flex w-full items-center gap-1.5 px-4 py-2 rounded mb-4">
            <div className="w-full h-full relative">
              <FaUser className="absolute left-2 text-2xl top-1/2 transform -translate-y-1/2" />
              <Input
                type="text"
                {...register("username", {
                  required: "Username is required",
                  pattern: {
                    message: "Enter a valid username",
                  },
                })}
                placeholder="Username"
                className="pl-12 pr-10 border border-black h-12 rounded-lg focus:outline-none bg-transparent w-full placeholder:text-lg"
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>
          </div>

          {/* Password Input */}
          <div className="relative flex w-full items-center gap-1.5 px-4 py-2 rounded mb-4">
            <div className="w-full h-full relative">
              <IoIosUnlock className="absolute text-3xl left-2 top-1/2 transform -translate-y-1/2" />
              <Input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
                placeholder="Password"
                className="pl-12 pr-10 border border-black h-12 rounded-lg focus:outline-none bg-transparent w-full placeholder:text-lg"
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
          </div>

          {/* Verification Input */}
          <div className="relative flex w-full items-center gap-1.5 px-4 py-2 rounded mb-4">
            <div className="w-full h-full relative">
              <FaShield className="absolute text-2xl left-2 top-1/2 transform -translate-y-1/2" />
              <Input
                type="text"
                {...register("inputCode", {
                  required: "Validation code is required",
                })}
                placeholder="Validation Code"
                className="pl-12 pr-10 h-12 rounded-lg focus:outline-none border border-black bg-transparent w-full placeholder:text-lg"
              />
              <div className="absolute font-bold text-xl right-2 top-1/2 transform -translate-y-1/2 cursor-pointer flex items-center">
                <span className="text-black text-3xl">{verificationCode}</span>
                <FaRedo
                  className="ml-2 text-black"
                  onClick={() => {
                    generateVerificationCode();
                    reset({ inputCode: "" }); // Reset the validation code input
                  }}
                />
              </div>
              {errors.inputCode && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.inputCode.message}
                </p>
              )}
            </div>
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center justify-start my-2 px-4">
            <div className="flex items-center gap-2 mb-4">
              <input
                type="checkbox"
                {...register("rememberMe")}
                className="border-gray-300 rounded focus:ring-0"
              />
              <label htmlFor="rememberMe" className="text-lg">
                Terms and Conditions
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-center">
            <Button
              type="submit"
              className={`bg-[#ffc800] text-black w-1/3 text-base py-6 ${
                isLoginDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoginDisabled}
            >
              {" "}
              {isLoading ? <SpinLoader /> : "Login"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
