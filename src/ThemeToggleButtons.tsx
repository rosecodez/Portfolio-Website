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

  const labelStyle: React.CSSProperties = {
    display: "flex",
    gap: "0.5rem",
    cursor: "pointer",
  };

  const toggleStyle: React.CSSProperties = {
    width: "40px",
    height: "20px",
    appearance: "none",
    backgroundColor: isDark ? "#444444" : "#d1d5db",
    borderRadius: "9999px",
    position: "relative",
    outline: "none",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const knobStyle: React.CSSProperties = {
    content: '""',
    position: "absolute",
    top: "2px",
    left: isDark ? "22px" : "2px",
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    backgroundColor: "#ffffff",
    transition: "left 0.3s",
  };

  const iconStyle: React.CSSProperties = {
    width: "20px",
    height: "20px",
    stroke: "currentColor",
  };
  return (
    <label style={labelStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={iconStyle}
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>

      <div style={{ position: "relative" }}>
        <input
          type="checkbox"
          checked={isDark}
          onChange={() => setIsDark(!isDark)}
          style={toggleStyle}
        />
        <span style={knobStyle}></span>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={iconStyle}
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </label>
  );
};

export default ThemeToggleButton;