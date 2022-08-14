/**
 * @param {string} s
 * @return {boolean}
 */
 
//  js code assume {} as another object thats why we took string map 
 var mapObject = {
    "(": ")",
    "[": "]",
    "{": "}"
 };

 var isValid = function(s) {
    
    if(s.length <= 1){
        return false;
    }
    // if string length is odd then we know we will be missing a closing bracket
    if(s.length % 2 != 0)
    {
      return false;
    }

    var stack = [];

    for(let i = 0; i < s.length; i++){
        if(mapObject[s[i]]){
            stack.push(s[i]);
        }
        else {
            if(s[i] != mapObject[stack.pop()]){
                return false;
            }
        }
    }

    return stack.length === 0;

    
};

console.log(isValid("{()[]{}{}}"));