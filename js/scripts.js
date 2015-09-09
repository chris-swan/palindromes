var palindromes = function(userInput) {
  var userInputSpacedOut = userInput.replace(/[`~!@#$%^&*()_|+\-=÷¿?;:'",.<>\s\{\}\[\]\\\/]/g, '').toLowerCase();
  var userInputReversed = userInputSpacedOut.split("").reverse().join("");

  if (userInputReversed === userInputSpacedOut) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function() {
  $("form#palindrome").submit(function(event) {
    var user_input_form = $("input#user_input").val();
    var result = palindromes(user_input_form);
    if (result) {
      $(".result").text("That is a palindrome");
    } else {
      $(".result").text("That is not a palindrome");
    }

    event.preventDefault();

  });
});
