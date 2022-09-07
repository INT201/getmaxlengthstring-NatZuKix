const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  if (arrayOfString == null) {
    return undefined;
  } else if (arrayOfString == undefined) {
    return undefined;
  } else {
    let text=[arrayOfString[0]];
    let text2=arrayOfString[0];
    for (i=0; i<arrayOfString.length; i++){
     if(i+1<arrayOfString.length){
      if(text2.length<arrayOfString[i+1].length){
        text2=arrayOfString[i+1];
        text=[];
        text=[arrayOfString[i+1]];
      }else if(text2.length==arrayOfString[i+1].length){
       text.push(arrayOfString[i+1]);
      }
     }
    }
    return text;
    }
}
module.exports = getMaxLengthString

//console.log(getMaxLengthString(undefined));
//console.log(getMaxLengthString(null));
console.log(getMaxLengthString(['hello', 'hi', 'hey', 'Good Evening', 'Good Morning']));
console.log(getMaxLengthString(['hello', 'hi', 'hey']));
console.log(getMaxLengthString(['hi']));
