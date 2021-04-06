function maxNumber (numero: number[]){
var maxNum: number | boolean = false;
numero.forEach((e)=>{
    if (!maxNum) {
        maxNum = e;
    }else{
        if ( e > maxNum ){
            maxNum = e;
        }

    }
})
console.log(maxNum)
}

maxNumber([1, 2, 3, 4, 1, -5])