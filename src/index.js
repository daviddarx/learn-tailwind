const burger = document.querySelector("#burger");
const navigation = document.querySelector("#navigation");

burger.addEventListener("click", () => {
  if (navigation.classList.contains("hidden")) {
    navigation.classList.remove("hidden");
  } else {
    navigation.classList.add("hidden");
  }
});
