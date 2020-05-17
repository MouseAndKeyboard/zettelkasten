import Head from 'next/head'
import Link from 'next/link'

const MDTitle = 'My**Zettel**'
const rawTitle = 'MyZettel'

export default ({children}) => (
    <div>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="Zettelkasten based personal information store" />
            <meta property="og:image" content={`https://og-image.now.sh/${MDTitle}.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fsvg%2F794%2F794621.svg`} />
            <meta name="og:title" content={rawTitle} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header>

        </header>

        <main>{children}</main>

        <footer>
            <Link href='/'>
                <a>Home</a>
            </Link>
        </footer>

    </div>
)
