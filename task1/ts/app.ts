
// const fuction=()=>{
const row:any = document.querySelector('.row') as HTMLDivElement;
const btn:any = document.querySelectorAll('button') as unknown as HTMLButtonElement;
var startCount:number = 0;
var endCount:number = 50;
const myfunction=()=>{
    
    fetch('https://restcountries.com/v3.1/all')
    .then((res:any):any=>{return res.json()})
    .then((data:any)=>{
        // console.log(data);
        var card="";
        for (var i = startCount; i < endCount; i++) {
           card+=`
           <div class="col-12 col-sm-6 col-md-4">
           <div class="card" >
            <img src=${data[i].flags.png} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data[i].name.common}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">${data[i].capital}</a>
                <p>${i+1}</p>
            </div>
            </div>
           </div>
           `
           row.innerHTML= card;
        }
    })
}
btn[0].onclick=()=>{
     startCount=0;
     endCount = 50;
    myfunction();
}
btn[1].onclick=()=>{
     startCount=50;
     endCount = 100;
    myfunction();
}
btn[2].onclick=()=>{
     startCount=100;
     endCount = 150;
    myfunction();
}
btn[3].onclick=()=>{
     startCount=150;
     endCount = 200;
    myfunction();
}




myfunction();

