import React from "react";
import Header from "./../../components/header/Header";
import Footer from "./../../components/footer/Footer";
import Sidebar from "./../../components/sidebar/Sidebar";
import Main from "./../../components/main/Main";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.app}>
      <aside className={styles.drawer}>
        <Sidebar />
      </aside>

      <main className={styles.main}>
          <Header />
        <div className={styles.content}>
        <Main /> 
        </div>
        <Footer/>
      </main>
    </div>
  );
};

export default Home;
