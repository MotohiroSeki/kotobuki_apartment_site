import { Inter } from 'next/font/google';
import HamburgerMenu from '../components/hamburger';
import FooterStyle from '../styles/components/footer.module.scss';


const inter = Inter({ subsets: ['latin'] });

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={inter.className}>
      <header>
        <img src="/kotobuki_header.png" alt="" />
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
        <iframe src="https://maps.google.co.jp/maps?&output=embed&q=福岡市南区横手4-13-31"></iframe>
      </footer>
    </div>
  );
};

export default RootLayout;