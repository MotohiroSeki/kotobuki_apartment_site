import { Inter } from 'next/font/google';
import HamburgerMenu from '../components/hamburger';
import FooterStyle from '../styles/components/footer.module.scss';
import ImageWithPlaceholder from '@/components/picture';


const inter = Inter({ subsets: ['latin'] });

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={inter.className}>
      <header>
        <ImageWithPlaceholder src="/kotobuki_header.png" alt="" />
        <HamburgerMenu />
      </header>
      {children}
      <footer>
        <h4 id={FooterStyle["contact_us"]}>
          contact us
        </h4>
        <p>InstagramのDMよりお気軽にお問い合わせください。</p>
        <a href="https://www.instagram.com/kotobuki_onsen.apartment/"><img src="/Instagram_Glyph_Gradient.svg" alt="Instagram" /></a>
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