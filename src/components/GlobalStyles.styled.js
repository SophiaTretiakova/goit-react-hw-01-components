import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
    font-family: 'Roboto', 'Segoe UI', sans-serif;
  margin: 0;
  background: linear-gradient(45deg, #ca7de3, #5f2c82);
  font-family: sans-serif;
  font-weight: 100;
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

table {
  width: 800px;
  border-collapse: collapse;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
      margin-right: auto;
    margin-left: auto;
}

th,
td {
  padding: 15px;
  background-color: rgba(255,255,255,0.2);
  color: #fff;
}

th {
  text-align: left;
}

thead {
  th {
    background-color: #55608f;
  }
}

tbody {
  tr {
    &:hover {
      background-color: rgba(255,255,255,0.3);
    }
  }
  td {
    position: relative;
    &:hover {
      &:before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: -9999px;
        bottom: -9999px;
        background-color: rgba(255,255,255,0.2);
        z-index: -1;
      }
    }
  }
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

p{
    margin: 0px;
    font-size: 20px;
}

/* #root {
  background-color: lightgray;
} */
`;

export const UsersDataCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

export const GlobalContainer = styled.div`
  padding: 50px 0px;
`;
