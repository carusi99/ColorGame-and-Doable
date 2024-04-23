import * as React from "react";
import clsx from "clsx";
import s from "./App.module.css";
import Home from "../Home";
import ColorGame from "../ColorGame";
import Doable from "../Doable";
import reactIconUrl from "../../assets/react-icon.svg";
import { AuthProvider } from   "../../contexts/authContext"



const navigation = [
 
  {
    name: "Color Game",
    to: "/color-game",
    component: <ColorGame />,
  },
  {
    name: "Doable",
    to: "/doable",
    component: <Doable />,
  },
];

function App() {
  const [page, setPage] = React.useState("/");

  const handleButtonClick = (to) => {
    setPage(to === "/" ? "/" : to);
  };

  return (
    <AuthProvider>
    <div className={s.wrapper}>
      <header className={s.header}>
        <button
          className={s.logo}  
          onClick={() => {
            handleButtonClick("/")
          }}
        >
          <img src={reactIconUrl} /> React Handling
        </button>
        <nav className={s.nav}>
          {navigation.map((item) => (
            <button
              key={item.to}
              className={clsx(s["nav-item"], page === item.to && s.current)}
              onClick={() => {
                handleButtonClick(item.to)
              }}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </header>
      <main className={s.main}>
      {navigation.find((item) => item.to === page)?.component || <Home navigate={setPage} />}
      </main>
    </div>
    </AuthProvider>
  );
}

export default App;
