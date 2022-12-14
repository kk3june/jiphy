const StoriesSvg = () => {
  return (
    <svg
      width="22"
      height="25"
      viewBox="0 0 22 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient x1="7.986%" y1="100%" x2="92.014%" y2="0%" id="stories">
          <stop stopColor="#6157FF" offset="0%" />
          <stop stopColor="#93F" offset="100%" />
        </linearGradient>
      </defs>
      <path
        d="M20.25 25a.75.75 0 110 1.5H7.75a.75.75 0 110-1.5h12.5zm2-3a.75.75 0 110 1.5H5.75a.75.75 0 110-1.5h16.5zm-.134-19.5C23.709 2.5 25 3.719 25 5.222v12.556c0 1.503-1.291 2.722-2.884 2.722H5.884C4.291 20.5 3 19.281 3 17.778V5.222C3 3.719 4.291 2.5 5.884 2.5zm-.215 2.2H6.099c-.496 0-.899.371-.899.83v11.94c0 .459.403.83.9.83h15.8c.497 0 .9-.371.9-.83V5.53c0-.459-.403-.83-.9-.83z"
        transform="translate(-3 -2)"
        fill="url(#stories)"
        fillRule="nonzero"
      />
    </svg>
  );
};

export default StoriesSvg;
