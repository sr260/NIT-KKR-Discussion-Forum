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

//Adding data to database
var answersid,answers,questionid=12,p;
firebase.database().ref('answerset/').once('value').then(function(snapshot){
	if(snapshot.exists()){
       snapshot.forEach(function(childSnapshot) {
 	  p=childSnapshot.val().AnswerID;
  });
       
	}
	else{
		p=0;
	}
})
function Ready(){
	answers= document.getElementById('answer').value;
}
 document.getElementById('insertanswer').onclick=function(){
 	answersid=p+1;
 	console.log(answersid)
 	Ready();
 	
	firebase.database().ref('answerset/'+answersid).set({
		QuestionID : questionid,
		AnswerID : answersid,
		Answer : answers
	});
 	document.getElementById('answer').value="";
}

//Searching and displaying answer using answerid
// document.getElementById('getanswer').onclick=function(){
//     console.log('s')
// 	Ready();
// 	firebase.database().ref('answerset/'+questionid).on('value',function(snapshot){
//         document.getElementById('answer').value=snapshot.val().Answer;
// 	});
// }
