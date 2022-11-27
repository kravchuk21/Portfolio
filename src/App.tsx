import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import { ROUTES } from "./constants/Routes";
import { About, Home } from "./pages";

export const App = () => (
  <div className="wrapper">
    <Header />
    <div className="page">
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
      </Routes>
    </div>
    <Footer />
  </div>
)
