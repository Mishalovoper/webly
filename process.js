var loadedUntil = 0;
var previousMemory = "";
var memories = ['Test1 - 2020/08/25','Test1 - 2020/08/25','Test1 - 2020/08/25','Test1 - 2020/08/25','Test1 - 2020/08/25','Test2 - 2020/08/25','Test155020/08/25','Test3 - 2020/08/25','Test1 - 2020/08/25','Test4 - 2020/08/25','Test1 - 2020/08/25','Test1 - 2020/08/25','Test1 - 2020/08/25','Test1 - 2020/08/25','Test1 - 2020/08/25','Test1 - 2020/08/25','Test1 - 2020/08/25','Test1 - 2020/08/25','Test1 - 2020/08/25','Test1 - 2020/08/25','Test44 2020/08/25','Test1 - 2020/08/25','Test20 - 2020/08/25'];
if(memories.length <=10){
 for(var i=0;i<memories.length;i++){
     document.getElementsByClassName('feed')[0].innerHTML+= '<h3>'+memories[i]+'</h3><hr>';
 }
  document.getElementById('loadmore').style.visibility = 'hidden';
  
}else{
   for(var i=0;i<10;i++){
     document.getElementsByClassName('feed')[0].innerHTML+= '<h3>'+memories[i]+'</h3><hr>';
 }
  loadedUntil=10;
}

function loadMore(){
   document.getElementsByClassName('feed')[0].innerHTML="";
  loadedUntil+=5;
  if(loadedUntil >=memories.length){
    loadedUntil = memories.length;
 document.getElementById('loadmore').style.visibility = 'hidden';
  }
       for(var i=0;i<loadedUntil;i++){
     document.getElementsByClassName('feed')[0].innerHTML+= '<h3>'+memories[i]+'</h3><hr>';
       }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function submitMemory(){
  let text = document.getElementsByName('memory')[0].value;
  if(previousMemory != text){
    previousMemory=text;
  }
  else{
    alert("You can not enter two identical memories!");
    return;
  }
  
  if(text.trim() == ""){
    alert('Empty memories are not accepted');
    return;
  }
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
  const html_message = '<h3>'+text+' - '+today+'</h3><hr>';
  memories.unshift( text+' - '+today);
       document.getElementsByClassName('feed')[0].innerHTML = "";
 for(var i=0;i<memories.length;i++){
     document.getElementsByClassName('feed')[0].innerHTML+= '<h3>'+memories[i]+'</h3><hr>';
 }
  document.getElementsByTagName('textarea')[0].value ="";
}

function getM(){
  fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const rand = getRandomInt(data.length);
    alert(data[rand].text);
    //console.log(data);
  });
}
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        document.getElementsByTagName('button')[0].click();
        document.getElementsByTagName('textarea')[0].value ="";
      return;
    }
});
