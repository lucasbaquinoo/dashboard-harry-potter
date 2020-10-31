import styled from 'styled-components';

import background from '../../assets/background.jpg'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-image: url(${background});
  background-size: cover;
`;

export const SideBar = styled.div`
  width: 250px;
  min-height: 90vh;
  border: 1px solid #4D4D4D;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    & {
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      background-color: rgba(0, 0, 0, 0.5);  
    }
  }

  img {
    width: 150px;
  }

  ul {
    list-style: none;
    cursor: pointer;

    li {
      padding: 10px;
      border: 0.01rem solid transparent;
      margin-bottom: 50px;
      display: flex;
      flex-direction: row;
      align-items: center;
      transition: .2s ease-in-out;

      &:hover p {
        color: #efbe11;
      }

      img {
        width: 46px;
        padding: 5px;
        transition: color 4s;
      }

      p {
        font-size: 14px;
        font-weight: 500;
        margin-left: 5px;
      }
    }

  }

  div.settings {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 700;

    cursor: pointer;

    &:hover img {
      transform: rotate(220deg);
    }

    img {
      margin-right: 15px;
      width: 30px;
      transition: transform 2s;
    }
  }
`;

export const Content = styled.div`
  width: 80%;
  min-height: 90vh;
  background: #282C31;
  border: 1px solid #4D4D4D;
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    & {
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      background-color: rgba(0, 0, 0, 0.5);  
    }
  }

  h2, p {
    margin: 10px 0;
  }

  img {
    border-radius: 50%;
  }
`;
