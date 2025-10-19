// src/app/page.tsx
'use client';
import './../styles/globals.scss';
import style from '../styles/home.module.scss';
import PictureSlider from '@/components/slider';
import useImagePreloader from '@/controller/useImagePreloader';

export default function Home() {
  const outlooks = [
    '/kotobuki_apartment_outlook_accross_river.JPG',
    '/kotobuki_night_view.jpeg',
    '/kotobuki_riverside.jpeg',
  ];

  const imagesToPreload = [
    ...outlooks,
    '/hotspring_tab.jpeg',
    '/sakura_road.jpeg',
    '/room_inside_view_1.JPG',
  ];

  const imagesPreloaded = useImagePreloader(imagesToPreload);

  if (!imagesPreloaded) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <head>
        <title>
          博多温泉 ことぶきマンション | 48度の天然温泉付き、福岡市南区のマンション
        </title>
        <meta property="og:title" content="ことぶきマンション" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://kotobuki-apartment-site.vercel.app/kotobuki_apartment_outlook_accross_river.JPG"
        />
        <meta
          property="og:url"
          content="https://kotobuki-apartment-site.vercel.app/"
        />
        <meta
          property="og:description"
          content="福岡市南区にある温泉付きのマンションです。各部屋で天然温泉が出るので毎日自分の好きな温度で一番風呂の天然温泉に入れます。春になると桜が咲きほこるので部屋によってはベランダから花見を楽しむこともできちゃいます。"
        />
      </head>

      <main>
        <div className={style['home__body']}>
          <PictureSlider images={outlooks} delay={5000} />
          ことぶきマンションは福岡市南区にあるマンションです。<br />
          温泉や桜並木など、魅力的な特徴がいっぱいです！
          <div id="about_hot_spring" className={style['home__body__contents']}>
            <h2>部屋で楽しめる48℃の天然温泉付き！</h2>
            <img src="/hotspring_tab.jpeg" alt="温泉のタブ" />
            ことぶきマンションの一番の特徴と言えばこの天然温泉！<br />
            各部屋のお風呂で蛇口から天然温泉が出るようになっているので、毎日温泉が楽しめます。
          </div>

          <div id="sakura" className={style['home__body__contents']}>
            <h2>目の前に広がる桜並木</h2>
            <img src="/sakura_road.jpeg" alt="桜並木" />
            マンションの目の前には桜の木が植えられているので、春になると花見が楽しめます。<br />
            部屋によってはベランダから見えるので、プライベートな空間でのんびり花見が楽しめるかも！
          </div>

          <div id="room" className={style['home__body__contents']}>
            <h2>ちょっと広めの1LDK</h2>
            <img src="/room_inside_view_1.JPG" alt="部屋の内観" />
            40平米の広めのお部屋となっているので、一人で広々と使うことも、二人で一緒に住むこともできます。
          </div>
        </div>
      </main>
    </>
  );
}