import GlobalSvg from "../../assets/icons/GlobalSvg";
import styles from "./Header.module.scss";
import img from "../../assets/images/img-hero.png";
import Button from "../Button";

const Header = () => {
  return (
    <>
      <div className={styles["block"]}>
        <header className={styles["header"]}>
          <div className={styles["header__logo"]}>
            <h1>Let’sFood</h1>
            <GlobalSvg id="logo" />
          </div>
          <ul className={styles["header__nav"]}>
            <li>Home</li>
            <li>Menu</li>
            <li>How it works</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className={styles["header__buttons"]}>
            <GlobalSvg id="search" />
            <div className={styles["header__buttons-cart"]}>
              <div>2</div>
              <GlobalSvg id="cart" />
            </div>
            <Button className={styles["header__buttons-signin"]}>
              <GlobalSvg id="sign-in" />
              <p>Sign in</p>
            </Button>
            <div className={styles['header__buttons-hero']}>
              <GlobalSvg id="menu"/>
            </div>
          </div>
        </header>
        <nav className={styles["navbar"]}>
          <div className={styles["navbar__left"]}>
            <h1>
              Be The Fastest In <br /> Delivery Your <span>Food</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit ut
              aliquam, purus sit amet
            </p>{" "}
            <Button>Get Started</Button>
          </div>
          <img src={img} alt="" />
        </nav>
      </div>
    </>
  );
};

export default Header;
