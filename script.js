function mark() {
  if (check() == true && validateForm() == true) {
    return true;
  }
  else {
    return false;
  }
}

function check() {
  let a = document.storedata.pass.value;
  let b = document.storedata.again_pass.value;

  if (a == b) {
    return true;
  }
  else {
    alert("Password not same");
    return false;
  }
}

function validateForm() {
  let n = document.storedata.num.value;
  if (n.length != 10) {
    alert("Phone number should be 10 digit");
    return false;
  }
  else {
    setTimeout(function () {
      window.location = "home.html";
    }, 1);
  }

}
