import styled from '@emotion/styled';

export const UnOrdered = styled.ul`
  display: flex;
  height: 35px;
  background: linear-gradient(
      to right,
      rgb(0, 204, 255),
      rgb(153, 51, 255) 31%,
      rgb(230, 70, 182) 52%,
      rgb(255, 249, 170) 77%,
      rgb(0, 255, 153),
      rgb(0, 204, 255)
    )
    0% 50% / 200% 50%;
  list-style: none;
  margin-left: 14px;
`;

export const Link = styled.li`
  cursor: pointer;
  border-right: 4px solid black;
  height: 100%;
`;
export const Anchor = styled.a`
  display: inline-block;
  text-align: center;
  width: 100%;
  height: calc(100% - 4px);
  padding: 0 8px;
  padding-top: 8px;
  background-color: black;
  color: rgb(255, 255, 255);
  text-decoration: none;
  text-transform: capitalize;
`;