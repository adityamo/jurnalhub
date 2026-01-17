"use client";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { cn } from "@/utils/utils";
import { FiChevronDown, FiGlobe } from "react-icons/fi";

interface LanguageSwitcherProps {
  selectedLang: string;
  setSelectedLang: (lang: string) => void;
  isMobile?: boolean;
  className?: string;
}

interface Language {
  code: string;
  label: string;
}

export const NavbarLogo = () => (
  <Link href="/" className="flex-shrink-0">
    <Image
      src="/assets/logo/sentrapub-color.svg"
      width={120}
      height={24}
      alt="Sentra Publisher"
      className="block w-40 md:w-48 lg:w-48"
      priority
    />
  </Link>
);

export const LanguageSwitcher = ({
  selectedLang,
  setSelectedLang,
  isMobile = false,
  className,
}: LanguageSwitcherProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const languages: Language[] = [
    { code: "ID", label: "Indonesia" },
    { code: "EN", label: "English" },
    { code: "ZH", label: "中文" },
    { code: "JA", label: "日本語" },
  ];

  const handleSelect = (code: string) => {
    setSelectedLang(code);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <div className={cn("relative w-full max-w-xs px-4", className)}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg bg-white hover:border-gray-400 transition-colors"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <FiGlobe className="w-5 h-5 text-gray-600 flex-shrink-0" />
          <span className="text-gray-700 font-medium flex-1 text-left">
            {selectedLang}
          </span>
          <FiChevronDown
            className={cn(
              "w-4 h-4 text-gray-600 transition-transform",
              isOpen && "rotate-180"
            )}
          />
        </button>

        {isOpen && (
          <div
            className="absolute top-full left-4 right-4 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
            role="listbox"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                role="option"
                aria-selected={selectedLang === lang.code}
                className={cn(
                  "w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors",
                  selectedLang === lang.code
                    ? "bg-blue-100 text-blue-600 font-medium"
                    : "text-gray-700"
                )}
              >
                {lang.label}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={cn("relative", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-2 py-2.5 border-1 border-r border-gray-300  bg-transparent hover:border-gray-400 transition-colors hover:shadow-sm"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <FiGlobe className="w-5 h-5 text-gray-600 flex-shrink-0" />
        <span className="text-gray-700 font-medium text-sm">
          {selectedLang}
        </span>
        <FiChevronDown
          className={cn(
            "w-4 h-4 text-gray-600 transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[160px]"
          role="listbox"
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              role="option"
              aria-selected={selectedLang === lang.code}
              className={cn(
                "w-full text-left px-4 py-2.5 hover:bg-blue-50 transition-colors text-sm",
                selectedLang === lang.code
                  ? "bg-blue-100 text-blue-600 font-medium"
                  : "text-gray-700"
              )}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export const NavbarButton = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <button
    className={cn(
      "h-11 px-5 rounded-full text-sm font-medium text-white",
      "bg-gradient-to-b from-blue-500 to-blue-600",
      "hover:shadow-lg active:scale-95 transition",
      className
    )}
  >
    {children}
  </button>
);
