function getfile(file,callback){
	var xhr = new XMLHttpRequest(); //creating an object to store the request
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);// to open the file 
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status == "200"){
			callback(xhr.responseText);
		}
	};
	xhr.send(null);
}
	getfile("practice.json",function(text){
		var data = JSON.parse(text);
        console.log(data);
        career(data.career);
        education(data.eduqua);
        skills(data.skills);

	})

	var child2 = document.querySelector(".childTwo");

	 function career(careerInfo) { // user defined function careerInfo contains json file's career objects
	  var carhed = document.createElement("h2");
	  child2.appendChild(carhed);
	  carhed.textContent = "Career objective";
	  var ch =document.createElement("p"); // creating a paragraph tag to display the career objective
	  ch.textContent = careerInfo.info;
	  child2.appendChild(ch);
	  var c = document.createElement("p");
	  c.textContent = careerInfo.education;
	  child2.appendChild(c);
	 }

     function education(edu)
     {
     var eduhed = document.createElement("h2");
     eduhed.textContent="Educational Qualifications";
     child2.appendChild(eduhed);

     var careerhr = document.createElement("hr");
     child2.appendChild(careerhr);

     var eduTable = document.createElement("table");
     eduTable.border = "1";
     var tr1="<tr><td>Degree</td><td>Institute</td><td>Data</td></tr>";
     eduTable.innerHTML=tr1;
     var tr2="";
     for (var i = 0;i<edu.length; i++) {
        tr2+="<tr><td>"+edu[i].degree +"</td><td>"+edu[i].institute+"</td><td>"+edu[i].info+"</td></tr>";
     }
     eduTable.innerHTML=tr1+tr2;
     child2.appendChild(eduTable);
     }
     function skills(skil) {
	     var eduhed = document.createElement("h2");
     eduhed.textContent="Skills";
     child2.appendChild(eduhed);

     var careerhr = document.createElement("hr");
     child2.appendChild(careerhr);
     	var ul = document.createElement("ul");
     	child2.appendChild(ul);
     	for (var i = 0;i<skil.length;i++) {
               var li = document.createElement("li");
               li.textContent=skil[i].title+":"+skil[i].content;
               ul.appendChild(li);
           }
       }
