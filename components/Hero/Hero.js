import Styles from './Hero.module.css'
import Link from 'next/link';
export default function Hero() {
    return <>
        <section className="hero">
            <div className="container pt-6 pb-2">
                <h2 className="md:w-1/2 text-3xl font-bold text-transparent bg-gradient-to-r bg-clip-text gd-secondary">The best developer reosurces for your inspirational ideas</h2>
                <p className="w-11/12 md:w-1/2 text-dark">Dev resources has more than 1000 resources which will save your time to looking here and there for resources</p>
                <div className="py-2">
                    <h5 className="font-semibold uppercase text-dark text-center">Choose your top categories</h5>
                    <div className={`${Styles.categories} flex flex-nowrap  space-x-3 overflow-x-scroll mt-2`}>
                        <span className={Styles.active}>Domain</span>
                        <Link href='/category'><span>Hosting</span></Link>
                        <span>SSL</span>
                        <span>CDN</span>
                        <span>Code Editors</span>
                        <span>UI Inspiration</span>
                        <span>Landing Pages</span>
                        <span>Design Tools</span>
                        <span>UI Kits</span>
                        <span>Freebies</span>
                        <span>Icons</span>
                        <span>Fonts</span>
                        <span>Colors</span>
                        <span>Bookmark Manager</span>
                    </div>
                </div>
            </div>
        </section>
    </>
}