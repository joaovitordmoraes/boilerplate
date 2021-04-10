import * as S from './styles'

const Main = ({
  title = 'Boilerplate Next.Js',
  description = 'TypeScript, React.Js, Next.Js and Styled Components'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
