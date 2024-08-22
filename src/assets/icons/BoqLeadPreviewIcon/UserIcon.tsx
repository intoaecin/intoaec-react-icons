import React from "react";

const UserIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    // width="11"
    // height="11"
    {...props}
    viewBox="0 0 11 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_763_42410)">
      <path
        d="M7.35304 6.41406H3.64696C3.04462 6.41479 2.46716 6.65439 2.04124 7.08031C1.61533 7.50622 1.37573 8.08368 1.375 8.68602V10.9974H9.625V8.68602C9.62427 8.08368 9.38467 7.50622 8.95876 7.08031C8.53284 6.65439 7.95538 6.41479 7.35304 6.41406Z"
        fill="#192A3E"
      />
      <path
        d="M5.5 5.5C7.01878 5.5 8.25 4.26878 8.25 2.75C8.25 1.23122 7.01878 0 5.5 0C3.98122 0 2.75 1.23122 2.75 2.75C2.75 4.26878 3.98122 5.5 5.5 5.5Z"
        fill="#192A3E"
      />
    </g>
    <defs>
      <clipPath id="clip0_763_42410">
        <rect width="11" height="11" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default UserIcon;
