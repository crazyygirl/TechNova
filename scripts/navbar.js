const navbar = () =>{
let card = ` <nav class="navbar navbar-dark bg-black fixed-top">
          <div class="container-fluid">
            <a class="navbar-brand ms-3" href="#">TechNova</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#mainMenu" aria-controls="mainMenu">
              <span class="navbar-toggler-icon"></span>
            </button>
              <form class="d-flex mx-auto" role="search">
              <input class="form-control" type="search" placeholder="What are you looking for" aria-label="Search">
            </form>
              <div class="d-flex" style="margin: 0 100px 0 0;">
              <a href="#" class="text-white me-3"><i class="bi bi-geo-alt-fill">enter location</i></a>
              <a href="" class ="me-3" id="location_Model" data-bs-toggle="modal" data-bs-target="#exampleModal"> <i class="bi bi-pencil-square"></i></a>
    
              <a href="#accountMenu" class="btn btn-dark p-0 me-3" data-bs-toggle="offcanvas" aria-controls="accountMenu">
                <i class="bi bi-person-fill"></i>
              </a>
      
      
              <a href="#" class="text-white"><i class="bi bi-cart-fill"></i></a>
            </div>
          </div>
        </nav>`;

        document.getElementById("nav").innerHTML = card;
}
navbar()