import { JSX } from 'react';
import { ProgrammingLanguage } from './types/Carrousel.types';
import Image from 'next/image';

const PROGRAMMING_LANGUAGES: ProgrammingLanguage[] = [
    { name: "JavaScript", color: "#F7DF1E", image: "/images/javascript.png" },
    { name: "Python", color: "white", image: "/images/python.png" },
    { name: "Next JS", color: "white", image: "/images/next.png" },
    { name: "React JS", color: "white", image: "/images/react.png" },
    { name: "TypeScript", color: "#017acb", image: "/images/typescript.png" },
    { name: "Node JS", color: "#339933", image: "/images/node.png" },
    { name: "Remix", color: "white", image: "/images/remix.png" },
    { name: "MongoDB", color: "white", image: "/images/mongodb.png" },
    { name: "PostgreSQL", color: "#336791", image: "/images/postgres.png" },
  ];
  

export default function Carousel(): JSX.Element {
    const duplicatedLanguages = [...PROGRAMMING_LANGUAGES, ...PROGRAMMING_LANGUAGES];
  
    return (
      <div className="w-full overflow-hidden p-8">
        <div className="relative h-32">
          <div className="absolute flex whitespace-nowrap animate-carousel">
            {duplicatedLanguages.map((lang, index) => (
              <div
                key={`${lang.name}-${index}`}
                className="flex flex-col items-center justify-center mx-8 min-w-[130px]"
              >
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center mb-2 
                           transition-transform duration-300 hover:scale-110"
                  style={{ backgroundColor: lang.color }}
                >
                  <Image
                    src={lang.image}
                    alt={`${lang.name} logo`}
                    width={50}
                    height={50}
                    className="w-20 h-15 rounded-3xl"
                  />
                </div>
                <span className="text-sm font-semibold">{lang.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  