const resetBtn = document.querySelector("#logout");
resetBtn.addEventListener("click",resetUserInfo);
function resetUserInfo() {
  localStorage.clear();
  location.reload();
}

window.addEventListener ("load", function() {
  document.body.style.visibility = 'visible';
});