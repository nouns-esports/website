import { JSXElement } from "solid-js";

function Icon(props: { href: string; children: JSXElement }) {
  return (
    <a href={props.href} draggable={false}>
      {props.children}
    </a>
  );
}

export function Twitch() {
  return (
    <Icon href="https://www.twitch.tv/nounsesports">
      <svg
        class="fill-white hover:fill-[#9146FF] cursor-pointer"
        width="28"
        height="33"
        viewBox="0 0 28 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.136 6.788H15.424V13.636H13.136M19.424 6.788H21.712V13.636H19.424M5.712 0.5L0 6.212V26.788H6.848V32.5L12.576 26.788H17.136L27.424 16.5V0.5M25.136 15.364L20.576 19.924H16L12 23.924V19.924H6.848V2.788H25.136V15.364Z" />
      </svg>
    </Icon>
  );
}

export function Twitter() {
  return (
    <Icon href="https://twitter.com/nounsesports">
      <svg
        class="fill-white hover:fill-[#00acee] cursor-pointer"
        width="33"
        height="27"
        viewBox="0 0 33 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M32.4193 3.55882C31.2417 4.09412 29.9722 4.44588 28.657 4.61412C30.0028 3.80353 31.0428 2.51882 31.5322 0.974118C30.2628 1.73882 28.8558 2.27412 27.3722 2.58C26.164 1.26471 24.4664 0.5 22.5393 0.5C18.9452 0.5 16.0087 3.43647 16.0087 7.06118C16.0087 7.58118 16.0699 8.08588 16.177 8.56C10.7322 8.28471 5.88401 5.66941 2.65695 1.70824C2.09107 2.67176 1.76989 3.80353 1.76989 4.99647C1.76989 7.27529 2.91695 9.29412 4.69107 10.4412C3.60519 10.4412 2.59578 10.1353 1.70872 9.67647V9.72235C1.70872 12.9035 3.97225 15.5647 6.96989 16.1612C6.00748 16.4246 4.9971 16.4612 4.01813 16.2682C4.43353 17.572 5.24707 18.7129 6.34439 19.5304C7.44171 20.3479 8.76764 20.8009 10.1358 20.8259C7.81662 22.6618 4.94189 23.6542 1.98401 23.64C1.46401 23.64 0.944011 23.6094 0.424011 23.5482C3.32989 25.4141 6.78636 26.5 10.4875 26.5C22.5393 26.5 29.1617 16.4976 29.1617 7.82588C29.1617 7.53529 29.1617 7.26 29.1464 6.96941C30.4311 6.05176 31.5322 4.88941 32.4193 3.55882Z" />
      </svg>
    </Icon>
  );
}

export function Youtube() {
  return (
    <Icon href="https://www.youtube.com/@nounsesports">
      <svg
        class="fill-white hover:fill-[red] cursor-pointer"
        width="35"
        height="25"
        viewBox="0 0 35 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.1336 17.6429L23.0307 12.5L14.1336 7.35714V17.6429ZM33.9507 4.22C34.1736 5.02571 34.3279 6.10571 34.4307 7.47714C34.5507 8.84857 34.6022 10.0314 34.6022 11.06L34.705 12.5C34.705 16.2543 34.4307 19.0143 33.9507 20.78C33.5222 22.3229 32.5279 23.3171 30.985 23.7457C30.1793 23.9686 28.705 24.1229 26.4422 24.2257C24.2136 24.3457 22.1736 24.3971 20.2879 24.3971L17.5622 24.5C10.3793 24.5 5.90503 24.2257 4.13931 23.7457C2.59645 23.3171 1.60217 22.3229 1.1736 20.78C0.95074 19.9743 0.796454 18.8943 0.693597 17.5229C0.573597 16.1514 0.522169 14.9686 0.522169 13.94L0.419312 12.5C0.419312 8.74571 0.693597 5.98571 1.1736 4.22C1.60217 2.67714 2.59645 1.68286 4.13931 1.25429C4.94503 1.03143 6.41931 0.877143 8.68217 0.774285C10.9107 0.654285 12.9507 0.602857 14.8365 0.602857L17.5622 0.5C24.745 0.5 29.2193 0.774286 30.985 1.25429C32.5279 1.68286 33.5222 2.67714 33.9507 4.22Z" />
      </svg>
    </Icon>
  );
}

export function Discord() {
  return (
    <Icon href="https://discord.gg/nounsesports">
      <svg
        class="fill-white hover:fill-[#7289da] cursor-pointer"
        width="35"
        height="27"
        viewBox="0 0 35 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M29.5707 2.66076C27.41 1.65352 25.0706 0.922464 22.6337 0.500075C22.6124 0.499391 22.5911 0.503401 22.5715 0.511822C22.5518 0.520242 22.5343 0.532869 22.52 0.548812C22.2276 1.08492 21.8864 1.78349 21.659 2.3196C19.0743 1.9297 16.4457 1.9297 13.861 2.3196C13.6336 1.76724 13.2924 1.08492 12.9838 0.548812C12.9675 0.516321 12.9188 0.500075 12.87 0.500075C10.4332 0.922464 8.11003 1.65352 5.9331 2.66076C5.91686 2.66076 5.90061 2.677 5.88437 2.69325C1.46552 9.30527 0.247093 15.7386 0.848185 22.1069C0.848185 22.1394 0.864431 22.1719 0.896922 22.1881C3.82116 24.3326 6.63167 25.6322 9.40969 26.4933C9.45843 26.5095 9.50717 26.4933 9.52341 26.4608C10.1732 25.5673 10.7581 24.625 11.2617 23.634C11.2942 23.569 11.2617 23.5041 11.1967 23.4878C10.2707 23.1304 9.39345 22.708 8.53242 22.2206C8.46744 22.1881 8.46744 22.0907 8.51618 22.0419C8.69488 21.912 8.87358 21.7658 9.05229 21.6358C9.08478 21.6033 9.13352 21.6033 9.16601 21.6195C14.7545 24.1701 20.7817 24.1701 26.3053 21.6195C26.3378 21.6033 26.3865 21.6033 26.419 21.6358C26.5977 21.782 26.7764 21.912 26.9551 22.0582C27.0201 22.1069 27.0201 22.2044 26.9389 22.2369C26.0941 22.7405 25.2006 23.1466 24.2746 23.5041C24.2096 23.5203 24.1933 23.6015 24.2096 23.6503C24.7294 24.6413 25.3143 25.5835 25.9479 26.477C25.9966 26.4933 26.0453 26.5095 26.0941 26.4933C28.8883 25.6322 31.6989 24.3326 34.6231 22.1881C34.6556 22.1719 34.6718 22.1394 34.6718 22.1069C35.3866 14.7476 33.4859 8.36302 29.6356 2.69325C29.6194 2.677 29.6032 2.66076 29.5707 2.66076ZM12.1065 18.2242C10.4332 18.2242 9.03604 16.6808 9.03604 14.7801C9.03604 12.8793 10.4007 11.336 12.1065 11.336C13.8285 11.336 15.1932 12.8956 15.1769 14.7801C15.1769 16.6808 13.8123 18.2242 12.1065 18.2242ZM23.4298 18.2242C21.7565 18.2242 20.3593 16.6808 20.3593 14.7801C20.3593 12.8793 21.724 11.336 23.4298 11.336C25.1518 11.336 26.5165 12.8956 26.5002 14.7801C26.5002 16.6808 25.1518 18.2242 23.4298 18.2242Z" />
      </svg>
    </Icon>
  );
}
