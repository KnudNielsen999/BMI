
function getInputValue(){
var bmital=0;
var diagnose="";

var navn=document.getElementById("navn").value;
var hojde = document.getElementById("hojde").value;
var vaegt = document.getElementById("vægt").value;

//Under 19,5	Undervægt
//20-24,9	Normal vægt
//25-29,9	Moderat overvægt 
//30-39,9	Fedme  
//Over 40	Svær fedme
//vægt / (højde x højde) = BMI

bmital =(vaegt)/((hojde/100)*(hojde/100));
if(bmital<=19.5){
    diagnose="Undervægtig";
} 
else if(bmital>=20 && bmital<= 24.9)
{
    diagnose="Normal vægtig";
}
else if(bmital>=25 && bmital<= 29.9)
{
    diagnose="Moderat overvægtig";
}
else if(bmital>=30 && bmital<= 39.9)
{
    diagnose="Fedme";
}
else if(bmital>40)
{
    diagnose="Svær fedme";
}

var diagstring = "diagnosen er "+" "+diagnose;

document.getElementById("dia").innerHTML="Hej "+navn+"  "+"din BMI er "+bmital.toFixed(1)+"<br> "+diagstring;
}