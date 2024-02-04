'use client';
import './../styles/globals.scss'
import style from '../styles/home.module.scss'
import HamburgerMenu from '../components/hamburger';
export default function Home() {
  return (
    <main>
      <HamburgerMenu />
      <div className={style["home__body"]}>
        <h2>
          温泉のある暮らし
        </h2>
        <div className={style["home__body__outlook"]}>
          <img src='/dummy_ことぶきマンション画像.png' alt="out_look" />
          <img src='/dummy_ことぶきマンション画像.png' alt="out_look" />
          <img src='/dummy_ことぶきマンション画像.png' alt="out_look" />
          <img src='/dummy_ことぶきマンション画像.png' alt="out_look" />
          <img src='/dummy_ことぶきマンション画像.png' alt="out_look" />
          <img src='/dummy_ことぶきマンション画像.png' alt="out_look" />
        </div>
      </div>
    </main>
  )
}
