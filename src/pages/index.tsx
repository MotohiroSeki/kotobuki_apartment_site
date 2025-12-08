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

  const highlightContents = [
    {
      id: 'hotspring',
      title: '部屋で楽しめる48℃の天然温泉付き！',
      text: 'お風呂の蛇口から天然温泉が出るので、自分の好きな温度で毎日一番風呂が楽しめます。',
      image: '/hotspring_tab.jpeg',
      align: 'left' as const,
    },
    {
      id: 'sakura',
      title: '春には桜並木が目の前に',
      text: 'マンション前の桜並木は春の名物。ベランダからお花見気分を味わえるお部屋もあります。',
      image: '/sakura_road.jpeg',
      align: 'right' as const,
    },
    {
      id: 'night',
      title: '幻想的な夜景',
      text: 'ライトアップされた建物がリバーサイドに映える幻想的な夜景を楽しめます。',
      image: '/kotobuki_night_view.jpeg',
      align: 'left' as const,
    },
    {
      id: 'river',
      title: '川辺に広がる景色',
      text: '川沿いの遊歩道は散歩やジョギングにぴったり。水辺の開放感を日常で感じられます。',
      image: '/kotobuki_riverside.jpeg',
      align: 'right' as const,
    },
    {
      id: 'room',
      title: 'ちょっと広めの1LDK',
      text: '40平米の広めのお部屋。ひとりでもふたりでも、心地よい距離感で暮らせます。',
      image: '/room_inside_view_1.JPG',
      align: 'left' as const,
    },
    {
      id: 'outlook',
      title: 'リバーサイドの眺め',
      text: '川越しに眺める外観は青空とも相性抜群。季節ごとに違う表情を見せてくれます。',
      image: '/kotobuki_apartment_outlook_accross_river.JPG',
      align: 'right' as const,
    },
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
          <section className={style['home__storyboard']} aria-label="ことぶきマンションの魅力紹介">
            <header className={style['home__storyboard__intro']}>
              <p className={style['home__storyboard__eyebrow']}>HIGHLIGHT MOVIE</p>
              <h2>PDFイメージに沿った動きで魅力を順番に紹介</h2>
              <p className={style['home__storyboard__lede']}>
                真ん中のガイドラインに沿って、左右交互にカードが浮かび上がるアニメーションを設定しました。
                リポジトリ内の写真だけで、PDFに近いレイアウトと質感を再現しています。
              </p>
            </header>
            <div className={style['home__storyboard__timeline']}>
              <div className={style['home__storyboard__line']} aria-hidden>
                <span className={style['home__storyboard__lineGlow']} />
              </div>
              {highlightContents.map((content, index) => (
                <article
                  key={content.id}
                  className={
                    content.align === 'left'
                      ? style['home__storyboard__item--left']
                      : style['home__storyboard__item--right']
                  }
                >
                  <div className={style['home__storyboard__marker']}>
                    <span
                      className={style['home__storyboard__marker__ring']}
                      style={{ animationDelay: `${index * 0.18}s` }}
                    />
                    <span className={style['home__storyboard__marker__dot']}>{index + 1}</span>
                  </div>
                  <div
                    className={style['home__storyboard__panel']}
                    style={{ animationDelay: `${index * 0.18}s` }}
                  >
                    <h3>{content.title}</h3>
                    <p className={style['home__storyboard__text']}>{content.text}</p>
                    <img src={content.image} alt={content.title} loading="lazy" />
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}