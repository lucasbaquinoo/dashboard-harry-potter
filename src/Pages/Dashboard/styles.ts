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
  width: 200px;
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

    li {
      margin-bottom: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    img {
      width: 46px;
    }

    p {
      margin-top: 30px;
      font-weight: 700;
    }
  }

  div.settings {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 700;

    img {
      margin-right: 15px;
      width: 30px;
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
      border: 0.3rem solid rgba(230, 237, 28, 0.2);
      transition: .2s;
    }

    div:hover {
      border: 0.1rem solid rgba(230, 237, 28, 0.2);
    }
  }

  div + div {
    margin-left: 20px;
  }

  div.smallCard {
    width: 350px;
    height: 100%;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  div.bigCard {
    flex: 1;
    height: 100%;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
      border: 0.3rem solid rgba(230, 237, 28, 0.2);
      transition: .2s;
    }

    div:hover {
      border: 0.1rem solid rgba(230, 237, 28, 0.2);
    }
  }

  div + div {
    margin-left: 20px;
  }

  div.table {
    flex: 1;
    height: 480px;
    /* background: green; */
  }

  div.pizza {
    width: 350px;
    height: 480px;
    /* background: green; */
  }
`;