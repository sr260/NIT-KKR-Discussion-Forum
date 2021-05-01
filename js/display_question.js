//URL parsing
function ParseURL(parameter){
var s="https:/mytube.com/param.html?page=contact_us"
var myURL = s.substring(29);
console.log(myURL)
var parameterArray= myURL.split('&');
console.log(parameterArray)
for(var i=0;i<parameterArray.length;i++){
	var currParameter=parameterArray[i].split('=');
	console.log(currParameter);
	if(currParameter[0] == parameter){
		return currParameter[1];
	}
}
}
console.log("h")
var pageNum = ParseURL('page')
console.log(pageNum);

//displaying question
var questionid=12;
firebase.database().ref('answerset/'+questionid).on('value',function(snapshot){
	//onsole.log(snapshot.val().Answer)
    document.getElementById('question').innerHTML=snapshot.val().Answer;
      //  console.log(document.getElementById('question').innerHTML)
	});
//displayong answers corresponding to opened question
var i=1;
firebase.database().ref('answerset/').once("value")
 .then(function(snapshot) {
 	//console.log("h2");
 	document.getElementById('answer_list').innerHTML="";
 snapshot.forEach(function(childSnapshot) {
 	console.log(questionid);
 	var total = childSnapshot.val().Answer;
 	var total1 = childSnapshot.val().QuestionID;
 	if(total1==questionid){
 		//console.log(total1);
 		//console.log(questionid);
 	$("#answer_list").append("Answer ");
 	$("#answer_list").append(i);
 	$("#answer_list").append(" ");
 	$("#answer_list").append("<p>" + total + "</p");
 	i++;}
  console.log(total);
  });
 })
