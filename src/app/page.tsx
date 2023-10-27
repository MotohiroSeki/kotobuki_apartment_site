'use client';
import { holizontal_slider } from '@/components/slider'
import './../styles/globals.scss'
import style from '../styles/home.module.scss'
export default function Home() {
  const header_images: string[] = ['/dummy_ことぶきマンション画像.png', '/dummy_ことぶきマンション画像2.png']
  return (
    <main>
      <div className={style["home__body"]}>
        <h2>
          温泉のある暮らし
        </h2>
        <div className={style["home__body__outlook"]}>
          <img src='/dummy_ことぶきマンション画像.png' alt="out_look" />
        </div>
      </div>
    </main>
  )
}
