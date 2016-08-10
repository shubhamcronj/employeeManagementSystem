var hrUserId = "cronj_hr";
var hrPass   = "hr";

function employee(first, last, age, eid, epass){
	this.first = first;
	this.last  = last;
	this.age   = age;
	this.eid   = eid;
	this.epass = epass;
}

var emArr = new Array(); // Array to store emplyee objects


var validateUser = function(){
	var uname = document.getElementById('uname');
	if(uname.value == undefined || uname.value == null || uname.value == "")
	{
		uname.style.borderColor="red";
	}
	else
	{
		uname.style.borderColor="green";
	}

	
}
var validatePass = function(){
	
	var upass = document.getElementById('upass');
	if(upass.value == undefined || upass.value == null || upass.value == "")
	{
		upass.style.borderColor="red";
	}
	else
	{
		upass.style.borderColor="green";
	}
}

var validate = function(){
	var uname = document.getElementById('uname');
	var upass = document.getElementById('upass');
	if(uname.value == hrUserId && upass.value == hrPass)
	{
		document.getElementById('greet').innerHTML = "Hi! " + uname.value;
		document.getElementById('ereg').style.display="block";
		return false;
	}

	else if(true){
		var flag = false;
		for(i=0;i<emArr.length;i++)
		{	
			document.getElementById('ereg').style.display="none";
			if(uname.value == emArr[i].eid && upass.value == emArr[i].epass)
			{
			document.getElementById('greet').innerHTML = "Hi! " + emArr[i].first;
			flag = true;
			}
		}
		if(!flag)
			{
					document.getElementById('greet').innerHTML = "Wrong! Credentials";
					uname.style.borderColor="red";
					upass.style.borderColor="red";
					document.getElementById('ereg').style.display="none";
					return false;
			}

		return false;
	}

}

var registerUser = function(){
	var first = document.getElementById('first').value;
	var last  = document.getElementById('last').value;
	var age   = document.getElementById('age').value;
	var eid   = document.getElementById('eid').value;
	var epass = document.getElementById('epass').value;

	var emp = new employee(first, last, age, eid, epass);
	emArr.push(emp);
	var l = emArr.length - 1;
	alert(emArr[l].first + " " + emArr[l].last + " registered");
	var para = document.createElement('p');
	var node = document.createTextNode(">> "+emArr[l].first+" "+emArr[l].last);
	para.appendChild(node);
	var element = document.getElementById('display');
	element.appendChild(para);
	return false;
}