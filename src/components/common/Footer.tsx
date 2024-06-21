import React from "react";
import { useTheme } from "../../context/ThemeContext";
import icon1Light from "../../assets/line-md--linkedin.png";
import icon1Dark from "../../assets/line-md--linkedin-dark.png";
import icon2Light from "../../assets/line-md--github.png";
import icon2Dark from "../../assets/line-md--github-dark.png";
import { IconLinkProps } from "../../types/movie";

const IconLink: React.FC<IconLinkProps> = ({
  href,
  lightIcon,
  darkIcon,
  altText,
}) => {
  const { theme } = useTheme();
  const icon = theme === "dark" ? darkIcon : lightIcon;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={icon} alt={altText} className="w-8 h-8" />
    </a>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="p-4 flex justify-center items-center bg-light-surface dark:bg-dark-surface">
      <div className="flex space-x-4">
        <IconLink
          href="https://www.linkedin.com/in/kevin-armas-b39830267/"
          lightIcon={icon1Light}
          darkIcon={icon1Dark}
          altText="LinkedIn Icon"
        />
        <IconLink
          href="https://github.com/kiwithecode/movie-project"
          lightIcon={icon2Light}
          darkIcon={icon2Dark}
          altText="GitHub Icon"
        />
      </div>
    </footer>
  );
};

export default Footer;
