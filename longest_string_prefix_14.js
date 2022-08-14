const { doesNotMatch } = require("assert");

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    
    //   if array only have on element then that element is the answer string 
      if(strs.length == 1)
       {
         return strs[0];
       }
    
    // if array is empty then return empty string 
      if(strs.length == 0)
       {
         return '';
       }
    

    // sorts array smallest to biggest so that we can compare the first element to the rest of the array easily 

    strs.sort(function(a, b){
    return a.length - b.length;
    });
  
   
    // initailly assuming longest array element doesNotMatch macth any other element in the array
    
   var stringIndex = -1;

   for(let j = 0; j < strs[0].length; j++)
   {

     found = false;
     for(let i = 1; i < strs.length; i++)
     {
       if(strs[0][j] == strs[i][j])
       {
         found = true;
       }
       else
       {
         found = false
         break;
       }
       
     }
    
    //  if current character in first element match all others current character then we will increment then index number of current matching character 
     if(found)
       {
         stringIndex++;
       }
       else
       {
        break;
       }
       
   }
   
   
   
   if(stringIndex > -1)
   {
    return  strs[0].substring(0,stringIndex+1);
   }
   else
   {
   return '';
   }
  
};

var strs = ["flowertime","flowersts","flight"];


console.log(longestCommonPrefix(strs));