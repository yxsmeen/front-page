import "./styles.css";
import MenuIcon from "./menu-icon";
import Working from "./working";

var link = document.createElement("link");
link.setAttribute("rel", "stylesheet");
link.setAttribute("type", "text/css");
link.setAttribute(
  "href",
  "https://fonts.googleapis.com/css2?family=Signika:wght@700&display=swap"
);
link.setAttribute(
  "href",
  "https://fonts.googleapis.com/css2?family=Signika:wght@300&display=swap"
);
document.head.appendChild(link);

export default function App() {
  return (
    <div className="App">
      <p class="bold">
        LIKE<span id="makered">ME</span>ET
        <img src={MenuIcon} alt="logo" width="2%" align="right" />
      </p>

      <p class="normal">
        <img
          src={Working}
          alt="Group Working Together"
          width="50%"
          align="right"
        />
        YOUR BEST WAY{" "}
        <span id="newline">
          TO <span id="makered">MEET</span> AND{" "}
        </span>{" "}
        CONNECT!
      </p>
      <div>
        <p class="makeButton">
          <span id="outline">SIGN UP NOW</span> or{" "}
          <span id="makebold">SIGN IN</span>
        </p>
      </div>
    </div>
  );
}
