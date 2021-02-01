/*
Quick Question #1
What does the following code return?

new Set([1,1,2,2,3,4])

Answer 
A Set with the elements: 1, 2, 3, 4

*/

/*

Quick Question #2
What does the following code return?

[...new Set("referee")].join("")

Answer 
"ref"

*/

/*

Quick Questions #3
What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

Answer 
Since Maps can have objects as keys and since the above used two different literal arrays 
we wind up with a map with two entries. The first is set to true and the second false.
*/

// hasDuplicate function
const hasDuplicate = (arr) => {
    if(arr.length === new Set(arr).size){
        return false;
    }
    return true; 
};



// vowelCount Function
const vowelCount = (str) =>{
    const arr = str.split('').filter(b => 'aeiou'.includes(b));
    return arr.reduce((a,b)=>{
       a[b] = (a[b] || 0) + 1; 
       return a;
    }, new Map());
};