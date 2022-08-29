import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }


    render() {
        
        return (
            <Html lang="en" >
                <Head>
                    {/*Stylesheets*/}
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/> 
                    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏡</text></svg>"></link>
                    <link rel="manifest" href="/manifest.json"/>

                    <meta property="og:title" content="José Baquerizo"/>
                    <meta name="twitter:title" content="José Baquerizo"/>
                    
                    <meta name="description" content="An Ecuadorian Web developer and UI/UX Designer based in Salinas"/>
                    <meta property="og:description" content="An Ecuadorian Web developer and UI/UX Designer based in Salinas"/>
                    <meta name="twitter:description" content="An Ecuadorian Web developer and UI/UX Designer based in Salinas"/>
                    
                    <meta property="og:image" content="/images/logo.png"/>
                    <meta name="twitter:image" content="/imges/logo.png"/>
                </Head>
                <body className="bg-background text-gray-800 transition-all">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument