import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

interface HeadlineProps {
  title: string;
  subtitle: string;
}

const Headline: React.FC<HeadlineProps> = ({
  title,
  subtitle,
}: HeadlineProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl p-5 font-bold">
          {title},{" "}
          <span className="text-blue-500 font-semibold">{subtitle}</span>
        </h1>
        <div onClick={() => setDarkMode(!darkMode)} className={"p-5"}>
          {darkMode ? (
            <FaMoon size={20} color="gray" />
          ) : (
            <FaSun size={20} color="gray" />
          )}
        </div>
      </div>
      <div className="text-center text-slate-300 drop-shadow-sm">
        <p>Unable to fetch current weather.</p>
      </div>
    </div>
  );
};

export default Headline;
