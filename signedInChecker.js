var sign = sessionStorage.getItem("signIn");

function checkerSignIn(link) {
  console.log("he");
  if (sign == "true") {
    window.location.href = link;
  } else {
    window.location.href = "regSystem/registirationSystem.html";
  }
}