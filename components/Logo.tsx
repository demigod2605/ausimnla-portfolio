export default function Logo({
  size = 32,
  gradientId = "logo-grad",
  className = "",
}: {
  size?: number;
  gradientId?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="ausimnla logo"
      className={className}
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="8"
          y1="8"
          x2="24"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#7AA2FF" />
          <stop offset="100%" stopColor="#BB86FC" />
        </linearGradient>
      </defs>
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        rx="7"
        fill="#0A0D1E"
        stroke="#232B4D"
        strokeWidth="1.5"
      />
      <path
        d="M5 11 V5 H11"
        stroke="#7AA2FF"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
      <path
        d="M21 5 H27 V11"
        stroke="#7AA2FF"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
      <path
        d="M27 21 V27 H21"
        stroke="#7AA2FF"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
      <path
        d="M11 27 H5 V21"
        stroke="#7AA2FF"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
      <path
        d="M9.5 23.5 L16 8.5 L22.5 23.5"
        stroke={`url(#${gradientId})`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.75 18.75 H19.25"
        stroke={`url(#${gradientId})`}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
