import "../styles/globals.scss";
import RootLayout from 'src/app/layout';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <RootLayout>
      <Head>
        <title>ことぶきマンション:48度の天然温泉付き、福岡市南区のマンション</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" sizes="any" href="/favicons/favicon.ico" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#000000" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="utf-8" />
        <meta name="discription" content="ことぶきマンションは福岡市南区にある温泉付きのマンションです。各部屋で天然温泉が出るので毎日自分の好きな温度で一番風呂の天然温泉に入れます。春になると桜が咲きほこるので部屋によってはベランダから花見を楽しむこともできちゃいます。" />
        <meta name="google-site-verification" content="nSKZhji32Vuz-4HVCCj4qvHt6j2o8a8XuaQTSexZvxY" />
      </Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-2JNTF8034N"></script>
      <Component {...pageProps} />
    </RootLayout>
  )
}