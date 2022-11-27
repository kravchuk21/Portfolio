import React from "react"
import { Link, NavLink } from "react-router-dom"
import { ROUTES } from "../../constants/Routes"
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
        type="button"
        aria-expanded={navigationActive}
        aria-controls="navigation"
        className={styles.headerNavigationButton + ' ' + (navigationActive ? styles.active : "")}
        onClick={onToggleNavigationActive}
      >
        <div />
        <div />
        <div />
      </button>
      <Navigation id="navigation" active={navigationActive} />
    </header>
  )
}

type NavigationItemType = {
  path: string
  title: string
}

const NAVIGATION: NavigationItemType[] = [
  {
    path: ROUTES.HOME,
    title: "_hello",
  },
  {
    path: ROUTES.ABOUT,
    title: "_about-me",
  },
  // {
  //   path: "#",
  //   title: "_projects",
  // }
]

const Navigation: React.FC<{ id: string, active?: boolean }> = ({ id, active = true }) => {
  return (
    <nav id={id} className={styles.headerNavigation + ' ' + (active ? styles.active : "")}>
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
      <NavLink className={({ isActive }) => styles.headerNavigationListItemLink + ' ' + (isActive ? styles.active : '')} to={path}>
        <Typography>{title}</Typography>
      </NavLink>
    </li>
  )
}

export default Header
