import Head from 'next/head'
import styles from '../styles/Main.module.css'
import Card from '../components/Card'

export default function Home() {
  return (
    <div className={`${styles.container} ${styles.bg_vpale_blue}`}>
      <Head>
        <title>Order Summary Card</title>
        <meta name="description" content="Generated by Laveezah Noor" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <main className={styles.main}>
      <Card/>
      </main>
      <footer>
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="#">Laveezah Noor</a>.
      </footer>
    </div>
    )
}
