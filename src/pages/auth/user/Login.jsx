import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FiAlertCircle } from "react-icons/fi"; // Import warning icon
import { LoginUser } from "../../../api/query/UserApi";

const UserLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await LoginUser(data);
      console.log(response);
    } catch (error) {
      console.error("Login failed");
    }
  };

  return (
    <div className="bg-background min-h-screen flex items-center justify-center">
      <div className="form-container w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4"
        >
          {/* Email feild */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-1">
              <label className="font-medium" htmlFor="email">
                Email <span className="text-red-500"> *</span>
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
              {...register("email", { required: "Required" })}
              className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 transition-all ${
                errors.email
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-primary"
              }`}
              placeholder="Enter your email"
            />
          </div>

          {/* Password feild */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-1">
              <label className="font-medium" htmlFor="password">
                Password <span className="text-red-500">*</span>
              </label>
              {errors.password && (
                <span className="flex items-center text-red-600 text-sm ml-2">
                  <FiAlertCircle className="text-red-500 mr-1" />
                  {errors.password.message}
                </span>
              )}
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              autoComplete="new-password"
              {...register("password", {
                required: "Required",
                minLength: { value: 6, message: "Min 6 chars" },
                maxLength: { value: 10, message: "Max 10 chars" },
              })}
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
            Login
          </button>

          {/* Login Link */}
          <p className="text-center text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/user/register"
              className="text-primary font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
