import React, { useState } from "react";
import { FaSearch, FaRegUser, FaSun, FaPenNib } from "react-icons/fa";
import { Link } from "react-router-dom";
import LoginForm from "../auth/LoginForm";
import RegisterForm from "../auth/RegisterForm";
import ForgotPasswordForm from "../auth/ForgotPasswordForm";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginTab, setIsLoginTab] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
    setShowForgotPassword(false);
    setIsLoginTab(true);
  };

  return (
    <>
      <header className="bg-backgroundLight dark:bg-backgroundDark shadow-md">
        <div className="container mx-auto px-8 py-6 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <FaPenNib className="text-3xl text-primary" />
            <h1 className="text-2xl font-bold text-textDark dark:text-textLight">
              Blog System
            </h1>
          </Link>

          <nav>
            <ul className="flex space-x-6 text-base text-textDark dark:text-textLight">
              <li>
                <Link to="/" className="hover:text-primary">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-primary">
                  Bloglar
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/authors" className="hover:text-primary">
                  Yazarlar
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary">
                  İletişim
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative flex items-center">
              <FaSearch className="absolute left-3 text-gray-500" />
              <input
                type="text"
                placeholder="Ara..."
                className="bg-inputGray text-gray-800 rounded-full pl-10 pr-4 py-2 focus:outline-none"
              />
            </div>

            <Link
              to="/create"
              className="bg-primary hover:bg-secondary text-white px-5 py-3 rounded-full flex items-center space-x-2"
            >
              <FaPenNib />
              <span>Blog Oluştur</span>
            </Link>

            <button
              className="bg-backgroundGray text-gray-800 p-3 rounded-full"
              onClick={() => setIsModalOpen(true)}
            >
              <FaRegUser className="text-lg" />
            </button>

            <button className="bg-backgroundGray p-3 rounded-full">
              <FaSun className="text-sunYellow text-lg" />
            </button>
          </div>
        </div>
      </header>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
          <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-xl relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-gray-600 text-xl font-bold hover:text-secondary transition-colors"
            >
              ×
            </button>

            {!showForgotPassword ? (
              <>
                <div className="flex mb-6">
                  <button
                    onClick={() => setIsLoginTab(true)}
                    className={`flex-1 py-2 text-lg font-semibold border-b-2 ${
                      isLoginTab
                        ? "border-primary text-primary"
                        : "border-gray-300 text-gray-500"
                    }`}
                  >
                    Giriş Yap
                  </button>
                  <button
                    onClick={() => setIsLoginTab(false)}
                    className={`flex-1 py-2 text-lg font-semibold border-b-2 ${
                      !isLoginTab
                        ? "border-primary text-primary"
                        : "border-gray-300 text-gray-500"
                    }`}
                  >
                    Kayıt Ol
                  </button>
                </div>

                {isLoginTab ? (
                  <LoginForm
                    onForgotPassword={() => setShowForgotPassword(true)}
                  />
                ) : (
                  <RegisterForm />
                )}
              </>
            ) : (
              <ForgotPasswordForm onBack={() => setShowForgotPassword(false)} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
