
import React from "react";

const LeadCaptureIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg  {...props} viewBox="0 0 18 18"  xmlns="http://www.w3.org/2000/svg">
    <path d="M3.81492 8.60698C3.99564 8.29646 4.2094 8.02013 4.45962 7.77134C4.84128 7.39186 5.22095 7.01039 5.60165 6.62995C5.72056 6.51113 5.81971 6.50974 5.93799 6.62781C6.36384 7.05289 6.78924 7.47843 7.21416 7.90444C7.33089 8.02148 7.33056 8.11061 7.21139 8.23042C6.84903 8.59476 6.48868 8.96118 6.12152 9.32064C5.67939 9.75351 5.48433 10.2813 5.54473 10.8891C5.64026 11.8504 6.34348 12.5091 7.19612 12.6363C7.81417 12.7285 8.35622 12.5483 8.80391 12.1075C9.18517 11.732 9.56191 11.352 9.94076 10.9741C10.0654 10.8498 10.1582 10.8487 10.2817 10.9721C10.7055 11.395 11.129 11.8181 11.5521 12.2417C11.6719 12.3616 11.6723 12.4584 11.5533 12.5777C11.1604 12.9715 10.7703 13.3684 10.3723 13.7571C9.76911 14.3463 9.04959 14.7126 8.21665 14.8498C6.43392 15.1433 4.66335 14.274 3.79772 12.6862C3.53271 12.2001 3.35868 11.6846 3.30009 11.1351C3.20488 10.2423 3.36212 9.39692 3.81492 8.60698Z" />
    <path d="M11.3479 3.76546C11.6977 3.25539 12.3687 3.1209 12.872 3.45535C13.3734 3.78862 13.5182 4.46955 13.1933 4.96586C12.858 5.47786 12.1872 5.62808 11.6799 5.30479C11.1597 4.9733 11.012 4.29848 11.3479 3.76546Z" />
    <path d="M13.7835 6.62692C13.7654 6.51191 13.7446 6.40525 13.7313 6.29767C13.7231 6.23112 13.6973 6.19627 13.6268 6.18597C13.3733 6.14896 13.1203 6.10767 12.8675 6.06627C12.7031 6.03936 12.577 5.93882 12.5334 5.79238C12.7004 5.76177 12.8442 5.65363 13.0326 5.69773C13.2317 5.74432 13.4362 5.76856 13.639 5.7984C13.968 5.84681 14.0713 5.95061 14.1214 6.28287C14.1663 6.58071 14.2145 6.87806 14.2625 7.17542C14.2936 7.368 14.2208 7.46859 14.0186 7.46775C12.8488 7.4629 11.679 7.463 10.5093 7.46755C10.3189 7.46829 10.2387 7.36985 10.2674 7.18842C10.3186 6.86402 10.3715 6.53987 10.4244 6.21575C10.4648 5.96888 10.5873 5.84495 10.8356 5.80407C11.0944 5.76146 11.3537 5.722 11.6128 5.68174C11.6302 5.67904 11.6512 5.67527 11.6658 5.68203C11.7701 5.73017 11.8816 5.75748 12.0039 5.79686C11.9582 5.92944 11.866 6.00519 11.7451 6.04369C11.6069 6.0877 11.4608 6.09648 11.3181 6.12047C11.1724 6.14497 11.0266 6.16916 10.8805 6.19126C10.8387 6.19759 10.8122 6.21794 10.8059 6.258C10.7634 6.52836 10.7223 6.79893 10.6791 7.07938C11.7379 7.07938 12.7894 7.07938 13.8509 7.07938C13.8277 6.92574 13.8058 6.78032 13.7835 6.62692Z" />
    <path d="M14.7915 5.13691C15.0295 5.89297 14.8622 6.73563 14.6027 7.10741C14.5716 7.03354 14.5714 6.95844 14.5594 6.88607C14.5367 6.74923 14.5193 6.61134 14.4913 6.47561C14.4623 6.33471 14.507 6.19992 14.5163 6.06269C14.5449 5.64121 14.4585 5.24641 14.2665 4.87304C14.1378 4.62286 13.9663 4.40542 13.7529 4.2219C13.707 4.18245 13.6832 4.13762 13.6722 4.07662C13.6413 3.9064 13.5689 3.75029 13.481 3.5957C13.8797 3.64889 14.5555 4.44637 14.7915 5.13691Z" />
    <path d="M10.0136 4.53532C10.2704 4.12397 10.6066 3.80776 11.0337 3.57959C11.0526 3.62308 11.026 3.64513 11.0125 3.66844C10.9374 3.79782 10.8868 3.93665 10.859 4.08268C10.8481 4.1401 10.8244 4.18291 10.7816 4.22046C10.3933 4.56134 10.151 4.98643 10.0504 5.4928C9.99684 5.76217 9.99565 6.03239 10.0416 6.30259C10.0662 6.44706 10.0125 6.5826 9.99868 6.72258C9.98615 6.84943 9.95832 6.97477 9.92565 7.1018C9.77166 6.85011 9.68858 6.57538 9.65073 6.28925C9.56834 5.66649 9.68238 5.08095 10.0136 4.53532Z" />
    <path d="M11.5858 8.46915C11.1559 8.34914 10.7835 8.14309 10.4507 7.82974C10.5187 7.80585 10.5724 7.81778 10.6242 7.81402C10.8746 7.79579 11.0993 7.85003 11.3336 7.96021C12.0341 8.28967 12.7329 8.23854 13.4067 7.85935C13.4617 7.82839 13.515 7.81243 13.5777 7.81337C13.7393 7.81581 13.9011 7.81419 14.0773 7.81419C14.0349 7.89444 13.9736 7.93004 13.9219 7.97127C13.3675 8.4132 12.7331 8.59872 12.0287 8.549C11.8814 8.5386 11.7362 8.50807 11.5858 8.46915Z" />
    <path d="M8.46527 5.72546C8.53817 5.65259 8.60534 5.583 8.6754 5.51646C8.75995 5.43616 8.87578 5.43369 8.9516 5.50745C9.02697 5.58079 9.02896 5.70125 8.94771 5.78329C8.66078 6.07302 8.37313 6.36211 8.0819 6.6475C7.97121 6.75598 7.81931 6.71485 7.76041 6.56991C7.73114 6.49787 7.72646 6.41686 7.68279 6.35015C7.64106 6.35045 7.62397 6.38312 7.60153 6.40531C7.44905 6.55611 7.29811 6.70847 7.14592 6.85956C7.08128 6.92373 7.00387 6.94063 6.92187 6.90117C6.83897 6.86128 6.8083 6.789 6.81749 6.69853C6.8224 6.65014 6.85026 6.61521 6.88272 6.58278C7.13058 6.33515 7.37757 6.08662 7.62687 5.84044C7.75665 5.71228 7.91367 5.75316 7.97025 5.92721C7.9916 5.99289 8.01001 6.05953 8.0379 6.15298C8.18715 6.00374 8.32398 5.86691 8.46527 5.72546Z" />
    <path d="M12.0957 10.0781C12.0771 10.1004 12.0513 10.1111 12.0537 10.1448C12.116 10.1785 12.188 10.1895 12.2557 10.2124C12.4308 10.2713 12.4705 10.4253 12.341 10.5563C12.0965 10.8035 11.8502 11.0489 11.6035 11.294C11.5111 11.3859 11.3932 11.3915 11.3143 11.3115C11.2357 11.2317 11.243 11.1152 11.3352 11.022C11.4799 10.8759 11.6261 10.7313 11.7712 10.5857C11.7943 10.5626 11.8231 10.5438 11.8353 10.5045C11.787 10.4603 11.7211 10.4578 11.6626 10.4398C11.4556 10.3759 11.413 10.2186 11.5645 10.067C11.8337 9.7974 12.1036 9.52851 12.3729 9.25905C12.4118 9.22011 12.4513 9.1827 12.5095 9.17678C12.5962 9.16797 12.6641 9.19807 12.706 9.2766C12.7472 9.35379 12.7332 9.43764 12.6634 9.50842C12.4979 9.67636 12.3305 9.84252 12.1638 10.0094C12.1425 10.0308 12.1213 10.0523 12.0957 10.0781Z" />
    </svg>
);
export default LeadCaptureIcon;