import React from 'react';
import { Container, SideBar, Content, Card, Graphs } from './styles';


import logoHP from '../../assets/logoHP.png';
import characters from '../../assets/characters.svg';
import wand from '../../assets/wand.svg';
import spells from '../../assets/spells.svg';
import centaur from '../../assets/centaur.svg';
import settings from '../../assets/settings.svg';


 const Dashboard: React.FC = () => {
  return (
    <Container>
      <SideBar>
        <img src={logoHP} alt="Logo Harry Potter"/>
        <div>
          <ul>
            <li>
              <img src={characters} alt="Personagens"/>
              <p>Personagens</p>
            </li>
            <li>
              <img src={wand} alt="Varinhas"/>
              <p>Varinhas</p>
            </li>
            <li>
              <img src={spells} alt="Feitiços"/>
              <p>Feitiços</p>
            </li>
            <li>
              <img src={centaur} alt="Criaturas mágicos"/>
              <p>Criaturas mágicas</p>
            </li>
          </ul>
        </div>
        <div className="settings">
          <img src={settings} alt="Configurações"/>
          <p>Configurações</p>
        </div>
      </SideBar>
      <Content>
        <Card>
          <div className="smallCard">
            <div className="contentCard">
              <img src={characters} alt="Personagens"/>
              <p>Personagens</p>
            </div>

            <span>36</span>
          </div>

          <div className="bigCard">
            <div className="contentSideCard">
              <div className="contentCard">
                <img src={wand} alt="Personagens"/>
                <p>Varinhas</p>
              </div>

              <span>36</span>
            </div>

            <div className="contentSideCard">
              <div className="contentCard">
                <img src={spells} alt="Personagens"/>
                <p>Feitiços</p>
              </div>

              <span>36</span>
            </div>
          </div>

          <div className="smallCard">
            <div className="contentCard">
              <img src={centaur} alt="Personagens"/>
              <p>Criaturas mágicas</p>
            </div>

            <span>36</span>
          </div>
        </Card>
        <Graphs>
          <div className="table"></div>
          <div className="pizza"></div>
        </Graphs>
      </Content>
    </Container>
  );
}

export default Dashboard;