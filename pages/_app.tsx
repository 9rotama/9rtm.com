import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout';
import Background from '../components/background/Background';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp