/* Auto Compelete Project */
let suggestions = [
  "Channel",
  "CodingLab",
  "CodingNepal",
  "YouTube",
  "YouTuber",
  "YouTube Channel",
  "Blogger",
  "Bollywood",
  "Vlogger",
  "Vechiles",
  "Facebook",
  "Freelancer",
  "Facebook Page",
  "Designer",
  "Developer",
  "Web Designer",
  "Web Developer",
  "Login Form in HTML & CSS",
  "How to learn HTML & CSS",
  "How to learn JavaScript",
  "How to become Freelancer",
  "How to become Web Designer",
  "How to start Gaming Channel",
  "How to start YouTube Channel",
  "What does HTML stands for?",
  "What does CSS stands for?",
];

const $ = document;
const searchInputElem = $.querySelector(".search-input");
const autoCompleteList = $.querySelector(".auotcomplete-list");
const searchIcon = $.querySelector(".search-icon");

let serachInputValue;

/* typing on search input */
searchInputElem.addEventListener("keyup", function () {
  serachInputValue = searchInputElem.value;
  if (serachInputValue) {
    autoCompleteList.classList.add("active");
    let filteredWords = suggestions.filter(function (word) {
      return word.toLowerCase().includes(serachInputValue.toLowerCase());
    });
    autoCompleteListItemGenerator(filteredWords);
  } else {
    autoCompleteList.classList.remove("active");
  }
});

searchIcon.addEventListener("click", function () {
  autoCompleteList.classList.remove("active");
  //  then search it
});

/* generate all autocomplete list item */
function autoCompleteListItemGenerator(wordsArray) {
  let listItemsArray = wordsArray.map(function (item) {
    return '<li class = "autocomplete-item">' + item + "</li>";
  });

  if (!listItemsArray.length) {
    autoCompleteList.innerHTML =
      '<li class = "autocomplete-item">' + serachInputValue + "</li>";
  } else {
    autoCompleteList.classList.add("active");
    autoCompleteList.innerHTML = listItemsArray.join("");
  }
  selectItem();
}

/* select an item from autocomplete lis items */
function selectItem() {
  let allListItems = autoCompleteList.querySelectorAll("li");
  allListItems.forEach(function (listItem) {
    listItem.addEventListener("click", function (event) {
      searchInputElem.value = event.target.textContent;
      autoCompleteList.classList.remove("active");
    });
  });
}
