const row:any = document.querySelector('.row') as HTMLDivElement;
const men:any = document.querySelector('.men') as HTMLDivElement;
const jew:any = document.querySelector('.jew') as HTMLDivElement;
const elec:any = document.querySelector('.elec') as HTMLDivElement;
const women:any = document.querySelector('.women') as HTMLDivElement;

var startCount = 0;
var endCount = 4;

const myfunction=()=>{
fetch('https://fakestoreapi.com/products')
.then((res:any):any=>{return res.json()})
.then((data:any)=>{
    console.log(data);
    
    var card="";
    for (let i = startCount; i < endCount; i++) {
      card+= `<div class="col-12 col-sm-6 col-md-3">
      <div class="card" style="width: 18rem;">
        <img src=${data[i].image} class="card-img-top" alt="..." >
        <div class="card-body">
            <h5 class="card-title">${data[i].title}</h5>
            <p class="card-text">${data[i].price}$</p>
            <a href="#" class="btn btn-primary">Buy Now</a>
        </div>
        </div>
      </div>
      `
      row.innerHTML=card;
        
    }
})
}

men.onclick=()=>{
    startCount=0;
    endCount = 4;
    myfunction();
}
jew.onclick=()=>{
    startCount=4;
    endCount = 8;
    myfunction();
}
elec.onclick=()=>{
    startCount=12;
    endCount = 16;
    myfunction();
}
women.onclick=()=>{
    startCount=16;
    endCount = 20;
    myfunction();
}



myfunction();