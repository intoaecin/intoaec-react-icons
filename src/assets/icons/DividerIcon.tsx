import React from 'react'

const DividerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' {...props} viewBox='0 0 16 8'>
    <line x1='0.236328' y1='1.91406' x2='15.7407' y2='1.91406' strokeWidth='2' />
    <line x1='0.236328' y1='6.25' x2='15.7407' y2='6.25' strokeWidth='2' strokeDasharray='5 2' />
  </svg>
)

export default DividerIcon
