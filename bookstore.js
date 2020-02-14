function getdata(){
    
    fetch('https://api.myjson.com/bins/zyv02')
    .then(response=>response.json())
    .then(data => {
        console.log(data)
        console.log(data.books)

    var books=data.books

     buildCard(books) 
     addEvent(books)  
    
  })
.catch(error => console.error(error))
}
getdata()
function handelclick(event){
    var picture=document.getElementById("modal-image")
    picture.src=event.target.id

}

function buildCard(array){
    var bookstore=document.getElementById("bookstore")
    array.forEach(element =>{
        var book=`
        <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src=${element.cover} alt="Avatar" style="width:300px;height:300px;">
              </div>
              <div class="flip-card-back">
                <h1>${element.title}</h1>
                <p>${element.description}</p>
                <button  id=${element.detail} onclick="handelclick(event)" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                 more info
                </button>
              </div>
            </div>
          </div>
          `
          bookstore.innerHTML+=book

    } );



}

function addEvent(array) {
    var search = document.getElementById("search");


    search.addEventListener("keyup",()=>booksearch(array))

    
  }

  
function booksearch(array){
    var search = document.getElementById("search").value;
    var bookstore= document.getElementById("bookstore")
    var filter= array.filter(book=>book.title.toLowerCase().includes(search.toLowerCase()) || book.description.toLowerCase().includes(search.toLowerCase()))
    
    if(filter.length >0 ){
    bookstore.innerHTML=""
    buildCard(filter)
        
      }

  }


  
  


