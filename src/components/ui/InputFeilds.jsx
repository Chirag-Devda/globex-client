import React from "react";
import { FiAlertCircle } from "react-icons/fi";

const InputField = ({
  label,
  type,
  name,
  register,
  errors,
  validation,
  placeholder,
  autoComplete,
}) => (
  <div>
    <div className="flex items-center justify-between mb-1">
      <label htmlFor={name} className="font-medium">
        {label} <span className="text-red-500">*</span>
      </label>
      {errors[name] && (
        <span className="flex items-center text-red-600 text-sm">
          <FiAlertCircle className="mr-1" />
          {errors[name]?.message}
        </span>
      )}
    </div>
    <input
      type={type}
      autoComplete={autoComplete}
      {...register(name, validation)}
      placeholder={placeholder}
      className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 transition-all ${
        errors[name]
          ? "border-red-500 focus:ring-red-400"
          : "border-gray-300 focus:ring-primary"
      }`}
    />
  </div>
);

export default InputField;
