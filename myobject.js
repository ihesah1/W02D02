const checkValues = (obj, value) =>  {
   for(let i in obj ){
       if (obj[i] == value){
           return true;
       }
   }
   return false;
}
  checkValues({name:"ahmed",age:15},15) // => true
  checkValues({name:"ahmed",age:15},20) // => false


  const courseInfo = {
    name: "Code 301",
    duration: { dayTrack: "4 weeks", eveningTrack: "8 weeks" },
    topics: [
      "SMACSS",
      "APIs",
      "NodeJS",
      "SQL",
      "jQuery",
      "functional programming",
    ],
    finalExam: true,
  };
  
  const getCourseKeys = (obj) => {
    return Object.keys(courseInfo)
  };
  
  getCourseKeys(courseInfo)// => ['name', 'duration', 'topics', 'finalExam']
 
//chalenge 4

  const PassedOrFailed = function (studentGrades) {
     for(let i in studentGrades ){
         if(studentGrades[i]["grade"] / studentGrades[i]["total"] > 0.5){
             return "student passed";
         }
     }return "student failed"
  };
  const studentOne = {
    math: { grade: 70, total: 120 },
    english: { grade: 80, total: 100 },
    art: { grade: 90, total: 100 }
  };
  PassedOrFailed(studentOne); // =>  "The student have passed"
 
  //challeng 5
  const totalCharacters = (arr) => {
    let charcter = 0;
    arr.forEach((element) => {
         charcter = charcter + element.length;
        
    });return charcter;
  };
  
  totalCharacters(["abc","yz"]) // => 5