
function chatOperation(){

    var msgTxt = document.querySelector('#msgTxt')
    var msgImg = document.querySelector('#msgImg').files[0]
    var reader = new FileReader()
    var msgAppear = document.querySelector('#msgAppear')
    var imgAppear = document.querySelector('#imgAppear')

    reader.onloadend = function () {
        imgAppear.src = reader.result;
      }
    
      if (msgImg) {
        reader.readAsDataURL(msgImg);
      } else {
       imgAppear.src = "";
      }



    msgAppear.innerHTML = msgTxt.value
   

}





