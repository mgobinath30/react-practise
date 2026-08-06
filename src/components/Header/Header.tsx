import "./Header.css";

const featurs = ["JSX", "Props", "virtual Dom", "Components"];

function randomOrder() {
  return Math.floor(Math.random() * featurs.length);
}

export default function Header() {
  return (
    <header>
      <h1>My React App</h1>
      <p> React have powerful features of {featurs[randomOrder()]}</p>
    </header>
  );
}
