'use client';
import './../styles/globals.scss'
import Link from 'next/link';
export default function Sitemap() {
    return (
        <div>
            <Link href="/" passHref>
                <div>ホーム</div>
            </Link>
            <Link href="/access" passHref>
                <div>アクセス</div>
            </Link>
            <Link href="/vacancy" passHref>
                <div>空き部屋情報</div>
            </Link>
        </div>
    )
}
