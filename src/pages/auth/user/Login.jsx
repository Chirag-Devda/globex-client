// 1. React and Hooks
import React from "react";
import { useForm } from "react-hook-form";

// 2. Third-party libraries
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

// 3. API functions
import { LoginUser } from "../../../api/query/UserApi";

// 4. Components
import InputField from "../../../components/common/InputFeilds";

const UserLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Api Login Mutation
  const { mutate, isPending } = useMutation({
    mutationKey: ["Login"],
    mutationFn: LoginUser,
    onSuccess: (data) => {
      console.log(data);
      toast.success(data.message);
    },
    onError: (error) => toast.error(error.message),
  });

  const onSubmit = async (data) => {
    mutate(data);
  };

  return (
    <div className="bg-background min-h-screen flex items-center justify-center">
      <div className="form-container w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4"
        >
          {/* Email Input */}
          <InputField
            label="Email"
            type="email"
            name="email"
            autoComplete="on"
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
            autoComplete="new-password"
            register={register}
            errors={errors}
            placeholder="Enter your password"
            validation={{
              required: "Required",
              minLength: { value: 6, message: "Min 6 chars" },
              maxLength: { value: 10, message: "Max 10 chars" },
            }}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-3 rounded-lg font-semibold hover:bg-green-600 transition-all"
            disabled={isPending}
          >
            {isPending ? "Loging in..." : "Login"}
          </button>

          {/* Register Link */}
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
