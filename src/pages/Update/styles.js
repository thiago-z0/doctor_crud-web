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

export const Form = styled.form`

form{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 30px 10px;

  div{
    width: 50%;
    float: left;

    h3{
    margin-top: 15px;
    margin-bottom: 5px;
    }

    input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
    width: 350px;

    &:focus{
      box-shadow: 0 0 8px rgba(34,67,80, 0.4);
    }
    }
  }

  p{
    width: 50%;
    float: right;

    h3{
      margin-top: 15px;
      width:100%;
      margin-bottom: 5px;
    }
    span{
      margin-bottom: 10px;
      color: #888;
    }

    div{
      width: 100%;
      margin-top:5px;

      input{
      cursor: pointer;
      height: 17px;
      width: 17px;
    }
    label{
      margin: 10px;
    }
    }


  }

}
button {
    flex: 1;
    border: 0px solid #555;
    padding: 10px 40px;
    border-radius: 4px;
    font-size: 16px;
    float: right;
    background-color:#fff;
    box-shadow: 0 0 8px rgba(34,67,80, 0.4);
    transition: all 0.2s linear;

  &:hover{
    background-color:#093087;
    color: #fff
    transition: all 0.2s linear;
  }
  }

`;

