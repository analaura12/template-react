import * as S from './style';
import ArrowTop from '../../assets/arrow-top.svg';

const CardActivity = () => {
    return(
        <S.Container>
            Activity
            <S.DivArrowFlex>
                <strong>18</strong>
                <img src={ArrowTop} alt="Seta" />
            </S.DivArrowFlex>
            <i className="circle1"></i>
            <i className="circle2"></i>
            <i className="circle3"></i>
        </S.Container>
    );
}

export default CardActivity;