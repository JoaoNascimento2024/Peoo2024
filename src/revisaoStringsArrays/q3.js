
function isPalindrome(str){       
    return str.toLowerCase().replaceAll(" ","") === 
        str.toLowerCase().replaceAll(" ","").split("").reverse().join("") ? true : false;
}

console.log(isPalindrome("A man a plan a canal Panama"));

