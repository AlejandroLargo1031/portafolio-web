'use client'

import { useEffect } from 'react';
import anime from 'animejs';

export default function Logo() {
  useEffect(() => {
    anime.timeline()
      .add({
        targets: '#hexagon path',
        strokeDashoffset: [anime.setDashoffset, 0], 
        easing: 'easeInOutQuart',
        duration: 2000,
      })
      .add({
        targets: '#hexagon #AL',
        opacity: [0, 1],
        easing: 'easeInOutQuart',
        duration: 1000,
      });
  }, []); 
  return (
    <div className="w-12 h-12 flex items-center justify-center">
      <svg
        id="hexagon"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <g>
          <g
            id="AL"
            transform="translate(36, 33)"
            fill="#06b6d4"
            fontFamily="system-ui, Calibre-Medium, Calibre, sans-serif"
            fontSize="30"
            fontWeight="400"
            letterSpacing="2"
            style={{ opacity: 0 }}
          >
            <text>
              <tspan x="-3" y="25">AL</tspan>
            </text>
          </g>
          <path
            stroke="#06b6d4"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M 50, 5
               L 11, 27
               L 11, 72
               L 50, 95
               L 89, 73
               L 89, 28 z"
          />
        </g>
      </svg>
    </div>
  );
}
