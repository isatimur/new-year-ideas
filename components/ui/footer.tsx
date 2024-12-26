import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './button';
import type { Language } from '@/types';

const SnakeSvg = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-24 h-24 text-blue-600 opacity-50"
    fill="currentColor"
  >
    <path d="M30,50 Q40,30 50,50 T70,50 Q80,70 90,50" 
          className="animate-[wave_3s_ease-in-out_infinite]"
          strokeWidth="4"
          stroke="currentColor"
          fill="none"/>
    <circle cx="85" cy="45" r="3"/> {/* Eye */}
    <path d="M88,45 L92,45" strokeWidth="2" stroke="currentColor"/> {/* Tongue */}
    <path d="M30,50 Q25,60 20,50 Q15,40 10,50" 
          className="animate-[wave_3s_ease-in-out_infinite]"
          strokeWidth="4"
          stroke="currentColor"
          fill="none"/> {/* Tail */}
  </svg>
);

const ChristmasTreeSvg = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-24 h-24 text-green-600 opacity-50"
    fill="currentColor"
  >
    <path d="M50,10 L70,40 H60 L75,60 H55 L65,80 H35 L45,60 H25 L40,40 H30 L50,10"
          className="animate-[pulse_2s_ease-in-out_infinite]"/>
    <rect x="45" y="80" width="10" height="10" fill="brown"/> {/* Trunk */}
    {/* Decorations */}
    <circle cx="50" cy="20" r="2" fill="red" className="animate-ping"/>
    <circle cx="40" cy="40" r="2" fill="gold" className="animate-ping"/>
    <circle cx="60" cy="40" r="2" fill="red" className="animate-ping"/>
    <circle cx="45" cy="60" r="2" fill="gold" className="animate-ping"/>
    <circle cx="55" cy="60" r="2" fill="red" className="animate-ping"/>
  </svg>
);

export function Footer({ lang }: { lang: Language }) {
  const year = new Date().getFullYear();
  
  const text = {
    en: {
      madeWith: "Made with",
      by: "by",
      rights: "All rights reserved",
      contact: "Contact",
      followMe: "Follow me",
      feedback: "Send feedback",
      description: "A fun tool to generate creative New Year's celebration ideas",
      author: "Timur Isachenko",
      authorTitle: "Developer & Designer",
      socialLinks: "Social Links",
      emailMe: "Email me",
      sourceCode: "View source code"
    },
    ru: {
      madeWith: "Сделано с",
      by: "от",
      rights: "Все права защищены",
      contact: "Контакты",
      followMe: "Подписаться",
      feedback: "Отправить отзыв",
      description: "Веселый инструмент для генерации креативных идей празднования Нового года",
      author: "Тимур Исаченко",
      authorTitle: "Разработчик & Дизайнер",
      socialLinks: "Социальные сети",
      emailMe: "Написать письмо",
      sourceCode: "Исходный код"
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/isatimur/new-year-ideas",
      label: "GitHub"
    },
    {
      icon: Linkedin,   
      href: "https://www.linkedin.com/in/timur-isachenko/",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:isatimur.it@gmail.com",
      label: text[lang].emailMe
    }
  ];

  return (
    <footer className="w-full py-8 px-4 mt-8 border-t border-gray-200 bg-white/50 backdrop-blur-sm relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:block">
        <SnakeSvg />
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:block">
        <ChristmasTreeSvg />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-gray-800 mb-2">
              {text[lang].author}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              {text[lang].authorTitle}
            </p>
            <p className="text-sm text-gray-500">
              {text[lang].description}
            </p>
          </div>

          {/* Made With Section */}
          <div className="text-center">
            <p className="flex items-center justify-center gap-2 text-gray-600 mb-2">
              {text[lang].madeWith} <Heart className="w-4 h-4 text-red-500 animate-pulse" /> {text[lang].by} {text[lang].author}
            </p>
            <div className="flex flex-col items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                asChild
              >
                <a 
                  href="https://github.com/isatimur/new-year-ideas" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {text[lang].sourceCode}
                </a>
              </Button>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="text-center md:text-right">
            <h3 className="font-semibold text-gray-800 mb-4">
              {text[lang].socialLinks}
            </h3>
            <div className="flex items-center justify-center md:justify-end gap-4 mb-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <a href="mailto:isatimur.it@gmail.com">
                {text[lang].feedback}
              </a>
            </Button>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-500 pt-4 border-t border-gray-200">
          <p>© {year} {text[lang].rights}</p>
        </div>
      </div>
    </footer>
  );
}