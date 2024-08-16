import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                {/* Google Tag Manager */}
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-2JNTF8034N"
                ></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2JNTF8034N');
            `,
                    }}
                />
                {/* End Google Tag Manager */}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}