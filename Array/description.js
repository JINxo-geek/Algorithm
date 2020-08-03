// 测试模板

let arr1 = Array.from(new Array(100000),(x,index)=>{
    return index
})

let arr2 = Array.from(new Array(50000),(x,index)=>{
    return index+index
})

let start = new Date().getTime()

console.log('开始去重')
function distinct(a,b) {
    //去重  
}
console.log('去重的长度',distinct(arr1,arr2).length)
let end = new Date().getTime()

console.log('耗时间',end - start)

//第一种去重

function distinct(a,b) {
let arr = a.concat(b)
return arr.filter((item,index)=>{
    return arr.indexOf(item) === index
})
}

//双重for循环
function distinct(a,b) {
    let arr = a.concat(b)
    for(let i = 0,len = arr.length;i<len;i++){
        for(let j=i+1;j<len;j++){
            if(arr[i]==arr[j]){
                arr.splice(j,1);
                len--;
                j--;
            }
        }
    }
}

//另一种双重for循环。

function distinct(arr) {
    let result = []
    for(let i of arr){
        !result.includes(i) && result.push(i);
    }
    return result;
}

//先排序再去重

function distnct(arr) {
    arr.sort()
    let result = []
    for(let i=1,len = arr.length;i<len;i++){
        arr[i] !== arr[i-1] && result.push(i);
    }
    return result
}

//利用Set去重

function distinct(arr) {

    return Array.from(new Set([...arr]))
    
}


//利用对象属性名不会重复

function distinct(arr) {
    let result = [];
    let obj = {}
    for(let i of arr){
        if(!obj[i]){
            result.push(i)
            obj[i] = 1
        }
    }
    return result
}