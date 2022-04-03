import './style.css'
import {BoardGamejs} from "./logic/boardgame" 

const bg = new BoardGamejs();

document.addEventListener('DOMContentLoaded', function () {
  bg.Run();
});