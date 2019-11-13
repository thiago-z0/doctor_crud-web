import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 0.8s linear infinite;
      }
    `}
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
    img {
    width: 60px;
    }
    h1 {
      font-size: 30px;
      color: #093087;
    }
`;

export const Search = styled.form`
  display: flex;
  flex-direction: row;
  float: right !important;

  a{
    flex: 1;
    border: 0px solid #555;
    padding: 10px 40px;
    border-radius: 4px;
    font-size: 16px;
    float: right;
    color: #222;
    background-color:#fff;
    box-shadow: 0 0 8px rgba(34,67,80, 0.4);
    transition: all 0.2s linear;

  &:hover{
    background-color:#093087;
    color: #fff;
    transition: all 0.2s linear;
  }

  }

  input{
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }

  button{
    flex: 1;
    border: 0px solid #555;
    padding: 10px 40px;
    border-radius: 4px;
    font-size: 16px;
    float: right;
    color: #222;
    background-color:#fff;
    box-shadow: 0 0 8px rgba(34,67,80, 0.4);
    transition: all 0.2s linear;

  &:hover{
    background-color:#093087;
    color: #fff;
    transition: all 0.2s linear;
  }}
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

h1 {
  font-size: 25px;
  font-family: Arial, Helvetica, sans-serif;
  color: #555;
}
`;

export const Content = styled.div`

 ul {
  margin-top: 100px;
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 30px;
  color: #444;

  
  li{
    display: flex;
    min-height: 180px;
    flex-direction: column;
    background-color: #fff;
    border-radius: 4px;
    padding: 10px;
    transition: all 0.2s linear;
    border: 1px #f5f5f5 solid;
    box-shadow: 0 0 15px rgba(34,67,80, 0.1);

    span{
      font-size: 14px;
      color: #888;
    }

    h4 {
      border-bottom: 1px #999 solid;
      margin: 5px 0px;
    }

    p{
    font-size: 12px;
    margin: 3px;
    border-radius: 4px;
    float: right;
    }

    &:hover{
      cursor: pointer;
      box-shadow: 0 0 15px rgba(34,67,80, 0.4);
      background-color: #fff;
      transition: all 0.2s linear;
    }
  }}

`;
