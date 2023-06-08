function fib(num){
    let n1 = 0; 
    let n2 = 1; 
    let nextNum;
    for(let i = 0; i < num; i++){
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextNum;
    }
};
fib(8);

function fibRec(num){
    if(num <= 1){
        return num;
    } else{
        return (fibRec(num - 1) + fibRec(num - 2));
    }
};
fibRec(8);