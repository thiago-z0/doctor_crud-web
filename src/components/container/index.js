import styled from 'styled-components';

const Container = styled.div`
  max-width: 900px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 20px auto;

  a{

    border: 0px solid #555;
    padding: 10px 40px;
    border-radius: 4px;
    font-size: 16px;
    color: #222;
    background-color:#fff;
    box-shadow: 0 0 8px rgba(34,67,80, 0.4);
    transition: all 0.2s linear;
    text-decoration: none;

  &:hover{
    background-color:#093087;
    color: #fff;
    transition: all 0.2s linear;
  }

  }

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;


export default Container;
