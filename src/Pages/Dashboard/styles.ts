import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const SideBar = styled.div`
  width: 200px;
  min-height: 90vh;
  background: #282C31;
  border: 1px solid #4D4D4D;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

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

  .graphs {
    margin-top: 20px;
    width: calc(100% - 100px);
    flex: 1;
    background: red;
  }
`;

export const Card = styled.div`
  width: calc(100% - 100px);
  height: 250px;
  background: red;
  padding: 10px;
  display: flex;

  div + div {
    margin-left: 20px;
  }

  div.smallCard {
    width: 350px;
    height: 100%;
    background: green;
  }

  div.bigCard {
    flex: 1;
    height: 100%;
    background: green;
  }
`;