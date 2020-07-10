import styled from 'styled-components';
import { darken } from 'polished';


export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

  width: fit-content;
  height: 90%;
`;

export const Header = styled.header`
  background-color: #D3D3D3;

  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;
  
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45%;
    border-style: none;

    background-color: #D3D3D3;
    color: #282c34;
    font-family: 'Roboto-regular', sans-serif;
    font-weight: bold;
    font-size: 18px;
    
    transition: color 0.5s;

    &:hover {
      color: ${darken(0.10, '#48D1CC')}
    }
  }
`;

export const BoxFetch = styled.div`
  width: 60%;
  height: 90%;

  background-color: #DCDCDC;
  border-radius: 8px;
  margin-bottom: 40px;
  padding: 20px 20px;
  margin: 20px 400px;

`;

export const ContainerText = styled.div`
  width: 90%;
  height: 80%;

  .lottie1 {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 500px;
    height: 500px;
  }
`;

export const Title = styled.div`
  display: flex;
  width: 100%;

  font-family: 'Roboto-Medium', sans-serif;
  color: #282c34;
  font-size: 25px;
  font-weight: bold;
`;

export const Paragraph = styled.p`
  display: flex;
  width: 100%;
  font-family: 'Roboto-Medium', sans-serif;
  color: #282c34;
  font-size: 19px;
`;
