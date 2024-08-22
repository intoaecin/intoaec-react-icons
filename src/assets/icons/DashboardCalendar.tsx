
interface DashboardCalendarProps extends React.SVGProps<SVGSVGElement> {
    date: string;
    day: string;
  }

  const DashboardCalendar: React.FC<DashboardCalendarProps> = ({ date, day, ...props }) => (
    <svg {...props} viewBox="0 0 60 62"   xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_503_8824)">
<path d="M52.0707 62.0935C36.2868 62.1212 20.5422 62.1212 4.74266 62.1212C3.4174 61.5835 2.50559 60.6946 2.08981 59.3106C1.9849 58.9613 1.93102 58.6096 1.93155 58.245C1.93297 57.2617 1.9283 56.2784 1.93435 55.2951C1.93606 55.0181 1.90096 54.7275 2.1528 54.4878C2.41657 54.6383 2.4429 54.8929 2.52584 55.1148C3.14724 56.7773 4.36033 57.6101 6.03776 57.7857C6.34805 57.8181 6.66181 57.7977 6.97398 57.7977C21.8622 57.798 36.7504 57.7979 51.6386 57.7982C51.8727 57.7982 52.1069 57.7927 52.3952 57.8121C53.3358 57.8159 54.2221 57.8146 55.1574 57.774C55.5036 57.9243 55.4762 58.2077 55.4644 58.4625C55.397 59.9124 53.9899 62.0858 52.0707 62.0935Z" fill="#B5DBFF"/>
<path d="M17.0548 0.121094C17.2183 0.496809 17.6076 0.609088 17.8001 0.917277C18.178 1.5223 18.1869 2.1839 18.1666 2.86222C18.154 3.28061 18.1655 3.69977 18.1698 4.17476C18.3662 4.46349 18.3588 4.74783 18.3597 5.02701C18.3621 5.78573 18.3694 6.54449 18.3488 7.35833C18.3596 8.02444 18.3494 8.63172 18.1002 9.25842C17.1086 11.0245 15.2965 11.067 14.1821 9.35263C13.9052 8.74058 13.8567 8.14163 13.8878 7.474C13.9026 6.38629 13.7351 5.34748 14.022 4.27666C14.0574 3.68864 14.0894 3.1458 14.0565 2.6072C13.9943 1.58958 14.3524 0.795439 15.1333 0.162914C15.7449 0.121094 16.3724 0.121094 17.0548 0.121094Z" fill="#5B6B76"/>
<path d="M42.0285 4.27796C42.0644 3.70939 42.1095 3.18369 42.0617 2.66719C41.964 1.61305 42.3508 0.815765 43.1411 0.162789C43.7526 0.121094 44.3801 0.121094 45.0624 0.121094C45.0485 0.331964 45.2116 0.397258 45.3354 0.477699C45.9306 0.864192 46.1305 1.47216 46.1646 2.14259C46.1981 2.79918 46.173 3.45896 46.1768 4.17345C46.3726 4.4619 46.3666 4.74588 46.3674 5.02518C46.3698 5.78373 46.377 6.54232 46.3566 7.35597C46.3637 8.02128 46.364 8.62963 46.0976 9.25191C45.2968 10.9383 43.1771 11.0958 42.1739 9.36309C41.9235 8.7431 41.8596 8.1454 41.8955 7.47657C41.9096 6.38839 41.7443 5.34935 42.0285 4.27796Z" fill="#5B6B76"/>
<path d="M58.061 54.73C58.1109 56.0299 58.1889 57.3375 58.1057 58.6341C58.0209 59.9553 57.2468 60.901 56.1996 61.6103C55.967 61.7679 55.6617 61.8003 55.5126 62.0842C54.4114 62.1209 53.2761 62.1209 52.0859 62.1209C52.6023 61.8502 53.2235 61.7142 53.7371 61.2858C54.764 60.4294 55.3301 59.3657 55.3119 57.9359C55.2741 57.6568 55.4599 57.6185 55.5885 57.5613C56.7075 57.0636 57.4368 56.2063 57.8198 55.0203C57.8565 54.9065 57.9128 54.7995 58.061 54.73Z" fill="#98D0FF"/>
<path d="M2.07966 54.9883C2.04594 54.7709 2.03384 54.5883 2.03383 54.4056C2.03332 42.61 2.0338 30.8143 2.04271 18.9598C2.34323 18.6657 2.68956 18.7244 3.01893 18.7239C6.32839 18.7186 9.63786 18.7209 12.9473 18.7208C26.7762 18.7208 40.605 18.7204 54.4338 18.7229C54.8255 18.7229 55.2234 18.6745 55.6555 18.8502C56.0088 19.2225 55.9226 19.648 55.923 20.0448C55.9291 25.6991 55.9271 31.3534 55.927 37.0077C55.9269 42.7637 55.9238 48.5197 55.9292 54.2756C55.9306 55.7712 55.3295 56.9373 54.2017 57.8437C53.8362 58.1375 53.4283 58.324 52.9305 58.4537C37.2653 58.4878 21.6481 58.4923 6.03085 58.4898C4.1347 58.4895 2.42084 56.9565 2.07966 54.9883Z" fill="#EDF5FF"/>
<path d="M52.5503 57.998C52.5118 57.745 52.7333 57.7605 52.8791 57.6864C54.4715 56.8773 55.3206 55.6063 55.3187 53.7254C55.3073 42.1124 55.3131 30.4993 55.3507 18.79C56.1924 18.4679 57.0087 18.6011 57.8728 18.6195C57.9571 18.6501 57.9891 18.6669 58.062 18.7201C58.1103 18.8566 58.1243 18.9567 58.1243 19.0568C58.124 30.91 58.1228 42.7632 58.1128 54.6718C57.651 56.1923 56.8327 57.3121 55.3392 57.8505C54.4171 58.0919 53.5084 57.9756 52.5503 57.998Z" fill="#D5E8FE"/>
<path d="M42.0072 4.23397C42.0699 5.28517 42.0787 6.3395 42.0797 7.45006C41.7314 7.79351 41.3256 7.66674 40.945 7.69072C40.6537 7.70908 40.36 7.67791 40.0692 7.71843C39.7175 7.76741 39.4912 7.95724 39.4698 8.3403C39.4488 8.71578 39.6468 8.94955 39.975 9.0621C40.3338 9.1851 40.7099 9.11885 41.0783 9.14035C41.4624 9.16277 41.8602 9.0573 42.2643 9.29291C43.412 10.8329 44.874 10.8536 45.9051 9.3482C46.1801 9.09692 46.4831 9.14994 46.7719 9.13906C47.2392 9.12146 47.7119 9.19023 48.1731 9.08727C48.5584 9.00125 48.8022 8.75398 48.7697 8.31845C48.7385 7.89977 48.4608 7.75048 48.0923 7.70613C47.4769 7.63206 46.8435 7.81972 46.2027 7.5376C46.1603 6.45202 46.1563 5.39663 46.166 4.28537C48.2492 4.23543 50.3187 4.24138 52.4424 4.25467C53.8874 4.68722 54.8192 5.60967 55.3042 7.02046C55.443 7.42434 55.5126 7.8375 55.513 8.26603C55.5143 9.77932 55.5196 11.2926 55.5109 12.8059C55.5056 13.7436 55.368 13.8749 54.4463 13.8906C54.3291 13.8926 54.212 13.8918 54.0948 13.8918C37.1655 13.8919 20.2362 13.8923 3.30686 13.8891C2.94014 13.8891 2.56183 13.952 2.17177 13.7205C2.12263 11.7034 2.04011 9.72239 2.13456 7.75048C2.20342 6.313 3.20003 5.08115 4.57537 4.49078C5.03633 4.29291 5.52495 4.22477 6.0376 4.22867C8.67372 4.24872 11.3101 4.23731 14.0004 4.23319C14.0647 5.28458 14.0749 6.33968 14.0775 7.45108C13.7278 7.79196 13.3219 7.66763 12.9406 7.69102C12.6488 7.70892 12.3548 7.67838 12.0636 7.71834C11.7114 7.76665 11.4843 7.95578 11.4624 8.33957C11.441 8.71583 11.6395 8.94949 11.9682 9.06196C12.3274 9.18489 12.7041 9.11858 13.0729 9.14014C13.4574 9.16261 13.8557 9.05682 14.2607 9.29225C15.4049 10.8343 16.7958 10.859 17.9064 9.35481C18.1754 9.09551 18.4785 9.15054 18.7667 9.13939C19.2334 9.12134 19.7055 9.19044 20.1662 9.08747C20.551 9.00144 20.7943 8.75405 20.7624 8.31941C20.7318 7.90163 20.4552 7.75087 20.087 7.70616C19.4724 7.63154 18.8396 7.8194 18.2 7.53704C18.1576 6.45186 18.1532 5.39743 18.1608 4.28693C26.0997 4.23293 34.0264 4.23501 42.0072 4.23397Z" fill="#FF435B"/>
<path d="M55.3125 18.7575C55.0607 18.7612 54.8082 18.7377 54.5556 18.7377C37.1153 18.7358 19.675 18.7358 2.18117 18.7357C2.12264 17.6957 2.11767 16.6556 2.12085 15.5595C2.29 15.3232 2.50607 15.3082 2.72156 15.2958C2.9555 15.2824 3.18984 15.2876 3.42402 15.2876C20.2668 15.2874 37.1095 15.2874 53.9522 15.2876C55.5178 15.2876 55.5286 15.2884 55.5126 16.8897C55.5069 17.4682 55.621 18.0606 55.3477 18.6665C55.3059 18.7094 55.3118 18.7413 55.3125 18.7575Z" fill="#FF465D"/>
<path d="M55.3588 18.7271C55.3083 17.8011 55.2986 16.8928 55.3185 15.9852C55.3266 15.618 55.203 15.4564 54.8455 15.4993C54.7684 15.5085 54.6894 15.5004 54.6113 15.5004C37.153 15.5008 19.6947 15.5011 2.18276 15.5024C2.12373 14.9331 2.11831 14.3629 2.12122 13.7366C19.6366 13.6813 37.1436 13.6792 54.6506 13.6958C55.2086 13.6963 55.3359 13.5154 55.3243 12.9764C55.2922 11.4847 55.2578 9.98901 55.328 8.50014C55.4041 6.8877 54.3188 5.10332 52.7849 4.55464C52.6835 4.51835 52.6045 4.41512 52.506 4.30254C53.5317 4.28927 54.5693 4.08678 55.5961 4.46656C56.8793 4.94124 58.1445 6.51994 58.133 8.09278C58.1076 11.5748 58.1229 15.0572 58.113 18.5958C58.0937 18.6715 58.083 18.6908 58.0423 18.7223C57.1454 18.7379 56.2785 18.7414 55.3588 18.7271Z" fill="#E3374E"/>
<path d="M58.0337 18.7445C58.0232 18.7068 58.0412 18.6854 58.0851 18.6612C58.1041 18.6522 58.1169 18.7047 58.1097 18.7307C58.1025 18.7567 58.0552 18.7545 58.0337 18.7445Z" fill="#FF465D"/>
<path d="M14.2935 9.27514C13.6195 9.3229 12.9393 9.33173 12.2594 9.3216C11.6303 9.31224 11.2532 8.96435 11.25 8.41713C11.2463 7.76233 11.5245 7.51136 12.2685 7.50696C12.8319 7.50363 13.3954 7.50649 14.0144 7.50702C14.0967 8.08712 14.0598 8.67538 14.2935 9.27514Z" fill="#E3374E"/>
<path d="M18.1552 7.56034C18.7832 7.50619 19.4043 7.50106 20.0253 7.5076C20.6872 7.51457 20.9588 7.76428 20.9768 8.36393C20.9935 8.92173 20.6249 9.30542 20.0206 9.32007C19.3611 9.33606 18.7009 9.32384 17.9863 9.32372C18.109 8.76809 18.1739 8.19741 18.1552 7.56034Z" fill="#E3374E"/>
<path d="M42.2969 9.27648C41.6232 9.32385 40.9439 9.33221 40.2649 9.32174C39.6374 9.31207 39.2605 8.96383 39.2574 8.41734C39.2536 7.76304 39.5318 7.51163 40.2737 7.5071C40.8365 7.50366 41.3992 7.5064 42.0171 7.50644C42.1012 8.08673 42.0622 8.67621 42.2969 9.27648Z" fill="#E3374E"/>
<path d="M46.158 7.56165C46.7864 7.50721 47.4082 7.50166 48.03 7.50788C48.6942 7.51452 48.9661 7.76341 48.9843 8.36305C49.0013 8.92222 48.633 9.30579 48.0274 9.32033C47.367 9.33618 46.706 9.32376 45.9902 9.32304C46.1136 8.76791 46.1765 8.19776 46.158 7.56165Z" fill="#E3374E"/>

<g className="d-flex justify-content-center align-items-center">
<text x="20" y="38" className="fs-5 fw-600"  fill="black">{date}</text>
      <text x="4" y="55" style={{fontSize:'0.6rem'}} className=" fw-600" fill="black">{day}</text>
  </g>
{/* <path d="M10.54 49.05V54.06C10.54 54.68 10.35 55.17 9.97 55.53C9.59667 55.89 9.10333 56.07 8.49 56.07C7.87667 56.07 7.38 55.89 7 55.53C6.62667 55.17 6.44 54.68 6.44 54.06H7.59C7.59667 54.3667 7.67333 54.61 7.82 54.79C7.97333 54.97 8.19667 55.06 8.49 55.06C8.78333 55.06 9.00667 54.97 9.16 54.79C9.31333 54.6033 9.39 54.36 9.39 54.06V49.05H10.54ZM12.0145 53.22C12.0145 52.6667 12.1279 52.1767 12.3545 51.75C12.5879 51.3233 12.9012 50.9933 13.2945 50.76C13.6945 50.52 14.1345 50.4 14.6145 50.4C15.0479 50.4 15.4245 50.4867 15.7445 50.66C16.0712 50.8267 16.3312 51.0367 16.5245 51.29V50.49H17.6745V56H16.5245V55.18C16.3312 55.44 16.0679 55.6567 15.7345 55.83C15.4012 56.0033 15.0212 56.09 14.5945 56.09C14.1212 56.09 13.6879 55.97 13.2945 55.73C12.9012 55.4833 12.5879 55.1433 12.3545 54.71C12.1279 54.27 12.0145 53.7733 12.0145 53.22ZM16.5245 53.24C16.5245 52.86 16.4445 52.53 16.2845 52.25C16.1312 51.97 15.9279 51.7567 15.6745 51.61C15.4212 51.4633 15.1479 51.39 14.8545 51.39C14.5612 51.39 14.2879 51.4633 14.0345 51.61C13.7812 51.75 13.5745 51.96 13.4145 52.24C13.2612 52.5133 13.1845 52.84 13.1845 53.22C13.1845 53.6 13.2612 53.9333 13.4145 54.22C13.5745 54.5067 13.7812 54.7267 14.0345 54.88C14.2945 55.0267 14.5679 55.1 14.8545 55.1C15.1479 55.1 15.4212 55.0267 15.6745 54.88C15.9279 54.7333 16.1312 54.52 16.2845 54.24C16.4445 53.9533 16.5245 53.62 16.5245 53.24ZM21.9519 50.4C22.3852 50.4 22.7719 50.49 23.1119 50.67C23.4585 50.85 23.7285 51.1167 23.9219 51.47C24.1152 51.8233 24.2119 52.25 24.2119 52.75V56H23.0819V52.92C23.0819 52.4267 22.9585 52.05 22.7119 51.79C22.4652 51.5233 22.1285 51.39 21.7019 51.39C21.2752 51.39 20.9352 51.5233 20.6819 51.79C20.4352 52.05 20.3119 52.4267 20.3119 52.92V56H19.1719V50.49H20.3119V51.12C20.4985 50.8933 20.7352 50.7167 21.0219 50.59C21.3152 50.4633 21.6252 50.4 21.9519 50.4ZM28.7437 54.45C29.3837 53.8967 29.887 53.4433 30.2537 53.09C30.627 52.73 30.937 52.3567 31.1837 51.97C31.4303 51.5833 31.5537 51.1967 31.5537 50.81C31.5537 50.41 31.457 50.0967 31.2637 49.87C31.077 49.6433 30.7803 49.53 30.3737 49.53C29.9803 49.53 29.6737 49.6567 29.4537 49.91C29.2403 50.1567 29.127 50.49 29.1137 50.91H28.0137C28.0337 50.15 28.2603 49.57 28.6937 49.17C29.1337 48.7633 29.6903 48.56 30.3637 48.56C31.0903 48.56 31.657 48.76 32.0637 49.16C32.477 49.56 32.6837 50.0933 32.6837 50.76C32.6837 51.24 32.5603 51.7033 32.3137 52.15C32.0737 52.59 31.7837 52.9867 31.4437 53.34C31.1103 53.6867 30.6837 54.09 30.1637 54.55L29.7137 54.95H32.8837V55.9H28.0237V55.07L28.7437 54.45ZM33.8852 52.26C33.8852 51.1067 34.0785 50.2067 34.4652 49.56C34.8585 48.9067 35.5318 48.58 36.4852 48.58C37.4385 48.58 38.1085 48.9067 38.4952 49.56C38.8885 50.2067 39.0852 51.1067 39.0852 52.26C39.0852 53.4267 38.8885 54.34 38.4952 55C38.1085 55.6533 37.4385 55.98 36.4852 55.98C35.5318 55.98 34.8585 55.6533 34.4652 55C34.0785 54.34 33.8852 53.4267 33.8852 52.26ZM37.9652 52.26C37.9652 51.72 37.9285 51.2633 37.8552 50.89C37.7885 50.5167 37.6485 50.2133 37.4352 49.98C37.2218 49.74 36.9052 49.62 36.4852 49.62C36.0652 49.62 35.7485 49.74 35.5352 49.98C35.3218 50.2133 35.1785 50.5167 35.1052 50.89C35.0385 51.2633 35.0052 51.72 35.0052 52.26C35.0052 52.82 35.0385 53.29 35.1052 53.67C35.1718 54.05 35.3118 54.3567 35.5252 54.59C35.7452 54.8233 36.0652 54.94 36.4852 54.94C36.9052 54.94 37.2218 54.8233 37.4352 54.59C37.6552 54.3567 37.7985 54.05 37.8652 53.67C37.9318 53.29 37.9652 52.82 37.9652 52.26ZM40.9214 54.45C41.5614 53.8967 42.0647 53.4433 42.4314 53.09C42.8047 52.73 43.1147 52.3567 43.3614 51.97C43.6081 51.5833 43.7314 51.1967 43.7314 50.81C43.7314 50.41 43.6347 50.0967 43.4414 49.87C43.2547 49.6433 42.9581 49.53 42.5514 49.53C42.1581 49.53 41.8514 49.6567 41.6314 49.91C41.4181 50.1567 41.3047 50.49 41.2914 50.91H40.1914C40.2114 50.15 40.4381 49.57 40.8714 49.17C41.3114 48.7633 41.8681 48.56 42.5414 48.56C43.2681 48.56 43.8347 48.76 44.2414 49.16C44.6547 49.56 44.8614 50.0933 44.8614 50.76C44.8614 51.24 44.7381 51.7033 44.4914 52.15C44.2514 52.59 43.9614 52.9867 43.6214 53.34C43.2881 53.6867 42.8614 54.09 42.3414 54.55L41.8914 54.95H45.0614V55.9H40.2014V55.07L40.9214 54.45ZM45.9229 54.48V53.62L49.2829 48.8H50.6629V53.49H51.5929V54.48H50.6629V56H49.5429V54.48H45.9229ZM49.5929 49.96L47.2329 53.49H49.5929V49.96Z" fill="#192A3E"/>
<path d="M19.46 34.9C20.74 33.7933 21.7467 32.8867 22.48 32.18C23.2267 31.46 23.8467 30.7133 24.34 29.94C24.8333 29.1667 25.08 28.3933 25.08 27.62C25.08 26.82 24.8867 26.1933 24.5 25.74C24.1267 25.2867 23.5333 25.06 22.72 25.06C21.9333 25.06 21.32 25.3133 20.88 25.82C20.4533 26.3133 20.2267 26.98 20.2 27.82H18C18.04 26.3 18.4933 25.14 19.36 24.34C20.24 23.5267 21.3533 23.12 22.7 23.12C24.1533 23.12 25.2867 23.52 26.1 24.32C26.9267 25.12 27.34 26.1867 27.34 27.52C27.34 28.48 27.0933 29.4067 26.6 30.3C26.12 31.18 25.54 31.9733 24.86 32.68C24.1933 33.3733 23.34 34.18 22.3 35.1L21.4 35.9H27.74V37.8H18.02V36.14L19.46 34.9ZM29.463 34.96V33.24L36.183 23.6H38.943V32.98H40.803V34.96H38.943V38H36.703V34.96H29.463ZM36.803 25.92L32.083 32.98H36.803V25.92Z" fill="#192A3E"/> */}
</g>
<defs>
<clipPath id="clip0_503_8824">
<rect width="60" height="62"  />
</clipPath>
</defs>
</svg>
);

export default DashboardCalendar;
