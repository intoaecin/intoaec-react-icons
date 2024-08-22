import React from 'react'

const ClientInfo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    // width="31"
    // height="31"
    {...props}
    viewBox='0 0 31 31'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M15.2771 0.390294C15.127 0.53444 15.127 0.552458 15.127 1.59151C15.127 2.63056 15.127 2.64857 15.2771 2.79272C15.3672 2.88882 15.4933 2.94287 15.6074 2.94287C15.7216 2.94287 15.8477 2.88882 15.9378 2.79272C16.0879 2.64857 16.0879 2.63056 16.0879 1.59151C16.0879 0.552458 16.0879 0.53444 15.9378 0.390294C15.8477 0.294197 15.7216 0.240142 15.6074 0.240142C15.4933 0.240142 15.3672 0.294197 15.2771 0.390294Z'
      fill='white'
    />
    <path
      d='M10.5145 2.90089C10.3103 3.11711 10.3403 3.3994 10.5806 3.62763C11.3193 4.32433 12.2743 5.14116 12.3944 5.1892C12.7247 5.31533 13.0851 5.00302 13.001 4.66067C12.9529 4.47448 12.965 4.48649 11.8418 3.47748C11.1571 2.86486 11.013 2.76275 10.8448 2.76275C10.7127 2.76275 10.5986 2.8108 10.5145 2.90089Z'
      fill='white'
    />
    <path
      d='M19.9135 2.9915C18.6582 4.12664 18.3279 4.42094 18.2678 4.50503C18.1537 4.64317 18.1777 4.88941 18.3159 5.0696C18.502 5.30984 18.7843 5.28581 19.1026 4.99752C20.1537 4.07259 20.5801 3.6882 20.7003 3.56207C20.9825 3.24976 20.7783 2.76327 20.3639 2.76327C20.2258 2.76327 20.0997 2.82933 19.9135 2.9915Z'
      fill='white'
    />
    <path
      d='M4.81518 4.33596C4.78515 4.378 4.54491 4.97861 4.28665 5.6693C4.02839 6.35399 3.78214 6.9546 3.7401 6.99664C3.68604 7.04469 3.30165 7.08673 2.52087 7.11676C0.95929 7.17682 0.749077 7.20685 0.725053 7.36301C0.713041 7.46512 0.941272 7.67533 1.84819 8.40807C2.47882 8.90657 2.99535 9.34501 2.99535 9.37504C2.99535 9.40507 2.82718 10.0417 2.62898 10.7865C2.25059 12.1739 2.23258 12.3541 2.47882 12.336C2.52687 12.33 3.09745 11.9877 3.73409 11.5673C4.37073 11.1528 4.9293 10.8105 4.97134 10.8105C5.01338 10.8105 5.58396 11.1588 6.23862 11.5913C6.89328 12.0177 7.45785 12.3721 7.48788 12.3721C7.51791 12.3721 7.57797 12.336 7.61401 12.288C7.67407 12.2159 7.61401 11.9216 7.32572 10.8585C7.12151 10.1198 6.95935 9.47114 6.95935 9.41709C6.95935 9.35703 7.43383 8.9366 8.06446 8.42609C8.67708 7.93959 9.1876 7.50115 9.21162 7.4531C9.30171 7.23689 9.10952 7.19484 7.66206 7.12277C6.88127 7.08673 6.2146 7.02667 6.18457 6.99664C6.15454 6.96061 5.90228 6.34198 5.626 5.61525C5.21158 4.53416 5.09747 4.28791 5.00137 4.2759C4.9293 4.26388 4.85122 4.29391 4.81518 4.33596Z'
      fill='white'
    />
    <path
      d='M15.4392 4.36634C15.4092 4.42641 15.1749 5.02701 14.9167 5.7057C14.6584 6.38438 14.4182 6.96697 14.3701 7.00301C14.3221 7.03904 13.7035 7.0931 12.8986 7.12914C11.8115 7.18319 11.4932 7.21322 11.4211 7.28529C11.3611 7.34535 11.3491 7.40541 11.3791 7.46547C11.4091 7.51352 11.9257 7.95197 12.5323 8.43245C13.1329 8.91894 13.6254 9.35138 13.6254 9.39943C13.6254 9.44748 13.4632 10.0841 13.259 10.8169C13.0608 11.5496 12.9107 12.1862 12.9287 12.2283C12.9467 12.2763 13.0007 12.3304 13.0488 12.3484C13.0968 12.3664 13.6554 12.0421 14.3401 11.5916C15.0848 11.0991 15.5894 10.8109 15.6554 10.8229C15.7095 10.8409 16.2801 11.1952 16.9227 11.6157C17.5654 12.0361 18.1239 12.3664 18.172 12.3484C18.214 12.3304 18.2681 12.2763 18.2861 12.2283C18.3041 12.1862 18.1539 11.5496 17.9557 10.8169C17.7515 10.0841 17.5894 9.44748 17.5894 9.40543C17.5894 9.35739 18.0819 8.92495 18.6885 8.43846C19.2891 7.95197 19.8056 7.51352 19.8356 7.46547C19.8657 7.40541 19.8537 7.34535 19.7936 7.28529C19.7275 7.21322 19.3912 7.18319 18.2921 7.12313C17.5113 7.08709 16.8566 7.03304 16.8266 7.00901C16.8026 6.97898 16.5503 6.36036 16.268 5.62762C15.8356 4.49247 15.7395 4.29427 15.6254 4.27625C15.5473 4.26424 15.4752 4.30028 15.4392 4.36634Z'
      fill='white'
    />
    <path
      d='M26.0769 4.33596C26.0409 4.378 25.7946 5.00263 25.5183 5.71735C25.194 6.57622 24.9898 7.03268 24.9237 7.0507C24.8697 7.06872 24.3351 7.09875 23.7285 7.11676C22.215 7.17682 22.0108 7.20685 21.9868 7.36301C21.9748 7.45911 22.203 7.67533 23.0679 8.37203C23.6745 8.85852 24.185 9.29096 24.209 9.333C24.233 9.37504 24.0889 10.0057 23.8967 10.7264C23.6985 11.4471 23.5363 12.1018 23.5363 12.1679C23.5363 12.2399 23.5784 12.318 23.6324 12.336C23.7405 12.3781 23.7886 12.348 25.2481 11.3991C25.7406 11.0748 26.179 10.8105 26.221 10.8105C26.2631 10.8105 26.8337 11.1588 27.4883 11.5913C28.149 12.0177 28.7136 12.3721 28.7496 12.3721C28.9538 12.3721 28.9298 12.1378 28.5754 10.8405C28.3772 10.1138 28.2271 9.46514 28.2331 9.39907C28.2451 9.327 28.6775 8.9366 29.3322 8.40807C30.2031 7.70536 30.4133 7.50716 30.4133 7.38704C30.4133 7.2549 30.3772 7.23088 30.137 7.20085C29.9869 7.17682 29.3442 7.14079 28.7136 7.11676C28.0289 7.08673 27.5244 7.04469 27.4703 7.00265C27.4223 6.96661 27.152 6.34198 26.8757 5.61525C26.4733 4.55818 26.3532 4.28791 26.2571 4.2759C26.191 4.26388 26.1129 4.29391 26.0769 4.33596Z'
      fill='white'
    />
    <path
      d='M14.8036 13.9704C13.6264 14.2527 12.6174 15.2797 12.3351 16.4629C11.8426 18.559 13.4582 20.6011 15.6084 20.6011C17.4402 20.6011 18.9718 19.0695 18.9718 17.2377C18.9718 15.0815 16.9057 13.4599 14.8036 13.9704Z'
      fill='white'
    />
    <path
      d='M4.82765 16.4146C3.60842 16.823 2.85766 17.9762 3.04385 19.1774C3.21202 20.2885 4.06488 21.1474 5.15799 21.3156C6.59944 21.5438 7.93279 20.4687 8.02288 19.0152C8.07693 18.1864 7.83669 17.5738 7.23008 17.0032C6.74359 16.5468 6.34118 16.3786 5.63847 16.3546C5.27811 16.3425 4.9778 16.3666 4.82765 16.4146Z'
      fill='white'
    />
    <path
      d='M24.8688 16.4498C24.4123 16.6179 24.1841 16.7741 23.8177 17.1765C23.3432 17.687 23.2111 18.0594 23.2051 18.8582C23.2051 19.4528 23.2171 19.5129 23.4093 19.9033C24.1841 21.5009 26.2922 21.8432 27.4934 20.5699C28.2982 19.7171 28.4304 18.4558 27.8057 17.4948C27.5174 17.0504 27.2111 16.7861 26.7186 16.5519C26.2021 16.3116 25.3733 16.2636 24.8688 16.4498Z'
      fill='white'
    />
    <path
      d='M14.5756 21.2972C12.1792 21.6696 10.1011 23.3993 9.32027 25.6756C9.06201 26.4264 9.00195 26.8528 9.00195 27.9219C9.00195 28.9249 9.00195 28.9309 9.18814 29.2973C9.38034 29.6877 9.58454 29.8919 9.98695 30.1081L10.2332 30.2402H15.6086H20.9841L21.2303 30.1081C21.6327 29.8919 21.8369 29.6877 22.0291 29.2973C22.2153 28.9309 22.2153 28.9249 22.2153 27.9219C22.2153 26.8108 22.1492 26.3843 21.8609 25.5855C21.5006 24.6126 20.966 23.7957 20.1913 23.057C18.6777 21.6155 16.6357 20.9729 14.5756 21.2972Z'
      fill='white'
    />
    <path
      d='M4.55677 22.1324C2.83303 22.4808 1.39758 23.736 0.827006 25.3997C0.760939 25.5799 0.712891 25.8081 0.712891 25.9102C0.712891 26.1505 0.893073 26.5409 1.07926 26.709C1.42761 27.0273 1.42161 27.0273 4.84506 27.0273H8.02227L8.10035 26.5589C8.23248 25.712 8.61687 24.691 9.08534 23.9282L9.2415 23.682L8.91717 23.3757C7.78803 22.3066 6.09432 21.8201 4.55677 22.1324Z'
      fill='white'
    />
    <path
      d='M24.6473 22.1444C23.8005 22.3246 22.9236 22.7811 22.2989 23.3757L21.9746 23.682L22.1308 23.9282C22.5752 24.6429 22.9836 25.736 23.1218 26.5889L23.1938 27.0273H26.3831C29.3561 27.0273 29.5903 27.0153 29.8125 26.9132C30.2149 26.727 30.5032 26.3006 30.5032 25.8982C30.5032 25.4598 30.0648 24.5348 29.5543 23.8982C28.4071 22.4567 26.4551 21.754 24.6473 22.1444Z'
      fill='white'
    />
  </svg>
)

export default ClientInfo
