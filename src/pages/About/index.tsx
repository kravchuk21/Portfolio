import { Aside } from "../../components"
import Typography from "../../components/Typography"
import styles from "./About.module.scss"

const About = () => {
  return (
    <div className={styles.about}>
      <Aside />
      <main className={styles.aboutContent}>
        <Typography className={styles.aboutContentTitle}>personal-info / _about_me</Typography>
        <div className={styles.file}>
          <div className={styles.fileRow}>
            {
              new Array(13)
                .fill(0)
                .map((_, index) =>
                  <Typography key={index} className={styles.fileString + ' ' + styles.fileRowNumber}>{index + 1}</Typography>)
            }
          </div>
          <div className={styles.fileRow}>
            <FString>/*</FString>
            <FString>* About me</FString>
            <FString>* I have 5 years of еxperience in web</FString>
            <FString>* development lorem ipsum dolor sit amet, </FString>
            <FString>* consectetur adipiscing elit, sed do eiusmod</FString>
            <FString>* tempor incididunt ut labore et dolore</FString>
            <FString>* magna aliqua. Ut enim ad minim veniam,</FString>
            <FString>* magna aliqua. Ut enim ad minim veniam,</FString>
            <FString>* magna aliqua. Ut enim ad minim veniam,</FString>
            <FString>* magna aliqua. Ut enim ad minim veniam,</FString>
            <FString>*/</FString>
          </div>
        </div>
      </main>
    </div>
  )
}


const FString: React.FC<{ children: string }> = ({ children }) => <Typography className={styles.fileString}>{children}</Typography>

export default About
