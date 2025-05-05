import React, { ReactNode } from 'react';

interface SvgMaskWrapperProps {
  children: ReactNode;
  width?: number;
  height?: number;
  className?: string;
  maskId?: string;
}

export const SvgMaskWrapper: React.FC<SvgMaskWrapperProps> = ({
  children,
  width = 225,
  height = 100,
  className = '',
  maskId = 'bubbleMask',
}) => {
  return (
    <div
      className={className}
      style={{ position: 'relative', width, height }}
    >
      {/* Base SVG Background (bubble + button + arrow) */}
      <svg
        width={width}
        height={height}
        viewBox="0 0 225 100"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}
      >
        <rect x="181" y="56" width="44" height="44" rx="22" fill="#FABB3F" />
        <path
          d="M198 73H208M208 73V83M208 73L198 83"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0 12C0 5.37258 5.37258 0 12 0H213C219.627 0 225 5.37258 225 12V29.5V40C225 46.6274 219.627 52 213 52H200V52C187.021 52 176.5 62.5213 176.5 75.5V76V88C176.5 94.6274 171.127 100 164.5 100H112.5H12C5.37259 100 0 94.6274 0 88V12Z"
          fill="#2F3A54"
        />
      </svg>

      {/* SVG mask definition */}
      <svg width="0" height="0">
        <defs>
          <mask id={maskId}>
            <rect width="100%" height="100%" fill="black" />
            <path
              d="M0 12C0 5.37258 5.37258 0 12 0H213C219.627 0 225 5.37258 225 12V29.5V40C225 46.6274 219.627 52 213 52H200V52C187.021 52 176.5 62.5213 176.5 75.5V76V88C176.5 94.6274 171.127 100 164.5 100H112.5H12C5.37259 100 0 94.6274 0 88V12Z"
              fill="white"
            />
          </mask>
        </defs>
      </svg>

      {/* Content container masked by the bubble path */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width,
          height,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mask: `url(#${maskId})`,
          WebkitMask: `url(#${maskId})`,
          color: 'white',
          zIndex: 1,
        }}
      >
        {children}
      </div>
    </div>
  );
};
