import { useEffect } from 'react';
import { useTheme } from '@/store/store';
import React from 'react';
import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme((state) => state);

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save theme to local storage
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme'); // Get theme from local storage
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, [setTheme]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="w-[79px] h-[38px] flex items-center justify-center bg-light-background dark:bg-dark-background rounded-full p-2 transition-all duration-300">
      <button
        onClick={changeTheme}
        className="relative w-full h-full flex items-center"
      >
        <div
          className={`absolute w-[26px] h-[26px] bg-white rounded-full flex items-center justify-center transform transition-transform duration-300 ${
            theme === 'light' ? 'translate-x-0' : 'translate-x-[36px]'
          }`}
        >
          {theme === 'light' ? (
            <FaMoon className="text-gray-800" size={15} />
          ) : (
            <BsSunFill className="text-yellow-400" size={15} />
          )}
        </div>
      </button>
    </div>
  );
};

export default ThemeToggler;
