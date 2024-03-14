import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: grid;
  grid-template-rows: 1fr;
  width: 90%;
  height: 100%;
  border-radius: 6px;
  box-shadow: 4px 4px 25px -2px rgba(0, 0, 0, 0.3);
`

export const SideMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8em;
  color: #fff;
`;


export const MenuItem = styled.ul`
  list-style: none;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
`;
export const MenuList = styled.li`
  font-size: small;
  padding: 5px;
  cursor: pointer;
  border-bottom: 1px solid #ccc;
  &:hover {
    background-color: #105b72c2;
  }
  a {
    color: black;
    font-size: 13px;
  }
`;