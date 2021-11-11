import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Main.module.css'

export default function Card() {
    return (
      <div className={styles.card}>
      {/* Hero Image */}
      <Image className={styles.card_img} src="/illustration-hero.svg" alt="Hero Image" width={500} height={250} objectFit="cover"/>
      {/* Card Body */}
      <div className={styles.card_body}>
        <h2 className={styles.fg_dark_blue}>Order Summary</h2>
        <p className={styles.fg_desaturated_blue}>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
        {/* Mini Card */}
        <div className={`${styles.mini_card} ${styles.bg_vpale_blue}`}>
          <Image src="/icon-music.svg" alt="Music Icon" width={40} height={40}/>
          <div className={styles.mini_card_body}>
            <span className={`${styles.title} ${styles.fg_dark_blue}`}>Annual Plan</span>
            <span className={`${styles.text} ${styles.fg_desaturated_blue}`}>$59.99/year</span>
          </div>
          <Link href="#"><span className={styles.link_title}>Change</span></Link>
        </div>
      </div> 
      {/* Card Buttons */}
      <div className={styles.card_footer}>
        <button className={`${styles.card_button} ${styles.box_shadow}`}>
        <span className={`${styles.bg_bright_blue} ${styles.fg_vpale_blue}`}>Proceed to Payment</span></button>
        <button className={styles.card_button}>
          <span>Cancel Order</span></button>
      </div>
    </div>
    )
}
