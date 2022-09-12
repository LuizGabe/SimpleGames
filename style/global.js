// styles/global.js
import css from 'styled-jsx/css';

export default css.global`
:root {
--pastelGreen: #3aa394;
--pastelYellow: #d3ad69;
--darkGrey: #312a2c;
--Grey: #504a4b;
--lightGrey: #6e5c62;
--White:#fff;
--Black:#000;
--darkWhite:#fefefe;
--Orange:orange;
}
#todosAcertos {
  display:flex;
  flex-wrap:wrap;
  background-color:var(--lightGrey);
  border-radius:30px;
  margin:5%;
}
.acerto {
  padding:8px;
  background-color:var(--darkGrey);
  border-radius:10px;
  margin:10px;
  color:var(--White);
  height:34px;
}
input {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -80%);
  border:none;
  outline: 0;
  height:20px;
  color:var(--White);
  width:50%;
  border-radius:6px;
  border:2px solid var(--Black);
  background-color:var(--Grey);
}
h5 {
  margin:0;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -180%);
  color:var(--White);
}
body {
  overflow-x:hidden;
  margin: 0;
  padding: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.8;
  font-family: sans-serif;
  background-color: var(--Grey);
}
h1 {
  transform: translate(10%, 10%);
  font-size:2.0em;
  color: var(--darkWhite);
}
h2 {
  transform: translate(10%, 10%);
  color:var(--pastelGreen);
}
h6 {
  transform: translate(10%, 10%);
  color:var(--darkGrey);
}
a {
  transform: translate(10%, 10%);
  color:var(--Orange);
  
}
`;