import "./App.scss";
import Main from "./layout/Main/index";
import NavLeft from "./layout/Nav/index";
import IdentityPage from "./pages/Identity/index";
import { IdentityServiceList } from "./services/identity";
import { componentList } from "./components/Identity/index";
import BaseModal from "./components/base/BaseModal";
import { useState } from "react";
import ModalContext from "./utils/Modal-Context";
// const ModalContext = createContext(ModalContext);
function App() {
  const [modal, setModal] = useState([]);
  const value = { modal, setModal };

  console.log("from App: " + modal);

  const Page = IdentityPage;
  const Service = IdentityServiceList;

  return (
    <div className="App">
      <ModalContext.Provider value={value}>
        <nav>
          <NavLeft />
        </nav>
        <main>
          <Main
            PageContent={Page}
            Service={Service}
            ComponentsList={componentList}
          />
        </main>
        <BaseModal {...modal}></BaseModal>
      </ModalContext.Provider>
    </div>
  );
}

export default App;
