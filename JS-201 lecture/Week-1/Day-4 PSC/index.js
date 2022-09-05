

function student(n,c,u,i,b){
    this.name=n;
    this.course=c;
    this.unit=u;
    this.image=i;
    this.batch=b;
}


let data=JSON.parse(localStorage.getItem('students'))||[]; 

 function storeData(event){
    event.preventDefault();
    let form=document.getElementById('students_data');
    
    let name=form.name.value;
    let course = form.course.value;
    let unit = form.unit.value;
    let image=form.image.value;
    let batch=form.batch.value;
    // console.log(name,course,unit,image,batch);
    let a = new student(name,course,unit,image,batch);
    data.push(a);
localStorage.setItem('students',JSON.stringify(data));


 }

 function calculate(){
    
    let obj={};
    for(let i=0;i<data.length;i++){
        if(obj[data[i].batch]==undefined){
            obj[data[i].batch]=1;
        }else{
            obj[data[i].batch]++;
        }
    }
    // console.log(obj);

    let count=document.getElementById('count');
    count.innerHTML=null;
    let div=document.createElement('div');
    for(let key in obj){
        let p = document.createElement('span');
        p.innerText=`${key} ${obj[key]}`;
        div.append(p);
    }
    count.append(div);
 }
 calculate();
