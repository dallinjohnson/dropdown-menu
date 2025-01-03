import Dropdown from "./Dropdown";

const App = () => {
  const init = () => {
    const rootElement = document.querySelector("#app");
    const options = [
      {
        title: "Save",
        action: () => console.log("SAVE CLICKED"),
      },
      {
        title: "Share",
        action: () => console.log("SHARE CLICKED"),
      },
      {
        title: "Delete",
        action: () => console.log("DELETE CLICKED"),
      },
    ];
    const dropDownMenu = Dropdown(options, "Actions");
    rootElement.appendChild(dropDownMenu.getElement());
    const p = document.createElement("p");
    p.textContent = "Lorem ipsum";
    rootElement.appendChild(p);
  };

  return { init };
};

export default App;
