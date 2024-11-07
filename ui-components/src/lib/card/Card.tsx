import React, { RefObject } from 'react';
import { AppreciationData } from "../interfaces/data.interface";
import { CardContainer } from '../cardContainer';

export const Card = ({
  achieverName,
  position,
  projectName,
  dateOfAchievement = 'January 10, 2024',
  achievementSummary
}: Partial<AppreciationData>) => {

  return (
    <CardContainer id='card' classList="relative overflow-clip grid content-center justify-center w-[686px] h-[504px]">
      <div className='bg-white w-[545px] h-[425px] flex flex-col content-center justify-items-center items-center justify-center'>
        <h3 className='lato-regular w-fit text-[23px]'>Certificate of achievement</h3>
        <h2 className='lato-regular w-fit text-[42px]'>{achieverName ?? 'Daniel Ramírez'}</h2>
        <h4 className='lato-regular w-fit text-[20px] capitalize'>{position ?? 'Fullstack Web Development'}</h4>

        <h5 className='lato-regular w-fit text-[11px] pt-[9px]'>{projectName ? projectName + ',' : ''} {dateOfAchievement}</h5>

        <p className='lato-regular w-fit max-w-[337px] pt-[23px] text-[16px] text-[#6D6D6D] text-center'>{achievementSummary ?? 'Thanks for everything'}</p>

        <svg className='absolute top-0 right-0' width="687" height="528" viewBox="0 0 687 528" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="46.2069" cy="564.635" rx="115.016" ry="442.971" transform="rotate(-48.6012 46.2069 564.635)" fill="#96E8DA" />
          <ellipse cx="651.381" cy="101.532" rx="139.7" ry="183.674" transform="rotate(-7.87761 651.381 101.532)" fill="#C19BFF" />
          <circle cx="444.27" cy="54.756" r="2.48891" fill="#5800FF" />
          <circle cx="460.448" cy="54.756" r="2.48891" fill="#5800FF" />
          <circle cx="476.626" cy="54.756" r="2.48891" fill="#5800FF" />
          <circle cx="492.804" cy="54.756" r="2.48891" fill="#5800FF" />
          <circle cx="508.982" cy="54.756" r="2.48891" fill="#5800FF" />
          <circle cx="525.159" cy="54.756" r="2.48891" fill="#5800FF" />
          <circle cx="541.337" cy="54.756" r="2.48891" fill="#5800FF" />
          <circle cx="557.515" cy="54.756" r="2.48891" fill="#5800FF" />
          <circle cx="573.693" cy="54.756" r="2.48891" fill="#5800FF" />
          <circle cx="589.871" cy="54.756" r="2.48891" fill="#5800FF" />
          <circle cx="444.27" cy="69.6894" r="2.48891" fill="#5800FF" />
          <circle cx="460.448" cy="69.6894" r="2.48891" fill="#5800FF" />
          <circle cx="476.626" cy="69.6894" r="2.48891" fill="#5800FF" />
          <circle cx="492.804" cy="69.6894" r="2.48891" fill="#5800FF" />
          <circle cx="508.982" cy="69.6894" r="2.48891" fill="#5800FF" />
          <circle cx="525.159" cy="69.6894" r="2.48891" fill="#5800FF" />
          <circle cx="541.337" cy="69.6894" r="2.48891" fill="#5800FF" />
          <circle cx="557.515" cy="69.6894" r="2.48891" fill="#5800FF" />
          <circle cx="573.693" cy="69.6894" r="2.48891" fill="#5800FF" />
          <circle cx="589.871" cy="69.6894" r="2.48891" fill="#5800FF" />
          <circle cx="444.27" cy="84.6228" r="2.48891" fill="#5800FF" />
          <circle cx="460.448" cy="84.6228" r="2.48891" fill="#5800FF" />
          <circle cx="476.626" cy="84.6228" r="2.48891" fill="#5800FF" />
          <circle cx="492.804" cy="84.6228" r="2.48891" fill="#5800FF" />
          <circle cx="508.982" cy="84.6228" r="2.48891" fill="#5800FF" />
          <circle cx="525.159" cy="84.6228" r="2.48891" fill="#5800FF" />
          <circle cx="541.337" cy="84.6228" r="2.48891" fill="#5800FF" />
          <circle cx="557.515" cy="84.6228" r="2.48891" fill="#5800FF" />
          <circle cx="573.693" cy="84.6228" r="2.48891" fill="#5800FF" />
          <circle cx="589.871" cy="84.6228" r="2.48891" fill="#5800FF" />
          <circle cx="444.27" cy="99.5563" r="2.48891" fill="#5800FF" />
          <circle cx="460.448" cy="99.5563" r="2.48891" fill="#5800FF" />
          <circle cx="476.626" cy="99.5563" r="2.48891" fill="#5800FF" />
          <circle cx="492.804" cy="99.5563" r="2.48891" fill="#5800FF" />
          <circle cx="508.982" cy="99.5563" r="2.48891" fill="#5800FF" />
          <circle cx="525.159" cy="99.5563" r="2.48891" fill="#5800FF" />
          <circle cx="541.337" cy="99.5563" r="2.48891" fill="#5800FF" />
          <circle cx="557.515" cy="99.5563" r="2.48891" fill="#5800FF" />
          <circle cx="573.693" cy="99.5563" r="2.48891" fill="#5800FF" />
          <circle cx="589.871" cy="99.5563" r="2.48891" fill="#5800FF" />
          <circle cx="-1.10762" cy="457.451" r="2.48891" fill="#5800FF" />
          <circle cx="15.0703" cy="457.451" r="2.48891" fill="#5800FF" />
          <circle cx="31.2482" cy="457.451" r="2.48891" fill="#5800FF" />
          <circle cx="47.4261" cy="457.451" r="2.48891" fill="#5800FF" />
          <circle cx="63.604" cy="457.451" r="2.48891" fill="#5800FF" />
          <circle cx="79.7819" cy="457.451" r="2.48891" fill="#5800FF" />
          <circle cx="95.9597" cy="457.451" r="2.48891" fill="#5800FF" />
          <circle cx="112.138" cy="457.451" r="2.48891" fill="#5800FF" />
          <circle cx="128.316" cy="457.451" r="2.48891" fill="#5800FF" />
          <circle cx="144.493" cy="457.451" r="2.48891" fill="#5800FF" />
          <circle cx="-1.10762" cy="472.384" r="2.48891" fill="#5800FF" />
          <circle cx="15.0703" cy="472.384" r="2.48891" fill="#5800FF" />
          <circle cx="31.2482" cy="472.384" r="2.48891" fill="#5800FF" />
          <circle cx="47.4261" cy="472.384" r="2.48891" fill="#5800FF" />
          <circle cx="63.604" cy="472.384" r="2.48891" fill="#5800FF" />
          <circle cx="79.7819" cy="472.384" r="2.48891" fill="#5800FF" />
          <circle cx="95.9597" cy="472.384" r="2.48891" fill="#5800FF" />
          <circle cx="112.138" cy="472.384" r="2.48891" fill="#5800FF" />
          <circle cx="128.316" cy="472.384" r="2.48891" fill="#5800FF" />
          <circle cx="144.493" cy="472.384" r="2.48891" fill="#5800FF" />
          <circle cx="-1.10762" cy="487.318" r="2.48891" fill="#5800FF" />
          <circle cx="15.0703" cy="487.318" r="2.48891" fill="#5800FF" />
          <circle cx="31.2482" cy="487.318" r="2.48891" fill="#5800FF" />
          <circle cx="47.4261" cy="487.318" r="2.48891" fill="#5800FF" />
          <circle cx="63.604" cy="487.318" r="2.48891" fill="#5800FF" />
          <circle cx="79.7819" cy="487.318" r="2.48891" fill="#5800FF" />
          <circle cx="95.9597" cy="487.318" r="2.48891" fill="#5800FF" />
          <circle cx="112.138" cy="487.318" r="2.48891" fill="#5800FF" />
          <circle cx="128.316" cy="487.318" r="2.48891" fill="#5800FF" />
          <circle cx="144.493" cy="487.318" r="2.48891" fill="#5800FF" />
          <circle cx="-1.10762" cy="502.251" r="2.48891" fill="#5800FF" />
          <circle cx="15.0703" cy="502.251" r="2.48891" fill="#5800FF" />
          <circle cx="31.2482" cy="502.251" r="2.48891" fill="#5800FF" />
          <circle cx="47.4261" cy="502.251" r="2.48891" fill="#5800FF" />
          <circle cx="63.604" cy="502.251" r="2.48891" fill="#5800FF" />
          <circle cx="79.7819" cy="502.251" r="2.48891" fill="#5800FF" />
          <circle cx="95.9597" cy="502.251" r="2.48891" fill="#5800FF" />
          <circle cx="112.138" cy="502.251" r="2.48891" fill="#5800FF" />
          <circle cx="128.316" cy="502.251" r="2.48891" fill="#5800FF" />
          <circle cx="144.493" cy="502.251" r="2.48891" fill="#5800FF" />
          <ellipse cx="-14.6784" cy="179.246" rx="115.016" ry="151.22" transform="rotate(-7.87761 -14.6784 179.246)" fill="#F9F3AD" />
          <mask id="path-84-inside-1_73_57" fill="white">
            <path d="M80.0276 338.313C67.3345 346.505 50.4035 342.856 42.2113 330.163C34.0191 317.47 37.6679 300.539 50.361 292.346C63.0542 284.154 79.9852 287.803 88.1774 300.496C96.3696 313.189 92.7208 330.12 80.0276 338.313ZM56.7947 302.315C49.6069 306.954 47.5407 316.541 52.1797 323.729C56.8187 330.917 66.4062 332.983 73.594 328.344C80.7818 323.705 82.848 314.118 78.209 306.93C73.57 299.742 63.9824 297.676 56.7947 302.315Z" />
          </mask>
          <path d="M80.0276 338.313C67.3345 346.505 50.4035 342.856 42.2113 330.163C34.0191 317.47 37.6679 300.539 50.361 292.346C63.0542 284.154 79.9852 287.803 88.1774 300.496C96.3696 313.189 92.7208 330.12 80.0276 338.313ZM56.7947 302.315C49.6069 306.954 47.5407 316.541 52.1797 323.729C56.8187 330.917 66.4062 332.983 73.594 328.344C80.7818 323.705 82.848 314.118 78.209 306.93C73.57 299.742 63.9824 297.676 56.7947 302.315Z" stroke="#42D4BD" strokeWidth="24.8891" mask="url(#path-84-inside-1_73_57)" />
          <mask id="path-85-inside-2_73_57" fill="white">
            <path d="M143.6 127.136C148.811 126.417 153.704 124.211 157.693 120.782C161.682 117.353 164.598 112.846 166.091 107.802C167.584 102.758 167.591 97.3901 166.11 92.3421C164.63 87.2942 161.726 82.7802 157.745 79.341C153.765 75.9017 148.877 73.6831 143.668 72.9511C138.459 72.219 133.149 73.0046 128.375 75.2136C123.601 77.4225 119.565 80.9613 116.751 85.4057C113.937 89.8501 112.464 95.0117 112.508 100.272L124.372 100.171C124.347 97.1922 125.181 94.2693 126.774 91.7526C128.368 89.2358 130.653 87.2319 133.357 85.9811C136.06 84.7302 139.067 84.2853 142.017 84.6999C144.967 85.1144 147.735 86.3707 149.989 88.3183C152.243 90.2658 153.887 92.822 154.726 95.6805C155.564 98.539 155.56 101.579 154.715 104.435C153.869 107.291 152.218 109.843 149.959 111.785C147.7 113.727 144.929 114.976 141.979 115.384L143.6 127.136Z" />
          </mask>
          <path d="M143.6 127.136C148.811 126.417 153.704 124.211 157.693 120.782C161.682 117.353 164.598 112.846 166.091 107.802C167.584 102.758 167.591 97.3901 166.11 92.3421C164.63 87.2942 161.726 82.7802 157.745 79.341C153.765 75.9017 148.877 73.6831 143.668 72.9511C138.459 72.219 133.149 73.0046 128.375 75.2136C123.601 77.4225 119.565 80.9613 116.751 85.4057C113.937 89.8501 112.464 95.0117 112.508 100.272L124.372 100.171C124.347 97.1922 125.181 94.2693 126.774 91.7526C128.368 89.2358 130.653 87.2319 133.357 85.9811C136.06 84.7302 139.067 84.2853 142.017 84.6999C144.967 85.1144 147.735 86.3707 149.989 88.3183C152.243 90.2658 153.887 92.822 154.726 95.6805C155.564 98.539 155.56 101.579 154.715 104.435C153.869 107.291 152.218 109.843 149.959 111.785C147.7 113.727 144.929 114.976 141.979 115.384L143.6 127.136Z" stroke="#42D4BD" strokeWidth="24.8891" mask="url(#path-85-inside-2_73_57)" />
        </svg>


        <svg className='absolute right-[81px] bottom-[62px]' width="80" height="111" viewBox="0 0 80 111" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.8">
            <path d="M33.9632 70.1464L45.9221 110.295L55.7452 96.2L71.9757 102.179L59.1625 63.3119L33.9632 70.1464Z" fill="#CD3414" />
            <path d="M47.6143 107.867L48.4311 106.695L48.6889 107.54L47.6143 107.867Z" fill="#FFDD7D" />
            <path d="M47.4269 107.923L41.4872 88.4571L42.2485 86.4352L48.4311 106.694L47.6142 107.866L47.4269 107.923Z" fill="#F09F36" />
            <path d="M67.5032 101.097L67.3009 100.457L68.3291 100.836L67.5032 101.097Z" fill="#FFDD7D" />
            <path d="M68.329 100.836L67.3009 100.456L57.6786 69.917L58.9376 69.5213L68.7607 100.699L68.329 100.836Z" fill="#F09F36" />
            <path d="M19.4413 65.8748L6.62827 103.033L24.1401 97.0543L33.1088 110.722L48.0578 71.0007L19.4413 65.8748Z" fill="#FE5629" />
            <path d="M11.9534 101.53L11.4828 101.375L12.0688 101.176L11.9534 101.53ZM23.3352 66.5718L22.0238 66.338L22.6593 64.3896L23.9123 64.7988L23.3352 66.5718Z" fill="#FFDD7D" />
            <path d="M11.4828 101.375L10.6989 101.121L22.0238 66.3381L23.3352 66.5719L12.0688 101.176L11.4828 101.375Z" fill="#FFAA3D" />
            <path d="M31.1994 107.811L30.3511 107.513L30.5789 106.866L31.1994 107.811Z" fill="#FFDD7D" />
            <path d="M44.7936 70.4163L43.4792 70.181L44.0187 68.6462L45.2627 69.0839L44.7936 70.4163Z" fill="#F09F36" />
            <path d="M31.595 107.951L31.1994 107.811L30.5789 106.865L43.479 70.1809L44.7934 70.4162L31.595 107.951Z" fill="#FFAA3D" />
            <path d="M0.648285 39.823C0.648285 38.0265 5.02539 36.5624 5.27153 34.8348C5.52405 33.0634 1.73778 30.4308 2.23056 28.7501C2.7319 27.0392 7.34423 26.8697 8.0756 25.2713C8.81452 23.6544 5.92886 20.0564 6.88303 18.5755C7.84324 17.0846 12.3157 18.2229 13.4727 16.8881C14.6313 15.5517 12.8731 11.2854 14.2101 10.1269C15.544 8.96836 19.5174 11.3139 21.0071 10.3552C22.4895 9.39987 21.9979 4.81121 23.6151 4.07246C25.2131 3.34042 28.3595 6.71014 30.0721 6.2098C31.7528 5.71618 32.5805 1.17622 34.3501 0.92437C36.0795 0.677559 38.1463 4.79945 39.9411 4.79945C41.7377 4.79945 43.8045 0.677559 45.5338 0.92437C47.3035 1.17622 48.1329 5.71618 49.8119 6.2098C51.5228 6.71181 54.6708 3.34042 56.2692 4.07246C57.8861 4.81121 57.3942 9.39987 58.8767 10.3552C60.3676 11.3139 64.3401 8.96836 65.6749 10.1269C67.0114 11.2854 65.2535 15.5517 66.412 16.8881C67.5688 18.2229 72.0416 17.0846 73.002 18.5755C73.9556 20.0564 71.0695 23.6561 71.8082 25.2713C72.5402 26.8697 77.1524 27.0392 77.6544 28.7501C78.1464 30.4308 74.3603 33.0634 74.6121 34.8348C74.8589 36.5624 79.2343 38.0265 79.2343 39.823C79.2343 41.6178 74.8589 43.0836 74.6121 44.8112C74.3603 46.5809 78.1464 49.2135 77.6544 50.8942C77.1524 52.6051 72.5402 52.7747 71.8082 54.373C71.0695 55.9899 73.9556 59.588 73.002 61.0705C72.0416 62.5598 67.5688 61.4231 66.412 62.7562C65.2518 64.0944 67.0114 68.359 65.6749 69.5191C64.3401 70.676 60.3676 68.3304 58.8767 69.2908C57.3942 70.2445 57.8861 74.8348 56.2692 75.5735C54.6708 76.3039 51.5228 72.9342 49.8119 73.4362C48.1329 73.9281 47.3035 78.4681 45.5338 78.7216C43.8045 78.9668 41.7377 74.8449 39.9411 74.8449C38.1463 74.8449 36.0795 78.9668 34.3501 78.7216C32.5805 78.4681 31.7528 73.9281 30.0721 73.4362C28.3595 72.9342 25.2131 76.3039 23.6136 75.5735C21.9979 74.8331 22.4895 70.2445 21.0071 69.2908C19.5158 68.3304 15.544 70.676 14.2086 69.5191C12.8718 68.359 14.6313 64.0944 13.4727 62.7562C12.3157 61.4231 7.84322 62.5598 6.88285 61.0705C5.92868 59.588 8.81452 55.9899 8.0756 54.373C7.34423 52.7747 2.7319 52.6051 2.23056 50.8942C1.73778 49.2135 5.52405 46.5809 5.27153 44.8112C5.02539 43.0836 0.648285 41.6178 0.648285 39.823Z" fill="#FCAB28" />
            <path d="M8.33643 39.823C8.33643 22.3675 22.486 8.21664 39.9415 8.21664C57.3986 8.21664 71.5478 22.3675 71.5478 39.823C71.5478 57.2785 57.3986 71.4277 39.9415 71.4277C22.486 71.4277 8.33643 57.2785 8.33643 39.823Z" fill="#FFCE45" />
            <path d="M39.9422 8.85555C22.8684 8.85555 8.97736 22.746 8.97736 39.8214C8.97736 56.8951 22.8684 70.7855 39.9422 70.7855C57.0175 70.7855 70.908 56.8951 70.908 39.8214C70.908 22.746 57.0175 8.85555 39.9422 8.85555ZM39.9422 72.067C31.33 72.067 23.2318 68.7135 17.1414 62.6218C11.0504 56.5318 7.69601 48.4335 7.69601 39.8214C7.69601 31.2076 11.0504 23.1093 17.1414 17.0193C23.2318 10.9276 31.33 7.57404 39.9422 7.57404C48.556 7.57404 56.6542 10.9276 62.7459 17.0193C68.8343 23.1093 72.1895 31.2076 72.1895 39.8214C72.1895 48.4335 68.8343 56.5318 62.7459 62.6218C56.6542 68.7135 48.556 72.067 39.9422 72.067Z" fill="#FCAB28" />
            <path d="M17.3055 39.822C17.3055 27.3203 27.4407 17.1851 39.9425 17.1851C52.4442 17.1851 62.5794 27.3203 62.5794 39.822C62.5794 52.3238 52.4442 62.459 39.9425 62.459C27.4407 62.459 17.3055 52.3238 17.3055 39.822Z" fill="#FFD733" />
            <path d="M58.7361 30.8528C58.7361 29.4108 58.5941 28.0034 58.3369 26.6371C54.2286 20.9148 47.5233 17.1851 39.9425 17.1851C27.4407 17.1851 17.3055 27.3203 17.3055 39.822C17.3055 41.2625 17.4459 42.6714 17.7047 44.0377C21.813 49.7584 28.5183 53.4897 36.0991 53.4897C48.6009 53.4897 58.7361 43.3545 58.7361 30.8528Z" fill="#FFE266" />
            <path d="M39.9428 17.8447C27.825 17.8447 17.9659 27.7038 17.9659 39.8216C17.9659 51.9394 27.825 61.7985 39.9428 61.7985C52.0622 61.7985 61.9213 51.9394 61.9213 39.8216C61.9213 27.7038 52.0622 17.8447 39.9428 17.8447ZM39.9428 63.1177C27.0974 63.1177 16.6467 52.667 16.6467 39.8216C16.6467 26.9762 27.0974 16.5255 39.9428 16.5255C52.7882 16.5255 63.2389 26.9762 63.2389 39.8216C63.2389 52.667 52.7882 63.1177 39.9428 63.1177Z" fill="#FCAB28" />
            <path d="M24.3033 20.9917L26.2976 15.9538L28.1634 21.0615L31.6589 23.0557L28.0936 24.9232L26.0994 31.3292L24.232 24.8534L20.738 22.8591L24.3033 20.9917Z" fill="white" />
          </g>
        </svg>

      </div>
    </CardContainer>
  );
};
