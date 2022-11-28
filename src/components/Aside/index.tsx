import React from "react"
import { NavLink } from "react-router-dom"
import { ROUTES } from "../../constants/Routes"
import Title from "../Title"
import Typography from "../Typography"
import styles from "./Aside.module.scss"

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <Structure />
      <div className={styles.asideContacts}>
        <a className={styles.asideContactsLink} href="tel:+375333767404">
          <Typography>+375 (33) 376-74-04</Typography>
        </a>
        <a className={styles.asideContactsLink} href="mailto:krauchukvlad@gmail.com">
          <Typography>krauchukvlad@gmail.com</Typography>
        </a>
      </div>
    </aside>
  )
}

type FileType = {
  title: string,
  path: string,
}

type FolderType = {
  title: string,
  files: FileType[],
}

const STRUCTURE: FolderType[] = [
  {
    title: "personal-info",
    files: [
      {
        title: "_hello",
        path: ROUTES.HOME,
      },
      {
        title: "_about-me",
        path: ROUTES.ABOUT,
      },
    ]
  },
  {
    title: "contacts",
    files: [],
  }
]

const Structure = () => {
  return (
    <div className={styles.structure}>
      <ul className={styles.structureFolders}>
        {STRUCTURE.map((folder, index) => <Folder key={index} title={folder.title} files={folder.files} />)}
      </ul>
    </div >
  )
}

const Folder: React.FC<FolderType> = ({ title, files }) => {
  const [isOpen, setIsOpen] = React.useState(true);

  const toggleOpenFolder = () => {
    setIsOpen(o => !o)
  }

  return (
    <li className={styles.structureFoldersItem + ' ' + (isOpen ? styles.active : '')}>
      <button
        className={styles.structureFoldersItemTitle}
        onClick={toggleOpenFolder}
        aria-expanded={isOpen}
        aria-controls={"folder_" + title}
      >
        <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
          <path d="M 4 3 C 2.895 3 2 3.895 2 5 L 2 8 L 13 8 L 28 8 L 28 7 C 28 5.895 27.105 5 26 5 L 11.199219 5 L 10.582031 3.9707031 C 10.221031 3.3687031 9.5701875 3 8.8671875 3 L 4 3 z M 3 10 C 2.448 10 2 10.448 2 11 L 2 23 C 2 24.105 2.895 25 4 25 L 26 25 C 27.105 25 28 24.105 28 23 L 28 11 C 28 10.448 27.552 10 27 10 L 3 10 z" />
        </svg>
        <Title tag="h4">{title}</Title>
      </button>
      {files && (
        <ul id={"folder_" + title} className={styles.structureFoldersItemFiles}>
          {files.map((file, index) => <File key={index} title={file.title} path={file.path} />)}
        </ul>
      )}
    </li>
  )
}

const File: React.FC<FileType> = ({ title, path }) => <li className={styles.structureFoldersItemFilesItem}>
  <NavLink
    className={({ isActive }) => (isActive ? styles.active : '') + ' ' + styles.structureFoldersItemFilesItemLink}
    to={path}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-2v-1h2a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.928 15.849v-3.337h1.136v-.662H0v.662h1.134v3.337h.794Zm4.689-3.999h-.894L4.9 13.289h-.035l-.832-1.439h-.932l1.228 1.983-1.24 2.016h.862l.853-1.415h.035l.85 1.415h.907l-1.253-1.992 1.274-2.007Zm1.93.662v3.337h-.794v-3.337H6.619v-.662h3.064v.662H8.546Z" />
    </svg>
    {title}
  </NavLink>
</li>

export default Aside
