import * as S from './styles';

type FrontEndProps = {
    children: React.ReactNode;
}

const FrontEnd = ({children}: FrontEndProps) => {
    return(
        <S.Container>
            <h1>Teste frontend: {children}</h1>
        </S.Container>
    )
}

export default FrontEnd;