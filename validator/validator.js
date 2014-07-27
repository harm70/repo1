var industries = ['','Health', 'Oil', 'IT'];

function validate(form) {
if (!Modernizr.input.required) {
var hasErrors = false;
$("input[required]", form).each(function(){
if ($(this).val() == "") {
$(this).css("border", "1px solid red");
hasErrors = true;
}
});
$("select[required]", form).each(function(){
if ($(this).val() == "") {
$(this).css("border", "1px solid red");
hasErrors = true;
}
});

var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
$("input[type=email][required]", form).each(function(){
var email = $(this).val();
var isCorrect = regex.test(email);
if (!isCorrect) {
$(this).css("border", "1px solid red");
hasErrors = true;
}
});
}
showMessage(hasErrors);
return !hasErrors;
}

function showMessage(hasErrors) {
var message = hasErrors == true ? "Invalid value" : "Submit form"
var clazz = hasErrors == true ? "error" : "success";
$("#message-container").text(message).addClass(clazz);
}
