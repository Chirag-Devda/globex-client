// 1. React and Hooks
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

// 2. Third-party libraries
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

// 3. API functions
import { LoginRequest } from "../../api/query/auth/authApi";

// 4. Components
import InputField from "../../components/common/InputFeilds";
import { login } from "../../features/auth/authSlice";

const Login = ({ role }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    toast.error("Please Login !");
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Determine API function based on role
  const loginMutation = useMutation({
    mutationKey: [`Login-${role}`],
    mutationFn: LoginRequest,
    onSuccess: (data) => {
      console.log(data.data[`${role}`]);
      dispatch(login(data.data[`${role}`]));
      toast.success(data.message);
      navigate("/");
    },
    onError: (error) => toast.error(error.message),
  });

  const onSubmit = async (data) => {
    loginMutation.mutate({ ...data, role });
  };

  return (
    <div className="bg-background min-h-screen flex items-center justify-center">
      <div className="form-container w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-6">
          {role === "owner" ? "Owner Login" : "User Login"}
        </h1>

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
            className="w-full bg-green-500 text-white p-3 rounded-lg font-semibold hover:bg-green-600 transition-all cursor-pointer"
            disabled={loginMutation.isPending}
          >
            {loginMutation.isPending ? "Logging in..." : "Login"}
          </button>
          {/* Register Link */}
          <p className="text-center text-gray-600">
            Don't have an account?{" "}
            <Link
              to={`/${role}/register`}
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

export default Login;
