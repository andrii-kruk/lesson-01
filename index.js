const refs = {
  searchForm: document.querySelector(".search-form"),
  searchInput: document.getElementById("search-input"),
  searchButton: document.getElementById("search-button"),
};

refs.searchInput.addEventListener("change", getInputvalue);
refs.searchButton.addEventListener("click", onSearchButtonClick);

function getInputvalue(e) {
  let currentValue = e.currentTarget.value.trim();
  if (currentValue.length === 0 || currentValue === "") {
    alert("Введіть назву фільма");
  }
  
  return currentValue;
}

function onSearchButtonClick() {}
