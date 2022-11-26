import { Title } from "../../components"
import Typography from "../../components/Typography"
import styles from "./Home.module.scss"

const Home = () => {
  return (
    <main className={styles.home}>
      <div className={styles.homeInfo}>
        <Typography className={styles.homeInfo1}>Hi all, I am</Typography>
        <Title className={styles.homeInfo2}>Vladislav Kravchuk</Title>
        <Title className={styles.homeInfo3} tag="h2">&gt; Front-end developer</Title>
        <Typography className={styles.homeInfo4}>// you can see the GitHub page</Typography>
        <Typography className={styles.homeInfo5}>
          <span style={{ color: '#4D5BCE' }}>const</span>
          &nbsp;
          <span style={{ color: '#43D9AD' }}>githubLink</span>
          &nbsp;
          <span style={{ color: '#ffffff' }}>=</span>
          &nbsp;
          <a href="https://github.com/kravchuk21" style={{ color: '#E99287' }}>"https://github.com/kravchuk21"</a>
        </Typography>
      </div>
    </main>
  )
}

export default Home
