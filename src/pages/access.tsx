'use client';
import './../styles/globals.scss'
import HomeStyle from '../styles/home.module.scss'
import AccessStyle from '../styles/access.module.scss'
import PictureSlider from '@/components/slider';

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
    <main>
      <div className={HomeStyle["home__body"]}>
        <h2>
          西鉄大橋駅からのアクセス方法
        </h2>
        <div style={{ marginBottom: '60px' }} >
        ことぶきマンションの最寄駅は西鉄大橋駅となっております。<br />
        大橋駅からは以下のルートでお越しになれます。
        </div>
        <PictureSlider images={routeOhashiWestSide} delay={5000}/>
      </div>
    </main>
  )
}