import React from "react"
import Title from "../Title"
import Typography from "../Typography"
import styles from "./Header.module.scss"

const Header = () => {

  const [navigationActive, setNavigationActive] = React.useState(false);

  const onToggleNavigationActive = (): void => {
    setNavigationActive(a => !a)
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerTitle}>
        <Title tag="h4">kravchuk21</Title>
      </div>
      <button
        className={styles.headerNavigationButton + ' ' + (navigationActive ? styles.active : "")}
        onClick={onToggleNavigationActive}
      >
        <div />
        <div />
        <div />
      </button>
      <Navigation active={navigationActive} />
    </header>
  )
}

type NavigationItemType = {
  path: string
  title: string
}

const NAVIGATION: NavigationItemType[] = [
  {
    path: "#",
    title: "_hello",
  },
  {
    path: "#",
    title: "_about-me",
  },
  {
    path: "#",
    title: "_projects",
  }
]

const Navigation: React.FC<{ active?: boolean }> = ({ active = true }) => {
  return (
    <nav className={styles.headerNavigation + ' ' + (active ? styles.active : "")}>
      <ul className={styles.headerNavigationList}>
        {
          NAVIGATION.map((navigatioItem, index) =>
            <NavigationItem key={index} title={navigatioItem.title} path={navigatioItem.path} />)
        }
      </ul>
    </nav>
  )
}

const NavigationItem: React.FC<NavigationItemType> = ({ title, path }) => {
  return (
    <li className={styles.headerNavigationListItem}>
      <a className={styles.headerNavigationListItemLink} href={path}>
        <Typography>{title}</Typography>
      </a>
    </li>
  )
}

export default Header
