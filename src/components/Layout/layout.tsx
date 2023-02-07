import * as React from "react";
import Head from "next/head";

import Header from "@/components/header";
import Footer from "@/components/footer";

import styles from "./layout.module.scss";

const Layout: React.FC<{children: React.ReactNode; className?: string}> = ({
  children,
  className,
  ...rest
}) => {
  let layoutClassName = styles.layout;

  if (className) {
    layoutClassName = `${layoutClassName} ${className}`;
  }

  return (
    <div className={layoutClassName} {...rest}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
