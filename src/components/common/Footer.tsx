import React from "react";
import { useTheme } from "../../context/ThemeContext";
import icon1Light from "../../assets/line-md--linkedin.png";
import icon1Dark from "../../assets/line-md--linkedin-dark.png";
import icon2Light from "../../assets/line-md--github.png";
import icon2Dark from "../../assets/line-md--github-dark.png";


const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer className="p-4 flex justify-center items-center bg-light-surface dark:bg-dark-surface">
      <div className="flex space-x-4">
        <a href="https://www.linkedin.com/in/kevin-armas-b39830267/" target="_blank" rel="noopener noreferrer">
          <img
            src={theme === "dark" ? icon1Dark : icon1Light}
            alt="Icon 1"
            className="w-8 h-8"
          />
        </a>
        <a href="https://github.com/kiwithecode/movie-project" target="_blank" rel="noopener noreferrer">
          <img
            src={theme === "dark" ? icon2Dark : icon2Light}
            alt="Icon 2"
            className="w-8 h-8"
          />
        </a>
      </div>
    </footer>
  );
};


export default Footer;
