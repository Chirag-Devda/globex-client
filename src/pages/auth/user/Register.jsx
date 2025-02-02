import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FiAlertCircle } from "react-icons/fi"; // Import warning icon
import { RegisterUser } from "../../../api/query/UserApi";

const UserRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await RegisterUser(data);
      console.log(response);
    } catch (error) {
      console.error("Sign-Up failed");
    }
  };

  return (
    <div className="bg-background min-h-screen flex items-center justify-center">
      <div className="form-container w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Register</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4"
        >
          {/* Full Name Field */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label htmlFor="fullname" className="font-medium">
                Full Name <span className="text-red-500">*</span>
              </label>
              {errors.fullname && (
                <span className="flex items-center text-red-600 text-sm ml-2">
                  <FiAlertCircle className="mr-1" />
                  {errors.fullname.message}
                </span>
              )}
            </div>
            <input
              type="text"
              {...register("fullname", {
                required: "Required",
                minLength: { value: 3, message: "Min 3 chars" },
                maxLength: { value: 25, message: "Max 25 chars" },
              })}
              placeholder="Enter your full name"
              className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 transition-all ${
                errors.fullname
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-primary"
              }`}
            />
          </div>

          {/* Email Field */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label htmlFor="email" className="font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              {errors.email && (
                <span className="flex items-center text-red-600 text-sm ml-2">
                  <FiAlertCircle className="mr-1" />
                  {errors.email.message}
                </span>
              )}
            </div>
            <input
              type="email"
              {...register("email", {
                required: "Required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email",
                },
              })}
              placeholder="Enter your email"
              className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 transition-all ${
                errors.email
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-primary"
              }`}
            />
          </div>

          {/* Password Field */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label htmlFor="password" className="font-medium">
                Password <span className="text-red-500">*</span>
              </label>
              {errors.password && (
                <span className="flex items-center text-red-600 text-sm ml-2">
                  <FiAlertCircle className="mr-1" />
                  {errors.password.message}
                </span>
              )}
            </div>
            <input
              type="password"
              id="new-password"
              {...register("password", {
                required: "Required",
                minLength: { value: 6, message: "Min 6 chars" },
                maxLength: { value: 10, message: "Max 10 chars" },
              })}
              placeholder="Enter your password"
              className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 transition-all ${
                errors.password
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-primary"
              }`}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-3 rounded-lg font-semibold hover:bg-green-600 transition-all"
          >
            Register
          </button>

          {/* Login Link */}
          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/user/login"
              className="text-primary font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default UserRegister;
