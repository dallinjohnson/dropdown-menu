import Dropdown from "./Dropdown";

const App = () => {
  const init = () => {
    const rootElement = document.querySelector("#app");
    const dropDownMenu = Dropdown(
      ["Option 1", "Option 2", "Option 3"],
      "Select an Option"
    );
    rootElement.appendChild(dropDownMenu.getElement());
  };

  return { init };
};

export default App;
