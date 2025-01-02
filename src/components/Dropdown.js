const Dropdown = (options, placeholderText) => {
  let element;

  const init = () => {
    element = createElement();
  };

  const createElement = () => {
    const dropdown = document.createElement("div");
    dropdown.classList.add("dropdown");

    const selectedLabel = document.createElement("span");
    selectedLabel.textContent = placeholderText;
    dropdown.appendChild(selectedLabel);

    const optionList = document.createElement("ul");
    options.map((option) => {
      const optionItem = document.createElement("li");
      optionItem.textContent = option;
      optionItem.addEventListener("click", () => {
        selectedLabel.textContent = option;
      });
      optionList.appendChild(optionItem);
    });
    dropdown.appendChild(optionList);

    return dropdown;
  };

  init();

  return { getElement: () => element };
};

export default Dropdown;
