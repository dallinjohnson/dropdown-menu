import expandIconImg from "../assets/icons8-dropdown-50.png";

const Dropdown = (options, label) => {
  let element;
  let optionList;
  let expandIcon;
  let isOpen;

  const init = () => {
    element = createElement();
    isOpen = false;
  };

  const createElement = () => {
    const dropdown = document.createElement("div");
    dropdown.classList.add("dropdown");

    const button = createToggleButton();
    dropdown.appendChild(button);

    optionList = createOptionsList();
    dropdown.appendChild(optionList);

    return dropdown;
  };

  const createToggleButton = () => {
    const buttonLabel = document.createElement("span");
    buttonLabel.textContent = label;

    expandIcon = document.createElement("img");
    expandIcon.src = expandIconImg;
    expandIcon.classList.add("expand-icon");

    const toggleButton = document.createElement("div");
    toggleButton.classList.add("dropdown-toggle-btn");
    toggleButton.appendChild(buttonLabel);
    toggleButton.appendChild(expandIcon);
    toggleButton.addEventListener("click", () => {
      isOpen ? closeMenu() : openMenu();
    });
    return toggleButton;
  };

  const createOptionsList = () => {
    const optionList = document.createElement("ul");

    options.map((option) => {
      const optionItem = document.createElement("li");
      optionItem.textContent = option.title;

      optionItem.addEventListener("click", () => {
        closeMenu();
        option.action();
      });

      optionList.appendChild(optionItem);
    });
    return optionList;
  };

  const closeMenu = () => {
    optionList.classList.remove("open");
    expandIcon.classList.remove("flipped");
    isOpen = false;
  };

  const openMenu = () => {
    optionList.classList.add("open");
    expandIcon.classList.add("flipped");
    isOpen = true;
  };

  init();

  return { getElement: () => element };
};

export default Dropdown;
