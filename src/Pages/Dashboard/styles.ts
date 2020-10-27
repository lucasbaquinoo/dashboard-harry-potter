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
  height: 90vh;
  background: #282C31;
  border: 1px solid #4D4D4D;
  border-radius: 10px;

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
`;

export const Content = styled.div`
  width: 80%;
  height: 90vh;
  background: #282C31;
  border: 1px solid #4D4D4D;
  border-radius: 10px;
`;