import Head from "next/head";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("./header"), {
    ssr: false
});

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Simple Next Example</title>
                <meta name="description" content="Simple Next example project" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                {children}
            </main>

            <footer>

            </footer>
        </div>
    )
}

export default Layout;