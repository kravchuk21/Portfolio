import { Footer, Header } from "./components";
import { Home } from "./pages";

export const App = () => (
  <div className="wrapper">
    <Header />
    <div className="page">
      <Home />
    </div>
    <Footer />
  </div>
)
