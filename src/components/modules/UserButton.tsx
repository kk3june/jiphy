import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const UserButton = (props: any) => {
  return (
    <a
      href={props.user.replace(' ', '')}
      css={css`
        display: flex;
        width: 100%;
        margin-left: 10px;
        text-decoration: none;
      `}
    >
      <UserSvg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        fill="white"
      >
        <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" />
      </UserSvg>
      <UserButtonItem>{props.user}</UserButtonItem>
    </a>
  );
};

const UserButtonItem = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 8px 0;
  white-space: nowrap;
  color: white;
  background-color: rgb(62, 62, 62);
  border-style: none;
  text-transform: capitalize;
  font-size: 16px;
  border-radius: 0 5px 5px 0;
`;
const UserSvg = styled.svg`
  width: 36px;
  padding: 0 10px;
  background-color: rgb(82, 82, 82);
  border-radius: 5px 0 0 5px;
`;

export default UserButton;
