'use client';
import { Inter } from 'next/font/google';
import HamburgerMenu from '../components/hamburger';
import FooterStyle from '../styles/components/footer.module.scss';
import useImagePreloader from '@/controller/useImagePreloader';
import Link from 'next/link';


const imageSources: { [key: string]: string } = {
  header: '/kotobuki_header.png',
  instagram_icon: '/Instagram_Glyph_Gradient.svg'
}
const imageArray: string[] = Object.values(imageSources)
const inter = Inter({ subsets: ['latin'] });

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const imagesPreloaded = useImagePreloader(imageArray)
  if (!imagesPreloaded) {
    return <div>Loading...</div>
  }
  return (
    <div className={inter.className}>
      <header>
        <Link href="/">
          <img src={imageSources.header} alt="header" />
        </Link>
        <HamburgerMenu />
      </header>
      {children}
      <footer>
        <h4 id={FooterStyle["contact_us"]}>
          contact us
        </h4>
        <p>InstagramのDMまたはお電話よりお気軽にお問い合わせください。
          <br/>
          内見希望の方もDMよりご連絡ください。</p>
          <a href="tel:819011930437">電話番号：090-1193-0437</a>
        <a href="https://www.instagram.com/kotobuki_onsen.apartment/"><img src={imageSources.instagram_icon} alt="Instagram" /></a>
        <h4 id={FooterStyle["address"]}>
          address
        </h4>
        <p>〒811-1311</p>
        <p>福岡県福岡市南区横手4-13-31</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6650.394905604735!2d130.4330932!3d33.54824579999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x354190e0449e9d9d%3A0x5070437419abad09!2z44CSODExLTEzMTEg56aP5bKh55yM56aP5bKh5biC5Y2X5Yy65qiq5omL77yU5LiB55uu77yR77yT4oiS77yT77yRIOWvv-ODnuODs-OCt-ODp-ODsw!5e0!3m2!1sja!2sjp!4v1722766145582!5m2!1sja!2sjp" loading="lazy"></iframe>
      </footer>
    </div>
  );
};
export default RootLayout;