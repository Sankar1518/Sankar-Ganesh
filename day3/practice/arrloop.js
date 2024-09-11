let arr=[1,2,3,4,6,8,11,13,17]
let even=[]
let odd=[]
for(i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        even.push(arr[i])
    }
    else{
        odd.push(arr[i])
    }
}
console.log("Even number:",even)
console.log("Odd Number:",odd)

