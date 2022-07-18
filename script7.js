function dev(arr){
    //creating the mean with array.reduce//
    let mean = arr.reduce((acc, curr)=>{
        return acc + curr}, 0)/ arr.length;
//Assigning (value - mean)^ 2 for the mean to every array item
        arr = arr.map((k)=>{
            return (k - mean) ** 2
        })
//calculating the sum of the new array//
        let sum = arr.reduce((acc, curr)=> acc + curr, 0);
//code for calculating the variance
        let variance = sum / arr.length

        return Math.sqrt(sum/arr.length)//returning the standard deviation
}

console.log(dev([1, 2, 3, 4, 5]))
console.log(dev([23, 5, 7, 450, 65, 6, 45, 8]));