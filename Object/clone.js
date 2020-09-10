/**
 *@function shallClone
*@param {any}target
*@desciption 浅拷贝 
 */

 const shallClone = (target) => {
     if (typeof target === 'object' && target !== null) {
         const cloneTarget = Array.isArray(target) ? [] : {};
         for (let prop in target) {
             //遍历对象自身可枚举属性 （不考虑继承属性和原型对象）
             if(target.hasOwnProperty(prop)){
                 cloneTarget[prop] = target[prop]
             }
         }
         return cloneTarget;
     } else {
         return target;
     }
 }