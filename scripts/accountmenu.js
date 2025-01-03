let accountcanvas =()=>{
    let accountmenuCard = ` <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="accountMenu" aria-labelledby="accountMenuLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="accountMenuLabel">Account</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link" href="/profile.html"><i class="bi bi-person-circle"></i> Profile</a></li>
          <li class="nav-item"><a class="nav-link" href="#"><img src="https://img.icons8.com/?size=100&id=14312&format=png&color=FFFFFF"> Address</a></li>
          <li class="nav-item"><a class="nav-link" href="#"><img src="https://img.icons8.com/?size=100&id=nmdLxlZq4cQi&format=png&color=FFFFFF">  Orders</a></li>
          <li class="nav-item"><a class="nav-link" href="#"><i class="bi bi-heart"></i>  WishList</a></li>
          <li class="nav-item"><a class="nav-link" href="#" id="Login_Modal" data-bs-toggle="modal" data-bs-target="#LoginModalLabel"><i class="bi bi-power"></i> Login</a></li>
        </ul>
       
      </div>
    </div>`;
    document.getElementById("accountcanvas").innerHTML=accountmenuCard
 }
 accountcanvas()