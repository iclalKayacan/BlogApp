import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle } from "react-icons/fa";

const LoginForm = ({ onForgotPassword }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">E-Posta</label>
        <input
          type="email"
          placeholder="E-posta"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary bg-blue-50"
        />
      </div>

      <div className="relative">
        <label className="block text-sm font-medium mb-1">Şifre</label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Şifre"
          className="w-full px-4 py-2 border rounded-lg pr-10 focus:outline-none focus:border-primary bg-blue-50"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-[38px] text-gray-500"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>

      <div className="text-right">
        <button
          type="button"
          onClick={onForgotPassword}
          className="text-sm text-gray-600 hover:text-primary"
        >
          Şifremi Unuttum
        </button>
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary"
      >
        GİRİŞ YAP
      </button>

      <div className="flex gap-3 mt-4">
        <button className="flex-1 border border-gray-300 py-3 rounded-lg flex items-center justify-center gap-2 text-sm hover:bg-gray-100 transition">
          <FaFacebook className="text-blue-600 text-lg" />
          <span className="text-gray-700">Facebook ile giriş yap</span>
        </button>
        <button className="flex-1 border border-gray-300 py-2 rounded-lg flex items-center justify-center gap-2 text-sm hover:bg-gray-100 transition">
          <FaGoogle className="text-red-600 text-lg" />
          <span className="text-gray-700">Google ile giriş yap</span>
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
