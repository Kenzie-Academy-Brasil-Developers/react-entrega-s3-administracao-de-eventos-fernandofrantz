import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  margin: 0px;
  padding: 0px;
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px;
  margin: 20px;

  width: 150px;
  height: 400px;

  border: 2px solid black;
  border-radius: 10px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-align: center;
  }

  img {
    width: 30%;
  }
`;
