    let num = 1221;
    num = num.toString();
    let count = 0;
    
    for(let i=0; i<=num.length/2; i++){
        if(num[i]===num[num.length-1-i]){
            count++;
        }
    }
    
    console.log(count);