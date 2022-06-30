import { useState } from 'react'
import FrontEnd from '../templates/frontend/index'
import * as S from './style';
import HeroHeaderImage from '../assets/woman-site.png';
import CardActivity from '../molecules/CardActivity';

function Main() {

  return (
    <FrontEnd>
      <S.Container>
        <div>
          <h1>Design driven development of your web product</h1>
          <p>We are a full service digital agency that builds immesive user experience.</p>
          <button>Contact Us</button>
        </div>
        <div>
          <S.ColumnImage>
            <CardActivity></CardActivity>
            <img src={HeroHeaderImage} alt="Hero Header Image" />
          </S.ColumnImage>
        </div>
      </S.Container>
    </FrontEnd>
  )
}

export default Main;
