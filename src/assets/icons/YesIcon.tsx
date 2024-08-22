import React from 'react'

const YesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox='0 0 20 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      // onMouseOver={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <rect x='1' y='0.194824' width='18' height='16' rx='2' />
      <rect
        x='1'
        y='0.194824'
        width='18'
        height='16'
        rx='2'
        fill={'#34AFF9'}
        stroke='black'
        stroke-opacity='0.2'
        stroke-width='0.2'
      />
      <path
        d='M7.45455 11.3839L4.11364 7.94976L3 9.09447L7.45455 13.6733L17 3.86151L15.8864 2.7168L7.45455 11.3839Z'
        fill={'white'}
      />
    </svg>
  )
}

export default YesIcon
