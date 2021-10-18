
  const addOne = (arr) => {
    let newarr = [];
    
    arr.forEach(function (item,index){
        newarr.push(item+1)
    })
    return newarr
  };
  addOne([1,2,3]) // => [2,3,4]
  



//challeng2

const addExclamation = (arr) => {
     let newarray = []
     arr.forEach(function (item){
        newarray.push(item + '!' )
     }) ;   
     return newarray;   
    }
  
  addExclamation(["one","two","three"]) // => ["one!","two!","three!"]


  //challeng3

  const addOneByMap = (arr) => {
    let arr3 = [];
    arr=arr.map(function(item) { 
      arr3.push(item+1)  
      

    });
    return arr3;
}   

  addOneByMap([1,2,3]) // => [2,3,4]
  addOneByMap([10,11,12]) // => [11,12,13]

//-----------------------------------------
//challeng4
const addQuestion = (arr) =>
{
    let arr4=[];
    arr.forEach(function(item){
         arr4.push(item + '?')
    });
   return arr4;
}
addQuestion(["one","two","three"]) 
// => ["one?","two?","three?"]

//-------------------------------------------
//challeng 5

const forLoopTwoToThe = (arr) => {
    const arr5 = arr.map((element) => {
      return Math.pow(2, element);
    });
  
    return arr5;
  };
  forLoopTwoToThe([1, 2, 3]); // => [2,4,8]
  
//CHALLENGE 6

const typeNum = (arr) => {
    const arr2 = arr.filter((element) => {
      return typeof element === "number";
    });
  
    return arr2;
  };
  
  typeNum([1, "bob", 3]); // => [1,3]
  
  //CHALLENGE 7
  
  const containsAnd = (arr) => {
    const arr2 = arr.filter((element) => {
      return element.includes("and");
    });
  
    return arr2;
  };
  
  containsAnd(["panda", "ran", "and"]);
  
  //CHALLENGE 8
  
  const oddValues = (arr) => {
    const arr2 = arr.filter((element) => {
      return element % 2 == 1;
    });
  
    return arr2;
  };
  
  oddValues([1, 2, 3]);
  
  //CHALLENGE 9
  
  const addValues = (arr) => {
    const sum = arr.reduce(function (acc, item) {
      acc += item;
      return acc;
    }, 0);
    return sum;
  };
  
  addValues([1, 2, 3, 4]); // => 10
  addValues([15, 10, 15, 5]); // => 45
  

  
//challeng100
