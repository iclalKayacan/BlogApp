import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const RegisterForm = () => {
  const [gender, setGender] = useState("");
  const [agreements, setAgreements] = useState({
    commercial: false,
    email: false,
    policy: false,
  });

  const toggleAgreement = (key) => {
    setAgreements((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <form className="space-y-4 text-sm">
      <div>
        <label className="block mb-1 font-medium">E-Posta</label>
        <input
          type="email"
          placeholder="E-posta"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary bg-blue-50"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Şifre</label>
        <input
          type="password"
          placeholder="Şifre"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary bg-blue-50"
        />
        <p className="text-xs text-gray-600 mt-1">
          Şifreniz en az 10 karakter olmalı. 1 büyük harf, 1 küçük harf ve rakam
          içermelidir.
        </p>
      </div>

      <div>
        <label className="block mb-1 font-medium">Cinsiyet (Opsiyonel)</label>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setGender("Kadın")}
            className={`flex-1 py-2 rounded border ${
              gender === "Kadın"
                ? "bg-primary text-white"
                : "bg-white text-gray-700"
            }`}
          >
            Kadın
          </button>
          <button
            type="button"
            onClick={() => setGender("Erkek")}
            className={`flex-1 py-2 rounded border ${
              gender === "Erkek"
                ? "bg-primary text-white"
                : "bg-white text-gray-700"
            }`}
          >
            Erkek
          </button>
        </div>
      </div>

      <div className="space-y-2 text-gray-700">
        <label className="flex items-start gap-2">
          <input
            type="checkbox"
            checked={agreements.commercial}
            onChange={() => toggleAgreement("commercial")}
          />
          <span>
            Tarafıma avantajlı teklifler sunulabilmesi amacıyla kişisel
            verilerimin işlenmesine ve paylaşılmasına{" "}
            <a href="#" className="text-blue-600 underline">
              açık rıza
            </a>{" "}
            veriyorum.
          </span>
        </label>
        <label className="flex items-start gap-2">
          <input
            type="checkbox"
            checked={agreements.email}
            onChange={() => toggleAgreement("email")}
          />
          <span>Tarafıma elektronik ileti gönderilmesini kabul ediyorum.</span>
        </label>
        <label className="flex items-start gap-2">
          <input
            type="checkbox"
            checked={agreements.policy}
            onChange={() => toggleAgreement("policy")}
          />
          <span>
            Kişisel verilerimin işlenmesine yönelik{" "}
            <a href="#" className="text-blue-600 underline">
              aydınlatma metnini
            </a>{" "}
            okudum ve anladım.
          </span>
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary"
      >
        ÜYE OL
      </button>

      <p className="text-xs text-center text-gray-500 mt-2">
        Üye Ol’a basarak{" "}
        <a href="#" className="text-blue-600 underline">
          Üyelik Koşulları
        </a>
        'nı kabul ediyorum.
      </p>

      <div className="flex gap-3 mt-4">
        <button className="flex-1 border border-gray-300 py-3 rounded-lg flex items-center justify-center gap-2 text-sm hover:bg-gray-100 transition">
          <FaFacebook className="text-blue-600 text-lg" />
          <span className="text-gray-700">Facebook ile kaydol</span>
        </button>
        <button className="flex-1 border border-gray-300 py-2 rounded-lg flex items-center justify-center gap-2 text-sm hover:bg-gray-100 transition">
          <FaGoogle className="text-red-600 text-lg" />
          <span className="text-gray-700">Google ile kaydol</span>
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
