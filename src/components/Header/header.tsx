import * as React from "react";
import Link from "next/link";
import {FaShoppingCart} from "react-icons/fa";

import Container from "@/components/container";

import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <p className={styles.headerTitle}>
          <Link href="/">Space Jelly</Link>
        </p>
        <ul className={styles.headerLinks}>
          <li>
            <Link href="#">Link</Link>
          </li>
          <li>
            <Link href="#">Link</Link>
          </li>
          <li>
            <Link href="#">Link</Link>
          </li>
        </ul>
        <p className={styles.headerCart}>
          <button>
            <FaShoppingCart />
            <span>$0.00</span>
          </button>
        </p>
        <ul className={styles.headerLocales}>
          <li>
            <Link href="#">ES</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
