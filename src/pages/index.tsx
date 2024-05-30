'use client';
import './../styles/globals.scss'
import style from '../styles/home.module.scss'
import PictureSlider from '@/components/slider';
export default function Home() {
  const outlooks = [
    '/kotobuki_apartment_outlook_accross_river.JPG',
    '/kotobuki_night_view.png',
    '/kotobuki_riverside.png'
  ]
  return (
    <main>
      <div className={style["home__body"]}>
        <PictureSlider images={outlooks} />
        <div id="about_hot_spring" className={style["home__body__contents"]}>
          <h2>
            部屋で楽しめる天然温泉付き！
          </h2>
          <img src="/hotspring_tap.png"/>
          ことぶきマンションの一番の特徴と言えばこの天然温泉！<br />
          各部屋のお風呂で蛇口から天然温泉が出るようになっているので、毎日温泉が楽しめます。
        </div>

        <div id="sakura" className={style["home__body__contents"]}>
          <h2>
            目の前に広がる桜並木
          </h2>
          <img src="/sakura_road.png"/>
          マンションの目の前には桜の木が植えられているので、春になると花見が楽しめます。<br />
          部屋によってはベランダから見えるので、プライベートな空間でのんびり花見が楽しめるかも！
        </div>

      </div>
    </main>
  )
}
