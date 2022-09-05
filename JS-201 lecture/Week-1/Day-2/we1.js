
function NikeProduct(n,p,t){
    this.name=n,
    this.price=p,
    this.type=t
    
}


let arr=[];
function addProduct(event){
    event.preventDefault();
    let form=document.getElementById('product_form');
    let name = form.name.value;
    let price =form.price.value;
    
    // we have passed the form and id  and then value;
     let p1= new NikeProduct(name,price);
    arr.push(p1);
    console.log('arr',arr);
    // cunstructor function can create object.
    // CF can act as blueprint

    
}
