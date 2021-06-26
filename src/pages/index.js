import React from "react";
import Layout from "../components/Layout/Layout";
import * as Styles from "../styles/Home.module.scss";
import { StaticImage } from "gatsby-plugin-image";
function index() {
  return (
    <>
      <Layout>
        <div className={Styles.hero}>
          <div className={Styles.hero__content}>
            <h1 className={Styles.hero__tagline}>
              Experience <span>Freedom</span>
            </h1>
            <p className={Styles.hero__desc}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
              ratione delectus consequatur ipsum dolore eos veritatis quos
              tenetur neque corporis?
            </p>
          </div>
          <StaticImage
            className={Styles.hero__image}
            src="../images/homeHero.jpg"
            alt="beautiful river with a man riding boat surrounding with coconut trees "
          />
        </div>
      </Layout>
    </>
  );
}

export default index;
