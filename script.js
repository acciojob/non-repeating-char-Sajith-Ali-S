//your JS code here. If required.
function f(str){
    let len = str.length;
    let count =1;
    let i =0;
    let j =1;
	while(i<len && j<len){
        if(str.charAt(i)==str.charAt(j)){
            j++
            count++
        }
        else{
            if(count==1)return str.charAt(i)
            i=j;
            j= i+1;
            count=1
        }
    }
}

var str = prompt();
alert(f(str))