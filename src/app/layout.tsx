import { Inter } from 'next/font/google';
import HamburgerMenu from '../components/hamburger';


const inter = Inter({ subsets: ['latin'] });

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={inter.className}>
      <header>
        <img src="/kotobuki_header.png" alt="" />
        <HamburgerMenu />
      </header>
      {children}
    </div>
  );
};

export default RootLayout;