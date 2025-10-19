'use client';
import type { CSSProperties, PropsWithChildren } from 'react';
import HamburgerMenu from '../components/hamburger';
import FooterStyle from '../styles/components/footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';


const imageSources: { [key: string]: string } = {
  header: '/kotobuki_header.png',
  instagram_icon: '/Instagram_Glyph_Gradient.svg'
}
const rootFontStyle: CSSProperties = {
  fontFamily:
    'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic", "YuGothic", "Meiryo", sans-serif'
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <div style={rootFontStyle}>
      <header>
        <Link href="/">
          <Image
            src={imageSources.header}
            alt="ことぶきマンションのヘッダー画像"
            width={2700}
            height={350}
            priority
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
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
        <a href="https://www.instagram.com/kotobuki_onsen.apartment/">
          <Image
            src={imageSources.instagram_icon}
            alt="Instagram"
            width={120}
            height={120}
            sizes="120px"
          />
        </a>
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
