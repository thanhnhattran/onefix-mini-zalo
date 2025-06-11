function FooterWave() {
  return (
    <svg
      className="absolute inset-x-0 bottom-0 z-10 h-24"
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 375 99"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M375 99V16H244.44C231.46 16 225.56 14.95 215.57 9.98C215.57 9.98 200.59 0 188.3 0C176.01 0 170.91 3.96 159.19 9.98C147.47 16 129.64 16 129.64 16H0V99H375Z"
        fill="white"
      />
    </svg>
  );
}

export default FooterWave;
