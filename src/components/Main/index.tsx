import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem avançado e React avançado escrito ao lado."
    />

    <S.Title>{title}</S.Title>

    <S.Title>{description}</S.Title>

    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para a tela com código."
    />
  </S.Wrapper>
)

export default Main
