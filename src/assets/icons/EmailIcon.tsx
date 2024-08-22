import React from "react";

const EmailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 31" {...props}>
    <g clip-path="url(#clip0_6465_330050)">
      <path d="M25.9219 5.5625H5.92188C4.54688 5.5625 3.43437 6.6875 3.43437 8.0625L3.42188 23.0625C3.42188 24.4375 4.54688 25.5625 5.92188 25.5625H25.9219C27.2969 25.5625 28.4219 24.4375 28.4219 23.0625V8.0625C28.4219 6.6875 27.2969 5.5625 25.9219 5.5625ZM25.9219 10.5625L15.9219 16.8125L5.92188 10.5625V8.0625L15.9219 14.3125L25.9219 8.0625V10.5625Z" />
    </g>
    <defs>
      <clipPath id="clip0_6465_330050">
        <rect
          width="30"
          height="30"
          fill="white"
          transform="translate(0.921875 0.5625)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default EmailIcon;
