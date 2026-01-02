
import React from 'react';
import { COLORS } from '../constants';

type CharacterType = 'hero' | 'thinking' | 'chef' | 'gardener' | 'vacation' | 'musician' | 'police' | 'doctor';

interface SaltCharacterProps {
  type: CharacterType;
  className?: string;
  size?: number;
}

const SaltCharacter: React.FC<SaltCharacterProps> = ({ type, className = "", size = 100 }) => {
  const bodyColor = "#FFFFFF";
  const lidColor = "#333333";
  const accentColor = COLORS.AQUA;

  return (
    <div className={`relative inline-block ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg">
        {/* Shaker Body */}
        <path d="M30 100C25 100 20 95 22 80L28 35C29 30 32 25 38 25H62C68 25 71 30 72 35L78 80C80 95 75 100 70 100H30Z" fill={bodyColor} stroke="#000" strokeWidth="2.5" />

        {/* Lid */}
        <path d="M35 25C35 20 40 15 50 15C60 15 65 20 65 25H35Z" fill={lidColor} stroke="#000" strokeWidth="2.5" />
        <circle cx="42" cy="20" r="1.5" fill="white" opacity="0.5" />
        <circle cx="50" cy="20" r="1.5" fill="white" opacity="0.5" />
        <circle cx="58" cy="20" r="1.5" fill="white" opacity="0.5" />

        {/* Eyes */}
        <g className="eyes">
          <ellipse cx="42" cy="45" rx="5" ry="7" fill="white" stroke="#000" strokeWidth="1.5" />
          <ellipse cx="58" cy="45" rx="5" ry="7" fill="white" stroke="#000" strokeWidth="1.5" />
          <circle cx="43" cy="45" r="2.5" fill="black" />
          <circle cx="59" cy="45" r="2.5" fill="black" />
        </g>

        {/* Character Specific Decorations */}
        {type === 'hero' && (
          <g>
            <path d="M22 45L10 80L35 70" fill="#E11D48" stroke="#000" strokeWidth="1.5" /> {/* Cape Left */}
            <path d="M78 45L90 80L65 70" fill="#E11D48" stroke="#000" strokeWidth="1.5" /> {/* Cape Right */}
            <rect x="35" y="38" width="30" height="15" rx="4" fill="#E11D48" stroke="#000" strokeWidth="1.5" opacity="0.9" /> {/* Mask */}
          </g>
        )}

        {type === 'police' && (
          <g>
            <path d="M22 45L10 80L35 70" fill="#1E293B" stroke="#000" strokeWidth="1.5" /> {/* Cape/Coat back */}
            <path d="M78 45L90 80L65 70" fill="#1E293B" stroke="#000" strokeWidth="1.5" />
            {/* Police Hat */}
            <path d="M30 25L30 15C30 10 35 5 50 5C65 5 70 10 70 15V25H30Z" fill="#1A2B44" stroke="#000" strokeWidth="2" />
            <path d="M30 20L70 20L75 25L25 25L30 20Z" fill="#0F172A" />
            <rect x="45" y="10" width="10" height="8" rx="2" fill="#FACC15" stroke="#000" strokeWidth="1" /> {/* Badge */}
            {/* Mask and Belt */}
            <rect x="35" y="38" width="30" height="15" rx="4" fill="#E11D48" stroke="#000" strokeWidth="1.5" opacity="0.9" />
            <rect x="25" y="75" width="50" height="8" fill="#111" stroke="#000" strokeWidth="1" /> {/* Belt */}
            <rect x="60" y="70" width="6" height="10" rx="1" fill="#444" stroke="#000" strokeWidth="1" /> {/* Radio */}
          </g>
        )}

        {type === 'doctor' && (
          <g>
            <path d="M30 35H70L75 95H25L30 35Z" fill="white" stroke="#000" strokeWidth="1.5" /> {/* Lab Coat */}
            <path d="M50 35V95" stroke="#E2E8F0" strokeWidth="1" /> {/* Coat split */}
            <path d="M35 18H65" stroke="#E11D48" strokeWidth="6" strokeLinecap="round" /> {/* Red Headband */}
            <circle cx="50" cy="18" r="4" fill="white" />
            <path d="M48 18H52M50 16V20" stroke="#E11D48" strokeWidth="1.5" /> {/* Cross */}
            {/* Stethoscope */}
            <path d="M40 55C40 65 60 65 60 55" stroke="#475569" strokeWidth="2" fill="none" />
            <circle cx="50" cy="65" r="3" fill="#94A3B8" stroke="#000" strokeWidth="1" />
          </g>
        )}

        {type === 'thinking' && (
          <g>
            <path d="M50 5C55 -5 65 -5 70 5C75 15 65 20 60 15" stroke={accentColor} strokeWidth="3" fill="none" strokeLinecap="round" />
            <circle cx="55" cy="0" r="1.5" fill={accentColor} />
            <path d="M35 75C40 80 60 80 65 75" stroke="#000" strokeWidth="1.5" strokeLinecap="round" /> {/* Mouth */}
          </g>
        )}

        {type === 'chef' && (
          <g>
            <path d="M35 15C35 5 65 5 65 15V25H35V15Z" fill="white" stroke="#000" strokeWidth="2" /> {/* Chef Hat */}
            <path d="M30 60H70V95C70 98 68 100 65 100H35C32 100 30 98 30 95V60Z" fill="white" stroke="#000" strokeWidth="1.5" opacity="0.5" /> {/* Apron */}
          </g>
        )}

        {type === 'gardener' && (
          <g>
            <path d="M30 70C30 95 70 95 70 70V100H30V70Z" fill="#166534" stroke="#000" strokeWidth="2" /> {/* Overalls */}
            <rect x="80" y="60" width="10" height="15" rx="2" fill="#92400E" stroke="#000" strokeWidth="1" /> {/* Pot */}
            <path d="M85 60V50" stroke="#166534" strokeWidth="2" />
            <ellipse cx="82" cy="52" rx="3" ry="2" fill="#22C55E" />
          </g>
        )}

        {type === 'vacation' && (
          <g>
            <rect x="35" y="40" width="30" height="8" rx="2" fill="#000" /> {/* Sunglasses */}
            <path d="M15 110L85 110" stroke="#000" strokeWidth="2" /> {/* Lounger Base */}
            <path d="M10 20L40 40" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" /> {/* Umbrella Pole */}
            <path d="M5 25C15 5 45 5 55 25Z" fill="#EF4444" stroke="#000" strokeWidth="1.5" />
          </g>
        )}

        {type === 'musician' && (
          <g>
            <path d="M35 15L65 25L50 30L35 15Z" fill="#B45309" stroke="#000" strokeWidth="1.5" /> {/* Straw Hat */}
            <path d="M25 60L45 80L35 90L15 70L25 60Z" fill="#D97706" stroke="#000" strokeWidth="1.5" /> {/* Guitar */}
          </g>
        )}

        {/* Simple Smile (Default) */}
        {type !== 'thinking' && type !== 'vacation' && (
          <path d="M40 55C45 60 55 60 60 55" stroke="#000" strokeWidth="2" strokeLinecap="round" />
        )}
      </svg>
    </div>
  );
};

export default SaltCharacter;
