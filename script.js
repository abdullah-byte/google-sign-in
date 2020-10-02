function saveToCookie[key, value, onCompletion]
    var cookieValue = key + ";" + value;
    document.cookie += cookieValue
    onCompletion(cookieValue);
}
function  saveTextValue(){
  var textValue = document.getElementsByName('position')[0].value;
  saveToCookie('position', textValue, showTextSuccess);
}

function showTextSuccess(result){
  window.alert('You successfully saved [' + result +'] from the text input to your cookie.');
}

function saveRadioValue(){

}
