import React from 'react'
interface ESignIconProps {
  fill: string
}

const MyProfileIcon: React.FC<ESignIconProps> = ({ fill, ...props }) => (
  <svg width='17' height='17' viewBox='0 0 11 11' {...props} xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M5.14209 0.680176C3.76084 0.680176 2.64209 1.79893 2.64209 3.18018C2.64209 4.56143 3.76084 5.68018 5.14209 5.68018C6.52334 5.68018 7.64209 4.56143 7.64209 3.18018C7.64209 1.79893 6.52334 0.680176 5.14209 0.680176ZM5.14209 6.30518C3.47334 6.30518 0.14209 7.14268 0.14209 8.80518V10.6802H10.1421V8.80518C10.1421 7.14268 6.81084 6.30518 5.14209 6.30518Z'
      fill={fill}
    />
  </svg>
)

export default MyProfileIcon
