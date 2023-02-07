import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Layout from "@/components/layout";
import Container from "@/components/container";
import Button from "@/components/button";

import products from "@/data/products.json";

import styles from "@/styles/Page.module.scss";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Space Jelly Gear</title>
        <meta name="description" content="Get your Space Jelly gear!" />
      </Head>

      <Container>
        <h1 className="sr-only">Space Jelly Gear</h1>

        <div className={styles.hero}>
          <Link href="/">
            <>
              <div className={styles.heroContent}>
                <h2>Prepare for liftoff.</h2>
                <p>Apparel that&apos;s out of this world!</p>
              </div>
              <Image
                width={1200}
                height={500}
                className={styles.heroImage}
                src="/images/space-jelly-gear-banner.jpg"
                alt=""
              />
            </>
          </Link>
        </div>

        <h2 className={styles.heading}>Featured Gear</h2>

        <ul className={styles.products}>
          {products.slice(0, 4).map(product => {
            return (
              <li key={product.id}>
                <Link href="#">
                  <>
                    <div className={styles.productImage}>
                      <Image
                        width="500"
                        height="500"
                        src={product.image}
                        alt=""
                      />
                    </div>
                    <h3 className={styles.productTitle}>{product.name}</h3>
                    <p className={styles.productPrice}>${product.price}</p>
                  </>
                </Link>
                <p>
                  <Button>Add to Cart</Button>
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </Layout>
  );
}
