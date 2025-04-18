module.exports = {
  safelist: [
    "bg-red-500",
    "bg-pink-500",
    "bg-blue-500",
    "bg-gray-500", // Corrected this line
    "bg-orange-500", // Corrected this line
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        backgroundLight: "#FFFFFF",
        backgroundGray: "#F3F4F6",
        inputGray: "#E5E7EB",
        primary: "#18B7BE",
        secondary: "#178CA4",
        backgroundDark: "#072A40",
        textDark: "#072A40",
        textLight: "#F9F7F0",
        sunYellow: "#FFD700",
        hoverSunYellow: "#FFC300",
      },
    },
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  plugins: [],
  resolve: {
    alias: {
      "quill-image-resize-module": "quill-image-resize",
    },
  },
};
