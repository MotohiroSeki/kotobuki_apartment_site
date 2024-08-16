'use client';
import './../styles/globals.scss'
import HomeStyle from '../styles/home.module.scss'
import AccessStyle from '../styles/access.module.scss'
import PictureSlider from '@/components/slider';
import Head from 'next/head';

export default function Home() {
  const routeOhashiWestSide = [
    '/access_route/ohashi_west_exit.png',
    '/access_route/ohashi_west_route.png',
    '/access_route/right_turn_1.png',
    '/access_route/route385.png',
    '/access_route/left_turn_1.png',
    '/access_route/yokote_new_street.png',
    '/access_route/right_turn_2.png',
    '/access_route/river_side_walk.png',
    '/access_route/arrive.png'
  ];
  return (
    <>
      <Head>
        <title>ことぶきマンションへのアクセス</title>
        <meta property="og:title" content="ことぶきマンションへのアクセス" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://kotobuki-apartment-site.vercel.app/access_route/ohashi_west_route.png" />
        <meta property="og:url" content="https://kotobuki-apartment-site.vercel.app/access" />
        <meta property="og:description" content="最寄駅の大橋駅からことぶきマンションまでの行き方です。内見に来られる際や、お友達を部屋に招待するときなどにご活用ください。" />
      </Head>
      <main>
        <div className={HomeStyle["home__body"]}>
          <h2 style={{ marginTop: 0 }}>
            西鉄大橋駅からのアクセス方法
          </h2>
          <div style={{ marginBottom: '60px' }} >
            ことぶきマンションの最寄駅は西鉄大橋駅となっております。<br />
            大橋駅からは以下のルートでお越しになれます。
          </div>
          <PictureSlider images={routeOhashiWestSide} delay={5000} />
        </div>
      </main>
    </>
  )
}