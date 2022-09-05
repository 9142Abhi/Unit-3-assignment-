
// constructor - to build
//what are we building - object

// console.log(this);

// this -global object
//global - access to everywhere 
// object - store key value pairs

// global object
// var age =15;

// console.log(this);
 
// this -> object

// function nikeeProducts(n,p,t){
//     let obj={};
//     obj.name=n;
//     obj.price=p;
//     obj.type=t;
//     return obj;
// }
// let p1= new nikeeProducts('x',2000,'shoes')
// console.log(p1);

// function Product(n,p,t){
//     this.name=n,
//     this.price=p,
//     this.type=t
    
// }
// let nikeeProduct = new Product('spark',2000,'shoes')
// console.log(nikeeProduct)

// call, apply, bind

//call - function
// CAB are related to function
// properties available on function

// const kitchen ={
//     name:'kitchen',
//     purpose:'cook',

//     cookFood(order){
//         console.log(`serving ${order} in ${this.name}`)
//     }
// }


// const bedroom ={
//     name:'bedroom',
//     purpose:'sleep',

// };
// // what if you can access kitchen from bedroom?

// //how can i access method of one object (kitchen) on another
// // call
//     kitchen.cookFood('maggie');
//     //serving maggie in bedroom

//     // this -> kitchen
//     // this -> bedroom
    
//     // how can i change the value of this
//     // we need to use call function
    
//     // 1st argument- new value of this ?
//     kitchen.cookFood.call(bedroom,'maggie');







// let msg='hello world';
// let person='pablo';
// let output= person+' says '+msg;
// let output2=`${person} says ${msg}`;
// console.log(output2);

// ringing a bell is a process

let person1={
    name:'raju',
}

let person2={
    name:'babu bhaiya',
}

let person3={
    name:'kachra seth',
}


    // function ringBell(){
    //     console.log(`${this.name} rang the bell`);

    // }
    // // am i trying to change the value of this?
    // ringBell.call(person3); // this -> person2

// function ringBell(day,action){
//     console.log(`${this.name} rang the bell on ${day} and ${action}`)
// }
//     ringBell.apply(person2,['Thursday','ran']);

function ringBell(day,action){
    console.log(`${this.name} rang the bell on ${day} and ${action}`)
}
//call-comma
// apply-array
// bind-same as call(comma)




// new value of 'this', object
 let x  = ringBell.bind(person2,'Thursday','sleep');
x();
// .bind returns a function
