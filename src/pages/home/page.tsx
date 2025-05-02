import { Layout } from '@widgets/layout'

export function HomePage() {
  return (
    <Layout>
      <Layout.Header />
      <Layout.Main>
        <h1>Home page</h1>
      </Layout.Main>
      <Layout.Footer />
    </Layout>
  )
}
