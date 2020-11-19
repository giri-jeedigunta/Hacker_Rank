let isBalanced = (input) => {

    let bracketsDef = "[]{}()";
    let bracketsStack = [];
  
    for(let currentBracket of input) {
      // Left bracket: 
      let bracketsIndex = bracketsDef.indexOf(currentBracket)
  
      // Skips all the non-bracket values
      if (bracketsIndex === -1){
        continue
      }
  
      if(bracketsIndex % 2 === 0) {
        // Push Matching Right Bracket 
        bracketsStack.push(bracketsIndex + 1)
      } else {
        if(bracketsStack.length === 0 || bracketsStack.pop() !== bracketsIndex) {
          return false;
        }
      }
    }
    return bracketsStack.length === 0
  }

  console.log('Balanced : ', isBalanced("{[(])}"));