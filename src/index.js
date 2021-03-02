module.exports = function check(str, bracketsConfig) {
  // your solution
  let stack = [];
  let brackets = {};
  for(let i = 0; i < bracketsConfig.length; i++) {
  	brackets[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }
  for(let i = 0; i < str.length; i++) {
    if(brackets[str[i]]) {
    	if(stack && stack[stack.length - 1] == str[i]) stack.pop();
    	else stack.push(brackets[str[i]]);
    }
    else {
    	if(stack && str[i] == stack[stack.length - 1]) stack.pop();
    	else return false;
    }
  }
  return stack.length == 0;
}
