import { useEffect, useState } from "react";

const ThemeToggleButton: React.FC= () => {
  const [isDark, setIsDark] = useState<boolean> (() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDark]);

   const checkboxStyle: React.CSSProperties = {
    width: "40px",
    height: "20px",
    cursor: "pointer",
    accentColor: "var(--primary-color)",
    transition: "accent-color 0.3s ease",
  };
  
  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        cursor: "pointer",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>

      <input
        type="checkbox"
        checked={isDark}
        onChange={() => setIsDark(!isDark)}
        style={checkboxStyle}
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </label>
  );
}

export default ThemeToggleButton;