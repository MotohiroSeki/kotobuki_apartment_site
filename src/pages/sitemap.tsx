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

        </div>
    )
}
