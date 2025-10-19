import { InstagramEmbed } from 'react-social-media-embed';
import Head from 'next/head';

import HomeStyle from '../styles/home.module.scss'

export default function Access() {
    return (
        <>
            <Head>
                <title>博多温泉ことぶきマンションの空き部屋情報</title>
                <meta property="og:title" content="博多温泉ことぶきマンションの空き部屋情報" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://kotobuki-apartment-site.vercel.app/access_route/ohashi_west_route.jpeg" />
                <meta property="og:url" content="https://kotobuki-apartment-site.vercel.app/vacancy" />
                <meta property="og:description" content="博多温泉ことぶきマンションの空き部屋情報です。インスタグラムの投稿に合わせて更新いたしますので、インスタグラムもぜひご確認ください。" />
            </Head>
            <main>
                <div className={HomeStyle["home__body"]}>
                    <h2 style={{ marginTop: 0 }}>
                        空き部屋情報
                    </h2>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <InstagramEmbed url="https://www.instagram.com/p/C-P5OmdS_dV/?utm_source=ig_embed&amp;utm_campaign=loading/" width={328} captioned />
                    </div>
                </div>
            </main>
        </>
    )
}