import React, { useState } from 'react'

const NoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <svg viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect y='0.194824' width='16' height='16' rx='2' fill={'#F7685B'} />
      <path
        d='M15 2.60482L13.59 1.19482L8 6.78482L2.41 1.19482L1 2.60482L6.59 8.19482L1 13.7848L2.41 15.1948L8 9.60482L13.59 15.1948L15 13.7848L9.41 8.19482L15 2.60482Z'
        fill={'white'}
      />
    </svg>
  )
}

export default NoIcon
