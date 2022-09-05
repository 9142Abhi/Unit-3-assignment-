

function appendData(){
    let data=JSON.parse(localStorage.getItem('students'))||[];
    let container=document.getElementById('container');
    container.innerHTML=null;
    data.forEach(el => {
        let div=document.createElement('div');
        let image=document.createElement('img');
        img.src=el.image;
        let p=document.createElement('p');
        p.innerText=el.name;
        let btn=document.createElement('button');
        btn.innerText='Remove';
    
        div.append(img,p,btn);
        container.append(div);
    
    
    
    });
    
    
    
    
    }
    
    
    