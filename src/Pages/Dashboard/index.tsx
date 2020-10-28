import React from 'react';
import { Container, SideBar, Content } from './styles';

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
      <Content />
    </Container>
  );
}

export default Dashboard;