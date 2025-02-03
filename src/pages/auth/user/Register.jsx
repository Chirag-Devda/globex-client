// 1. React and Hooks
import React from "react";
import { useForm } from "react-hook-form";

// 2. Third-party libraries
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

// 3. API functions
import { RegisterUser } from "../../../api/query/UserApi";

// 4. Components
import InputField from "../../../components/common/InputFeilds";

const UserRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  // Api Register Mutation
  const { mutate, isPending } = useMutation({
    mutationKey: ["Register"],
    mutationFn: RegisterUser,
    onSuccess: (data) => {
      console.log("Response:", data);
      toast.success(data.message);
    },
    onError: (error) => toast.error(error.message),
  });

  const onSubmit = async (data) => {
    const { confirmPassword, ...userData } = data;
    mutate(userData);
  };

  return (
    <div className="bg-background min-h-screen flex items-center justify-center">
      <div className="form-container w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Register</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4"
        >
          {/* Full Name Input */}
          <InputField
            label="Full Name"
            type="text"
            name="fullname"
            register={register}
            errors={errors}
            placeholder="Enter your full name"
            validation={{
              required: "Required",
              minLength: { value: 3, message: "Min 3 chars" },
              maxLength: { value: 25, message: "Max 25 chars" },
            }}
          />

          {/* Email Input */}
          <InputField
            label="Email"
            type="email"
            name="email"
            register={register}
            errors={errors}
            placeholder="Enter your email"
            validation={{
              required: "Required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email",
              },
            }}
          />

          {/* Password Input */}
          <InputField
            label="Password"
            type="password"
            name="password"
            register={register}
            errors={errors}
            placeholder="Enter your password"
            validation={{
              required: "Required",
              minLength: { value: 6, message: "Min 6 chars" },
              maxLength: { value: 10, message: "Max 10 chars" },
            }}
          />

          {/* Confirm Password Input */}
          <InputField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            register={register}
            errors={errors}
            placeholder="Confirm your password"
            validation={{
              required: "Required",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            }}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-3 rounded-lg font-semibold hover:bg-green-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isPending}
          >
            {isPending ? "Registering..." : "Register"}
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
