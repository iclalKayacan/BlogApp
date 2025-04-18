import React, { useState } from "react";

const ForgotPasswordForm = ({ onBack }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Şifre sıfırlama bağlantısı gönderildi:", email);
  };

  return (
    <div className=" p-6">
      <h2 className="text-2xl font-bold text-center text-textDark mb-2">
        Şifre Yenileme
      </h2>
      <p className="text-sm text-gray-600 text-center mb-6">
        Şifre yenileme bağlantısını gönderebilmemiz için e-posta adresinize
        ihtiyacımız var.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-textDark mb-1">
            E-Posta
          </label>
          <input
            type="email"
            placeholder="E-posta adresiniz"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg bg-blue-50 focus:outline-none focus:border-primary"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary hover:bg-secondary text-white py-2 rounded-lg font-semibold transition"
        >
          Şifremi Yenile
        </button>

        <button
          type="button"
          onClick={onBack}
          className="w-full border text-textDark border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
        >
          Önceki Sayfaya Dön
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
