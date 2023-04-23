function f(str){
    let len = str.length;
    for(let i =0; i< len; i++){
        let currentCharacter = str.charAt(i);
        let count =0;
        for(let j =0; j<len;j++){
            let strIterationCharacter = str.charAt(j);
              if(currentCharacter==strIterationCharacter)count++;
        }
        if(count==1)return currentCharacter;
    }
    return null;
    }

var str = prompt();
alert(f(str))