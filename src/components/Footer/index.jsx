import GlobalSvg from '../../assets/icons/GlobalSvg'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles['bg']}>
        <div className={styles['footer']}>
            <div className={styles['footer__text']}>
                <div className={styles['footer__text-first']}>
                    <div className={styles['footer__text-first-h1']}>
                        <h1>Let’sFood</h1>
                        <GlobalSvg id='logo'/>
                    </div>
                    <p>
                        Jalan Semangka Raya, Telaga <br /> Murni,Cikarang Barat, Kab. Bekasi
                    </p>
                    <div className={styles['footer__text-first-icons']}>
                        <a href=""><GlobalSvg id='instagram'/></a>
                        <a href=""><GlobalSvg id='facebook'/></a>
                        <a href=""><GlobalSvg id='twitter'/></a>
                    </div>
                </div>
                <dir className={styles['footer__text-second']}>
                    <h1>Company</h1>
                    <div>
                        <p>About us</p>
                        <p>Career</p>
                        <p>How It Work</p>
                    </div>
                </dir>
                <dir className={styles['footer__text-third']}>
                    <h1>Policy</h1>
                    <div>
                        <p>FAQ</p>
                        <p>Privacy</p>
                        <p>Shipping</p>
                    </div>
                </dir>
                <dir className={styles['footer__text-forth']}>
                    <h1>Get In Touch</h1>
                    <div>
                        <p>+62 896 7311 2766</p>
                        <p>food@example.com</p>
                    </div>
                </dir>
            </div>
            <div className={styles['footer__line']}></div>
            <h1 className={styles['footer__end']}>© 2022 Let’sFood. ALL RIGHT RESERVED.</h1>
        </div>
    </div>
  )
}

export default Footer