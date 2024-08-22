import React from 'react'
interface ESignIconProps {
  fill: string
}

const MeetLinkIcon: React.FC<ESignIconProps> = () => (
  <svg width='24' height='14' viewBox='0 0 24 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M2.28 7C2.28 4.606 3.948 2.66 6 2.66H10.8V0H6C2.688 0 0 3.136 0 7C0 10.864 2.688 14 6 14H10.8V11.34H6C3.948 11.34 2.28 9.394 2.28 7ZM7.2 8.4H16.8V5.6H7.2V8.4ZM18 0H13.2V2.66H18C20.052 2.66 21.72 4.606 21.72 7C21.72 9.394 20.052 11.34 18 11.34H13.2V14H18C21.312 14 24 10.864 24 7C24 3.136 21.312 0 18 0Z'
      fill='#334D6E'
    />
  </svg>
)

export default MeetLinkIcon
