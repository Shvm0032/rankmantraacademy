function WaveLine() {
  return (
    <svg
      width="200"
      height="20"
      viewBox="0 0 200 20"
      xmlns="http://www.w3.org/2000/svg"
      className="wave-path"
    >
      <path
        d="M0 10 Q 12 0, 25 10 T 50 10 T 75 10 T 100 10 T 125 10 T 150 10 T 175 10 T 200 10"
        stroke="#E63946"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
