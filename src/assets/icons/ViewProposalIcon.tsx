import React from "react";

export const ViewProposalIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.625 2.62109H3.375C2.82272 2.62109 2.375 3.06881 2.375 3.62109V8.87109C2.375 9.42338 2.82272 9.87109 3.375 9.87109H8.625C9.17728 9.87109 9.625 9.42338 9.625 8.87109V7.62109M9.625 4.87109V2.62109H7.375M9.5 2.74609L5.875 6.37109"
        stroke="#3CA2FF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
