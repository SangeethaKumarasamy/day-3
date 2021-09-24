//FOR LOOP:
for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

//FOR IN LOOP:
const numbers = [0,1,2,3];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}

//FOR OF LOOP:
let language = "JavaScript";
let text = "";
for (let x of language) {
text += x;
}


//FOR EACH LOOP:
let sum = 0;
const numbers = [65,12,4];
numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
}

//creating a resume
var obj_resume={
   
    basics:{
    name:"Sangeetha Kumarasamy",
    email:"vpksangeetha@gmail.com",
    mobile_number:"824892932",
    Address:"Sankari,Salem",
    pincode:"637301",
    },
    education:{
        pg_qualification:"ME.,Communication Systems",
        college:"Kongu Engineering college,Erode",
        Passed_out_year:"2018",
        CGPA:"7.5",
        ug_qualification:"BE.,ECE",
        college:"Vivekanandha college of Engineering for women,Namakkal",
        Passed_out_year:"2016",
        CGPA:"71.2", 
    },
    work_experience:{
        company:"CSIR-National Physical Laboratory",
        location:"New Delhi",
        Position:"student-Intern",
        period:"6_months(1st dec,2017 to 5th june 2018)",
        project_name:"A study on the influence of various parameters of antenna in TWSTFT",        
    },
    publications:{
        ME_phaseI_project:"poster publication",
        location:"Chennai",
        year:"2017",
        Theme:"Digital India",
        Event_name:"IISF",
    },
    software:{
        Name:"Ansys(Antenna design)",
    },
   }
 
console.log(obj_resume);


