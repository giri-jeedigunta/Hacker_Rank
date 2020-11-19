const matchingSocks = (socks) => {
    let sockStack = [];
    let counter = 0;
    for(var i = 0; i < socks.length; i++) {
        if(sockStack.indexOf(socks[i]) === -1) {
            console.log('if');
            sockStack.push(socks[i]);
        } else {
            console.log('else', sockStack.indexOf(socks[i]));
            sockStack.splice(sockStack.indexOf(socks[i]), 1);
            console.log('else arr->', sockStack);
            counter ++;
        }
    }
    console.log('arr->', sockStack);
    console.log('counter =>', counter);    
    return counter;
}

matchingSocks([10,20,20,10,10,30,50,10,20]);