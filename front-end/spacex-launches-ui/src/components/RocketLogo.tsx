const RocketLogo = () => {
  return (
    <div className="w-40 h-40 rounded-full bg-black flex items-center justify-center">
      <svg 
        width="80" 
        height="80" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="text-white"
      >
        {/* Main rocket body */}
        <path 
          d="M12 2C12 2 8 6 8 12C8 14 9 16 12 16C15 16 16 14 16 12C16 6 12 2 12 2Z" 
          fill="currentColor"
        />
        {/* Rocket fins */}
        <path 
          d="M8 12L5 14L7 16L8 15V12Z" 
          fill="currentColor"
        />
        <path 
          d="M16 12V15L17 16L19 14L16 12Z" 
          fill="currentColor"
        />
        {/* Rocket window */}
        <circle 
          cx="12" 
          cy="8" 
          r="2" 
          fill="black"
          stroke="white"
          strokeWidth="0.5"
        />
        {/* Rocket flames */}
        <path 
          d="M10 16L12 22L14 16H10Z" 
          fill="currentColor"
        />
        <path 
          d="M11 16L12 20L13 16H11Z" 
          fill="black"
        />
      </svg>
    </div>
  );
};

export { RocketLogo };
