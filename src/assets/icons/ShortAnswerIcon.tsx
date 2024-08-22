import React from 'react'

const ShortAnswerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' {...props} viewBox='0 0 18 13'>
    <path d='M-0.00683594 3.37083C0.163785 2.89451 0.522369 2.7326 1.03517 2.73439C4.16915 2.74468 7.30313 2.73931 10.4371 2.73931C10.5121 2.73931 10.5866 2.73931 10.6715 2.73931C10.6715 2.90971 10.6715 3.06357 10.6715 3.24247C10.5979 3.24247 10.5243 3.24247 10.4512 3.24247C7.3111 3.24247 4.17149 3.24247 1.03142 3.24247C0.972826 3.24247 0.914234 3.24024 0.855641 3.24337C0.632991 3.255 0.5219 3.35965 0.5219 3.5721C0.520494 5.69612 0.520494 7.82058 0.5219 9.9446C0.5219 10.1566 0.63346 10.2621 0.855641 10.2738C0.914234 10.2769 0.972826 10.2747 1.03142 10.2747C4.1654 10.2747 7.29938 10.2747 10.4338 10.2747C10.5093 10.2747 10.5843 10.2747 10.671 10.2747C10.671 10.4451 10.671 10.603 10.671 10.7778C10.5876 10.7778 10.5126 10.7778 10.438 10.7778C7.30407 10.7778 4.17009 10.7729 1.03611 10.7828C0.523306 10.7845 0.164253 10.6226 -0.0063671 10.1463C-0.00683584 7.88812 -0.00683594 5.62948 -0.00683594 3.37083Z' />
    <path d='M17.9923 10.147C17.8212 10.622 17.4635 10.7915 16.9507 10.7835C15.8736 10.7665 14.7959 10.7785 13.7188 10.7785C13.655 10.7785 13.5913 10.7785 13.513 10.7785C13.513 10.6095 13.513 10.452 13.513 10.2754C13.5866 10.2754 13.655 10.2754 13.7239 10.2754C14.8245 10.2754 15.9256 10.2754 17.0262 10.2754C17.3745 10.2754 17.4645 10.1895 17.4645 9.85988C17.4645 7.79266 17.4645 5.725 17.4645 3.65778C17.4645 3.32816 17.3745 3.24273 17.0262 3.24273C15.9256 3.24228 14.8245 3.24273 13.7239 3.24273C13.6555 3.24273 13.5871 3.24273 13.5088 3.24273C13.5088 3.07009 13.5088 2.91623 13.5088 2.73957C13.5833 2.73957 13.6513 2.73957 13.7193 2.73957C14.7964 2.73957 15.874 2.7512 16.9512 2.73465C17.464 2.7266 17.8221 2.89477 17.9927 3.37109C17.9923 5.62929 17.9923 7.88793 17.9923 10.147Z' />
    <path d='M11.2576 3.8218C11.2576 3.26094 11.2576 2.72737 11.2576 2.1759C10.8882 2.1759 10.5278 2.1759 10.1537 2.1759C10.1537 1.64322 10.1537 1.12754 10.1537 0.601562C11.4493 0.601562 12.7402 0.601562 14.041 0.601562C14.041 1.12262 14.041 1.63428 14.041 2.16785C13.6721 2.16785 13.3069 2.16785 12.9333 2.16785C12.9333 2.72424 12.9333 3.25871 12.9333 3.8133C14.2397 3.8133 15.5423 3.8133 16.8557 3.8133C16.8557 5.78257 16.8557 7.73126 16.8557 9.69964C15.5531 9.69964 14.25 9.69964 12.9357 9.69964C12.9357 10.2578 12.9357 10.7959 12.9357 11.35C13.306 11.35 13.6669 11.35 14.0391 11.35C14.0391 11.8778 14.0391 12.3899 14.0391 12.9163C12.751 12.9163 11.4606 12.9163 10.1546 12.9163C10.1546 12.4037 10.1546 11.8881 10.1546 11.3563C10.5175 11.3563 10.8784 11.3563 11.2534 11.3563C11.2534 10.8017 11.2534 10.2636 11.2534 9.70903C7.88127 9.70903 4.51479 9.70903 1.13379 9.70903C1.13379 7.7411 1.13379 5.78883 1.13379 3.82046C4.50355 3.8218 7.87002 3.8218 11.2576 3.8218ZM1.65268 9.19289C1.72252 9.19602 1.77455 9.20094 1.82611 9.20094C4.91275 9.20139 7.99892 9.2005 11.0856 9.20408C11.2332 9.20408 11.2712 9.16293 11.2707 9.02517C11.266 7.52195 11.2656 6.01827 11.2712 4.51505C11.2717 4.36253 11.2309 4.3187 11.0677 4.3187C7.99283 4.32318 4.91838 4.32228 1.84346 4.32228C1.78158 4.32228 1.71971 4.32228 1.65268 4.32228C1.65268 5.95745 1.65268 7.56623 1.65268 9.19289ZM16.327 9.19334C16.327 7.56265 16.327 5.95029 16.327 4.3357C15.1889 4.3357 14.0625 4.3357 12.9366 4.3357C12.9366 5.96147 12.9366 7.57338 12.9366 9.19334C14.071 9.19334 15.1931 9.19334 16.327 9.19334ZM12.4051 11.8567C12.4051 8.45358 12.4051 5.06965 12.4051 1.66379C12.7791 1.66379 13.1443 1.66379 13.5113 1.66379C13.5113 1.46566 13.5113 1.28944 13.5113 1.10741C12.5616 1.10741 11.6223 1.10741 10.6782 1.10741C10.6782 1.2957 10.6782 1.47192 10.6782 1.6705C11.0523 1.6705 11.417 1.6705 11.7826 1.6705C11.7826 5.07635 11.7826 8.46029 11.7826 11.8599C11.4085 11.8599 11.0476 11.8599 10.6829 11.8599C10.6829 12.0558 10.6829 12.2356 10.6829 12.4127C11.6359 12.4127 12.5747 12.4127 13.5094 12.4127C13.5094 12.2208 13.5094 12.0446 13.5094 11.8567C13.3158 11.8567 13.1349 11.8567 12.9539 11.8567C12.7744 11.8567 12.5944 11.8567 12.4051 11.8567Z' />
    <path d='M6.22406 6.24665C6.39093 6.4345 6.46031 6.65187 6.42797 6.89831C6.38297 7.2418 6.06563 7.54146 5.70002 7.56337C5.45533 7.57813 5.20925 7.56829 4.96363 7.56919C4.9116 7.56919 4.8591 7.56919 4.79395 7.56919C4.79395 6.68631 4.79395 5.81371 4.79395 4.93933C5.12956 4.93933 5.47315 4.89415 5.79845 4.94917C6.36469 5.04488 6.61265 5.66477 6.3075 6.13037C6.28266 6.16838 6.25453 6.20416 6.22406 6.24665ZM5.31753 5.99082C5.52893 5.97696 5.75673 6.05881 5.86454 5.83563C5.90298 5.75557 5.89407 5.61647 5.84392 5.54357C5.71689 5.35706 5.5083 5.42549 5.31753 5.42907C5.31753 5.6196 5.31753 5.79537 5.31753 5.99082ZM5.31893 7.06781C5.51674 7.04903 5.73611 7.1349 5.85189 6.9323C5.89782 6.85179 5.89689 6.7042 5.84861 6.62593C5.72908 6.43271 5.51533 6.50114 5.31893 6.50159C5.31893 6.68765 5.31893 6.86342 5.31893 7.06781Z' />
    <path d='M4.18206 7.56283C4.00113 7.56283 3.83988 7.56283 3.66035 7.56283C3.66035 7.2994 3.66035 7.03909 3.66035 6.76493C3.45458 6.76493 3.26614 6.76493 3.06037 6.76493C3.06037 7.02791 3.06037 7.28822 3.06037 7.5597C2.87803 7.5597 2.7121 7.5597 2.53491 7.5597C2.5321 7.50066 2.52741 7.4461 2.52741 7.39198C2.52694 6.83828 2.52507 6.28502 2.52788 5.73132C2.53023 5.25276 2.89631 4.89182 3.36599 4.89853C3.83613 4.90524 4.17925 5.25365 4.18159 5.73221C4.1844 6.33556 4.18206 6.93936 4.18206 7.56283ZM3.65238 6.23403C3.65238 6.03545 3.65801 5.85745 3.65098 5.67989C3.64488 5.52424 3.52817 5.41556 3.37489 5.40661C3.22208 5.39767 3.07912 5.49383 3.06599 5.64545C3.04959 5.83777 3.06224 6.03232 3.06224 6.23403C3.26286 6.23403 3.44755 6.23403 3.65238 6.23403Z' />
    <path d='M7.29874 8.13281C7.29874 8.30232 7.29874 8.45171 7.29874 8.61451C5.71113 8.61451 4.1282 8.61451 2.53027 8.61451C2.53027 8.45707 2.53027 8.30009 2.53027 8.13281C4.11742 8.13281 5.69988 8.13281 7.29874 8.13281Z' />
    <path d='M10.6763 4.90625C10.6763 5.07531 10.6763 5.2247 10.6763 5.3875C9.46322 5.3875 8.25575 5.3875 7.03516 5.3875C7.03516 5.23319 7.03516 5.07487 7.03516 4.90625C8.24637 4.90625 9.45431 4.90625 10.6763 4.90625Z' />
    <path d='M10.6734 5.98438C10.6734 6.14807 10.6734 6.30237 10.6734 6.46696C9.45701 6.46696 8.25001 6.46696 7.03223 6.46696C7.03223 6.30595 7.03223 6.15165 7.03223 5.98438C8.24063 5.98438 9.44763 5.98438 10.6734 5.98438Z' />
    <path d='M10.6733 7.0625C10.6733 7.22977 10.6733 7.38318 10.6733 7.54598C9.45603 7.54598 8.24809 7.54598 7.03125 7.54598C7.03125 7.38273 7.03125 7.22888 7.03125 7.0625C8.24387 7.0625 9.45134 7.0625 10.6733 7.0625Z' />
    <path d='M8.42061 8.62411C8.22983 8.62411 8.05687 8.62411 7.875 8.62411C7.875 8.46041 7.875 8.30656 7.875 8.14062C8.05734 8.14062 8.23452 8.14062 8.42061 8.14062C8.42061 8.30208 8.42061 8.45639 8.42061 8.62411Z' />
    <path d='M9.00586 8.13281C9.18398 8.13281 9.35741 8.13281 9.5435 8.13281C9.5435 8.29159 9.5435 8.45036 9.5435 8.61853C9.36538 8.61853 9.19242 8.61853 9.00586 8.61853C9.00586 8.45797 9.00586 8.30009 9.00586 8.13281Z' />
    <path d='M10.1318 8.13281C10.3114 8.13281 10.4843 8.13281 10.6699 8.13281C10.6699 8.29293 10.6699 8.45126 10.6699 8.61898C10.4909 8.61898 10.3179 8.61898 10.1318 8.61898C10.1318 8.45707 10.1318 8.29919 10.1318 8.13281Z' />
    <path d='M15.4606 5.38884C14.802 5.38884 14.1608 5.38884 13.5088 5.38884C13.5088 5.22559 13.5088 5.07218 13.5088 4.90625C14.1589 4.90625 14.8044 4.90625 15.4606 4.90625C15.4606 5.06681 15.4606 5.22022 15.4606 5.38884Z' />
    <path d='M15.461 5.97656C15.461 6.1416 15.461 6.29546 15.461 6.4587C14.8062 6.4587 14.1617 6.4587 13.5078 6.4587C13.5078 6.29322 13.5078 6.14026 13.5078 5.97656C14.1631 5.97656 14.8086 5.97656 15.461 5.97656Z' />
    <path d='M13.5078 7.54419C13.5078 7.38095 13.5078 7.22754 13.5078 7.0625C14.1575 7.0625 14.7982 7.0625 15.4549 7.0625C15.4549 7.21725 15.4549 7.37513 15.4549 7.54419C14.8086 7.54419 14.1631 7.54419 13.5078 7.54419Z' />
    <path d='M13.5078 8.62277C13.5078 8.45818 13.5078 8.30522 13.5078 8.14062C14.1584 8.14062 14.7992 8.14062 15.4559 8.14062C15.4559 8.29627 15.4559 8.45415 15.4559 8.62277C14.8081 8.62277 14.1622 8.62277 13.5078 8.62277Z' />
  </svg>
)

export default ShortAnswerIcon
