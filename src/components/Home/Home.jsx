import s from "./Home.module.css";
import reactIconUrl from "../../assets/react-icon-lg.svg";
import Button from "../Button/Button"


function Home({ navigate }) {

  return (
    <div className={s.wrapper}>
      <img src={reactIconUrl} />
      <h1 className={s.title}>React Handling</h1>
      <p className={s.name}>Paola Pacheco</p>
      <div className={s.buttons}>
       <Button variant="outline"
       onClick={() =>navigate("/color-game")}>
          Color Game
       </Button>
         
       <Button variant="outline"
       onClick={() =>navigate("/doable")}>
          Doable
       </Button>
        
      </div>
    </div>
  );
}

export default Home;
