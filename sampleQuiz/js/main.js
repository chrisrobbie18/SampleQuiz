function checkAnswer()
{
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	var question11 = document.quiz.question11.value;
	var question12 = document.quiz.question12.value;
	var question13 = document.quiz.question13.value;
	var question14 = document.quiz.question14.value;
	var question15 = document.quiz.question15.value;
	var question16 = document.quiz.question16.value;
	var question17 = document.quiz.question17.value;
	var question18 = document.quiz.question18.value;
	var question19 = document.quiz.question19.value;
	var question20 = document.quiz.question20.value;
	
	var correct = 0;
	if (question1 == "hdd")
	{
		correct++;
	}
	else {
		if (question1 == "") {
			confirm("You need to answer number 1");
			return;
		}
	}
	if (question2 == "update")
	{
		correct++;
	}
	else {
		if (question2 == "") {
			confirm("You need to answer number 2");
			return;
		}
	}
	if (question3 == "4")
	{
		correct++;
	}
	else {
		if (question3 == "") {
			confirm("You need to answer number 3");
			return;
		}
	}
	if (question4 == "2")
	{
		correct++;
	}
	else {
		if (question4 == "") {
			confirm("You need to answer number 4");
			return;
		}
	}
	if (question5 == "4")
	{
		correct++;
	}
	else {
		if (question5 == "") {
			confirm("You need to answer number 5");
			return;
		}
	}
	if (question6 == "1")
	{
		correct++;
	}
	else {
		if (question6 == "0") {
			alert("You need to answer number 6");
			return;
		}
	}
	if (question7 == "3")
	{
		correct++;
	}
	else {
		if (question7 == "0") {
			alert("You need to answer number 7");
			return;
		}
	}
	if (question8 == "2")
	{
		correct++;
	}
	else {
		if (question8 == "0") {
			alert("You need to answer number 8");
			return;
		}
	}
	if (question9 == "3")
	{
		correct++;
	}
	else {
		if (question9 == "0") {
			alert("You need to answer number 9");
			return;
		}
	}
	if (question10 == "2")
	{
		correct++;
	}
	else {
		if (question10 == "0") {
			alert("You need to answer number 10");
			return;
		}
	}

	if (question11 == "ans11")
	{
		correct++;
	}
	else {
		if (question11 == "") {
			confirm("You need to answer number 11");
			return;
		}
	}
	if (question12 == "ans12")
	{
		correct++;
	}
	else {
		if (question12 == "") {
			confirm("You need to answer number 12");
			return;
		}
	}
	if (question13 == "ans13")
	{
		correct++;
	}
	else {
		if (question13 == "") {
			confirm("You need to answer number 13");
			return;
		}
	}
	if (question14 == "ans14")
	{
		correct++;
	}
	else {
		if (question14 == "") {
			confirm("You need to answer number 14");
			return;
		}
	}
	if (question15 == "ans15")
	{
		correct++;
	}
	else {
		if (question15 == "") {
			confirm("You need to answer number 15");
			return;
		}
	}
	if (question16 == "ans16")
	{
		correct++;
	}
	else {
		if (question16 == "") {
			alert("You need to answer number 16");
			return;
		}
	}
	if (question17 == "ans17")
	{
		correct++;
	}
	else {
		if (question17 == "") {
			alert("You need to answer number 17");
			return;
		}
	}
	if (question18 == "ans18")
	{
		correct++;
	}
	else {
		if (question18 == "") {
			alert("You need to answer number 18");
			return;
		}
	}
	if (question19 == "ans19")
	{
		correct++;
	}
	else {
		if (question19 == "") {
			alert("You need to answer number 19");
			return;
		}
	}
	if (question20 == "ans20")
	{
		correct++;
	}
	else {
		if (question20 == "") {
			alert("You need to answer number 20");
			return;
		}
	}

	var message = ["Excellent!,", "You've got average score!  ", "You need to study hard.  "];
	var range;
	if (correct < 9)
	{
		range = 2;
	}
	if (correct > 9 && correct < 17)
	{
		range = 1;
	}
	if (correct >  17)
	{
		range = 0;
	}

	alertify.alert('RESULT', message[range] +"\nYou got " + correct + " correct answer/s.", function(){
	location.reload();	
	});


}