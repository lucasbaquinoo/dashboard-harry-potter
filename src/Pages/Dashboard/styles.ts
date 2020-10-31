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
`;

export const Card = styled.div`
  width: calc(100% - 100px);
  height: 250px;
  background: transparent;
  padding: 10px;
  display: flex;

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    div {
      -webkit-backdrop-filter: blur(30px);
      backdrop-filter: blur(30px);
      background-color: transparent;
      transition: border-radius 1s;
      border-radius: 2rem;
      border: 1px solid #4D4D4D;
    }

    div:hover {
      border-radius: 0;
      border: 1px solid #efbe11;
    }
  }

  div + div {
    margin-left: 20px;
  }

  div.smallCard {
    width: 350px;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-around;

    div.contentCard {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 0;

      img {
        margin: 20px 0;
        flex: 1;
      }

      p {
        font-size: 20px;
        margin: 20px 0;
      }
    }

    span {
      margin-bottom: 20px;
      font-size: 70px;
      font-weight: 700;
      color: #efbe11;
    }
  }

  div.bigCard {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    div.contentSideCard {
      height: 100%;
      flex: 1;
      margin: 0;
      border-radius: 0;

      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-around;

      div.contentCard {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 0;

        img {
          margin: 20px 0;
          flex: 1;
        }

        p {
          font-size: 20px;
          margin: 20px 0;
        }
      }

      span {
      margin-bottom: 20px;
      font-size: 70px;
      font-weight: 700;
      color: #efbe11;
    }
    }
  }
`;

export const Graphs = styled.div`
  margin-top: 20px;
  width: calc(100% - 100px);
  flex: 1;
  background: transparent;
  padding: 10px;
  display: flex;
  align-items: center;
  overflow: hidden;

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    div {
      -webkit-backdrop-filter: blur(30px);
      backdrop-filter: blur(30px);
      background-color: transparent;
      transition: .2s ease-in;
      border-radius: 1rem;
      border: 1px solid #4D4D4D;
    }

    div:hover {
      border-radius: 0;
    }
  }

  div + div {
    margin-left: 20px;
  }

  div.table {
    flex: 1;
    height: 480px;
    display: flex;
  }

  div.pizza {
    width: 350px;
    height: 480px;
  }
`;