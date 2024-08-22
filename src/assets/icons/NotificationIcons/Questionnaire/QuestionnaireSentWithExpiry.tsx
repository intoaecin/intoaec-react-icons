import React from "react";

const QuestionnaireSentWithExpiry: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
  <svg
    // width="36"
    // height="42"
    {...props}
    viewBox="0 0 36 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.4562 0.493734C10.8884 0.79824 10.7238 1.16036 10.7238 2.12325V2.91332L10.0489 2.95447C9.44813 2.98739 9.3576 3.02031 9.18477 3.21783C9.00371 3.4318 8.99548 3.48118 8.99548 5.08601C8.99548 6.72376 8.99548 6.73199 9.20123 6.92951L9.39875 7.13525H15.0856H20.7725L20.97 6.92951C21.1757 6.73199 21.1757 6.72376 21.1757 5.08601C21.1757 3.48118 21.1675 3.4318 20.9864 3.21783C20.8136 3.02031 20.7231 2.98739 20.1223 2.95447L19.4474 2.91332V2.15617C19.4474 1.20973 19.2582 0.78178 18.7068 0.493734C18.3529 0.304447 18.3364 0.304447 15.0856 0.304447C11.8266 0.304447 11.8183 0.304447 11.4562 0.493734Z"
      fill="#3CA2FF"
    />
    <path
      d="M1.61327 4.01611C1.25939 4.12309 0.946651 4.5099 0.889042 4.93785C0.864353 5.12714 0.847893 13.2418 0.864353 22.9778C0.889042 40.3757 0.889042 40.6803 1.05364 40.9354C1.38284 41.4868 0.675065 41.4539 11.9582 41.4374L22.1715 41.4127L21.6531 41.0671C21.365 40.8778 20.9288 40.5403 20.6655 40.3099L20.2046 39.8902H11.6867C5.96688 39.8902 3.09465 39.8655 2.93005 39.8079C2.79015 39.7585 2.64201 39.6351 2.5844 39.5363C2.51856 39.4046 2.48564 34.87 2.46918 21.661L2.45272 3.96672L2.16467 3.95026C2.00831 3.94204 1.76141 3.97496 1.61327 4.01611Z"
      fill="#3CA2FF"
    />
    <path
      d="M3.86828 3.98317C3.83536 4.00786 3.81067 11.7851 3.81067 21.2659V38.4911H11.4151H19.0277L18.6903 37.9397C18.2377 37.199 17.8344 36.2196 17.5793 35.2814C17.2995 34.2198 17.2254 32.2281 17.4229 31.1253C17.7768 29.2325 18.7315 27.2902 19.9248 26.0393L20.2211 25.7348H19.5051H18.7891V22.7309V19.7269H21.7518H24.7146V21.4141C24.7146 22.9695 24.7228 23.1012 24.8627 23.093C24.9368 23.093 25.266 23.0436 25.5787 22.986L26.1548 22.8872L26.1795 13.4064L26.196 3.92556H24.3936H22.5913L22.5584 5.4234C22.5337 6.73195 22.509 6.97885 22.3608 7.29982C22.1551 7.74423 21.8341 8.07343 21.3815 8.32032C21.0523 8.49315 21.0029 8.49315 15.2914 8.51784C11.3328 8.5343 9.41522 8.50961 9.16833 8.452C8.62515 8.32032 8.15605 7.94998 7.88446 7.44795C7.63757 7.01177 7.63757 7.00354 7.61288 5.46455L7.57996 3.92556H5.75292C4.74065 3.92556 3.89297 3.95025 3.86828 3.98317ZM24.7146 12.855V15.8589H21.7518H18.7891V12.855V9.85108H21.7518H24.7146V12.855ZM14.6247 11.2584C14.7893 11.3901 14.8387 11.4971 14.8387 11.7522C14.8387 12.139 14.6412 12.3694 14.2462 12.4435C14.098 12.4682 12.057 12.4846 9.7115 12.4682L5.44019 12.4435L5.24267 12.2131C5.02869 11.9579 4.99577 11.744 5.14391 11.4724C5.34966 11.0856 5.2509 11.0938 9.95017 11.0856C14.3367 11.0856 14.4108 11.0856 14.6247 11.2584ZM16.5999 13.5628C16.7151 13.7027 16.8139 13.8673 16.8139 13.9331C16.8139 14.1306 16.5835 14.5174 16.4435 14.575C16.3695 14.5997 13.8676 14.6244 10.8801 14.6244H5.44842L5.2509 14.4187C5.11922 14.2952 5.04515 14.1224 5.04515 13.966C5.04515 13.8097 5.11922 13.6368 5.2509 13.5134L5.44842 13.3076H10.9213H16.3859L16.5999 13.5628ZM14.419 20.9697C14.7235 21.0766 14.8387 21.2577 14.8387 21.6527C14.8387 21.8585 14.7811 21.9819 14.6247 22.1054C14.4108 22.2782 14.3285 22.2782 9.97485 22.2782C7.54704 22.2782 5.48957 22.2535 5.4155 22.2288C5.25913 22.163 5.04515 21.7762 5.04515 21.554C5.04515 21.3318 5.34143 20.9779 5.56364 20.9367C5.99982 20.8544 14.1639 20.8791 14.419 20.9697ZM16.5835 23.3234C16.855 23.595 16.8304 24.0559 16.5341 24.3028L16.3119 24.5003H10.9213H5.52249L5.28382 24.2616C5.15214 24.1299 5.04515 23.9324 5.04515 23.8254C5.04515 23.5785 5.2509 23.274 5.48957 23.1835C5.58009 23.1423 8.08198 23.1177 11.0283 23.1259L16.3942 23.1423L16.5835 23.3234ZM14.6247 30.9278C15.0362 31.2488 14.8552 31.9812 14.3285 32.1129C14.2215 32.1376 12.1805 32.1458 9.7938 32.1376L5.44019 32.1129L5.24267 31.8825C5.13568 31.759 5.04515 31.578 5.04515 31.4957C5.04515 31.2488 5.20975 30.9443 5.40727 30.8538C5.51426 30.7961 7.13554 30.7632 9.99131 30.7632C14.3367 30.755 14.4108 30.755 14.6247 30.9278ZM16.5999 33.2322C16.7151 33.3721 16.8139 33.5367 16.8139 33.6025C16.8139 33.8001 16.5835 34.1869 16.4435 34.2445C16.3695 34.2692 13.8676 34.2938 10.8801 34.2938H5.44842L5.23444 34.0799C5.06161 33.907 5.03692 33.8165 5.07807 33.5696C5.17683 32.9441 4.82295 32.9771 10.9295 32.9771H16.3859L16.5999 33.2322Z"
      fill="#3CA2FF"
    />
    <path
      d="M23.0275 10.7564C22.8053 10.8469 22.6324 11.0444 21.8012 12.2131C21.4062 12.7727 21.0605 13.2253 21.0358 13.2253C21.0111 13.2253 20.8877 13.1348 20.7478 13.0196C20.254 12.5999 19.6121 12.8632 19.6121 13.4805C19.6121 13.7356 19.6944 13.8508 20.2622 14.4022C21.258 15.3733 21.2663 15.3733 22.8546 13.1101C23.6529 11.9744 23.8916 11.5794 23.8916 11.3736C23.8916 10.9539 23.3978 10.6 23.0275 10.7564Z"
      fill="#3CA2FF"
    />
    <path
      d="M27.595 13.3652V22.8296L28.2534 22.8872C28.6155 22.9119 28.9612 22.9613 29.0353 22.986C29.1423 23.0353 29.1587 22.056 29.1587 13.8919C29.1587 3.95847 29.1834 4.45226 28.7143 4.14776C28.5991 4.07369 28.3028 3.98316 28.0559 3.95847L27.595 3.90086V13.3652Z"
      fill="#3CA2FF"
    />
    <path
      d="M22.8876 20.6322C22.8135 20.6816 22.3691 21.2495 21.9082 21.9079L21.0688 23.1012L20.8301 22.8955C20.5009 22.6156 20.254 22.5663 19.9577 22.7226C19.6861 22.8625 19.6121 23.0025 19.6121 23.3728C19.6121 23.5785 19.7273 23.7349 20.2128 24.2287C20.8219 24.8377 21.0523 24.9365 21.4556 24.7801C21.5296 24.7554 22.1057 23.9983 22.7394 23.1012C23.9986 21.3236 24.0727 21.1343 23.6859 20.7557C23.4801 20.5417 23.1345 20.4923 22.8876 20.6322Z"
      fill="#3CA2FF"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M27.6101 40.7067C32.1316 40.7067 35.7969 37.1942 35.7969 32.8613C35.7969 28.5284 32.1316 25.0159 27.6101 25.0159C23.0887 25.0159 19.4233 28.5284 19.4233 32.8613C19.4233 37.1942 23.0887 40.7067 27.6101 40.7067ZM22.9059 32.0003L22.8794 32.0237C22.7852 32.1053 22.7102 32.1894 22.6557 32.303C22.5685 32.5169 22.5585 32.7288 22.6381 32.9477C22.7279 33.146 22.8844 33.3061 23.0804 33.3972L23.1169 33.4137C23.2266 33.4637 23.3375 33.5095 23.45 33.5529C23.5941 33.6082 23.7366 33.6667 23.8788 33.7268C24.038 33.794 24.1972 33.8611 24.3586 33.923C24.4589 33.9611 24.5579 34.0014 24.6562 34.0445L24.7788 34.0978L24.8611 34.1337L24.8637 34.1348C24.9023 34.1521 24.9408 34.1694 24.9796 34.1863L25.0165 34.2022C25.0389 34.2125 25.0614 34.2226 25.0841 34.2322C25.118 34.2411 25.1322 34.2449 25.1455 34.2428C25.1551 34.2413 25.1642 34.2368 25.1799 34.229C25.203 34.2135 25.2261 34.1981 25.2495 34.183C25.2684 34.1708 25.2873 34.1584 25.3061 34.146L25.3375 34.1253L25.4448 34.0544L25.5234 34.0025L25.7376 33.8612L25.9652 33.711L26.3949 33.4273L26.8879 33.1018L27.9075 32.4288L27.9498 32.4009C27.6714 32.6945 27.393 32.9882 27.1147 33.2819L26.7088 33.7103L26.3521 34.0866L26.1638 34.2853L25.9836 34.4754L25.9173 34.5455L25.8247 34.6431L25.7968 34.6727C25.7523 34.7192 25.711 34.765 25.6735 34.8174C25.6492 34.8661 25.6553 34.897 25.6676 34.949C25.6742 34.9738 25.6805 34.9987 25.6865 35.0237L25.6962 35.0646C25.7135 35.1358 25.7284 35.2071 25.7423 35.279C25.7772 35.4587 25.8169 35.6372 25.8577 35.8157C25.8904 35.9586 25.9231 36.1014 25.9515 36.2453C25.9812 36.3972 26.0126 36.5487 26.046 36.6999L26.0629 36.776C26.0657 36.7891 26.0686 36.8023 26.0714 36.8154C26.1105 36.9984 26.1497 37.1812 26.2717 37.3294L26.2983 37.3598C26.3587 37.4299 26.4176 37.4932 26.496 37.5438C26.7155 37.6599 26.9351 37.6853 27.1751 37.618C27.2928 37.575 27.3694 37.547 27.433 37.5011C27.5516 37.4155 27.6253 37.2678 27.8362 36.8448L27.8794 36.7584L27.9704 36.5763C28.0363 36.4446 28.1023 36.313 28.1683 36.1814C28.2718 35.9753 28.3752 35.7692 28.4785 35.563C28.6096 35.3012 28.741 35.0395 28.8724 34.7778L29.1954 34.1344L29.216 34.0933L29.3188 33.8884L29.4848 33.5575L29.5689 33.3899L29.7563 33.0165L29.8583 32.8134L29.8789 32.7724C29.9609 32.6089 30.0429 32.4454 30.1246 32.2818L30.15 32.2308L30.2785 31.9733C30.36 31.8097 30.4416 31.6461 30.5247 31.4832L30.5703 31.394L30.5752 31.3844C30.6016 31.3324 30.6281 31.2804 30.6549 31.2286C30.7857 30.9748 30.9106 30.7316 30.8393 30.4389L30.8266 30.3942C30.8009 30.299 30.7524 30.2286 30.6911 30.1528L30.6644 30.1205C30.6016 30.0447 30.5406 29.9835 30.4576 29.9302C30.1665 29.7861 29.9185 29.8363 29.6208 29.9287L29.5278 29.9573L29.3318 30.0171C29.1928 30.0597 29.0536 30.1015 28.9142 30.143L28.6921 30.2094L28.6026 30.2361L28.3765 30.3037L28.3745 30.3043C28.0787 30.3927 27.7829 30.4812 27.4871 30.5694L26.8501 30.7597L26.8053 30.773L26.2841 30.929L26.0793 30.9904L26.0273 31.0059C25.739 31.0923 25.4506 31.1782 25.1621 31.2637C24.8938 31.3433 24.6257 31.4233 24.3579 31.5046C24.2018 31.552 24.0455 31.5989 23.8889 31.6449L23.7707 31.6796L23.5948 31.7313C23.5509 31.7441 23.5054 31.7562 23.4594 31.7684C23.2648 31.8201 23.0591 31.8747 22.9059 32.0003Z"
      fill="#3CA2FF"
    />
    <path
      d="M15.4072 1.39785C16.0359 1.56199 16.5073 2.07887 16.6191 2.73543C16.7518 3.51074 16.2419 4.32796 15.4876 4.55147L15.285 4.61084V4.83784C15.285 5.18009 15.1383 5.33376 14.9009 5.25343C14.7507 5.20105 14.7262 5.1312 14.7262 4.76799C14.7262 4.28954 14.838 4.13937 15.2885 3.99967C15.5015 3.93681 15.5714 3.8949 15.739 3.72727C15.966 3.50026 16.0533 3.29421 16.0533 2.98688C16.0533 2.68305 15.966 2.4735 15.7425 2.24999C15.512 2.0195 15.3095 1.93917 14.9742 1.93917C14.4678 1.94266 14.0697 2.28142 13.9544 2.80877C13.902 3.05324 13.8217 3.13356 13.6366 3.11959C13.5284 3.11261 13.476 3.08467 13.4201 3.01133C13.3572 2.92402 13.3537 2.89608 13.3887 2.69702C13.5458 1.77852 14.4992 1.16386 15.4072 1.39785Z"
      fill="white"
    />
    <path
      d="M15.2047 5.61315C15.3164 5.71792 15.313 5.89603 15.1977 6.00779C15.0266 6.18241 14.7262 6.06716 14.7262 5.82269C14.7262 5.56775 15.0196 5.43853 15.2047 5.61315Z"
      fill="white"
    />
  </svg>
);

export default QuestionnaireSentWithExpiry;
