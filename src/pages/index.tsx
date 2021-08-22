import Main from 'components/Main'

type Props = {
  title: string
}

export default function Home({ title = 'React Avançado' }: Props) {
  return <Main title={title} />
}
