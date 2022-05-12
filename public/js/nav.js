
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if(scrollY >= 180){
            navbar.classList.add('bg');
        } else{
            navbar.classList.remove('bg');
        }
    })

    
    const createNav = () => {
        let nav = document.querySelector('.navbar');
    

    nav.innerHTML = `
        <div class="nav">
        <a href = "index.html"><img src="../img/dark-logo.png" class="brand-logo" alt="" style="margin-left:20px;"></a>
            <div class="nav-items">
            <ul class="links-container">
            <li class="link-item"><a href="#" class="link">home</a></li>
            <li class="link-item"><a href="productspage.html" class="link">products</a></li>
            <li class="link-item"><a href="aboutus.html" class="link">about us</a></li>
            <li class="link-item"><a href="seller.html" class="link">Become Seller</a></li>
            <li class="link-item"><a href="#contact-id" class="link">contact us</a></li>
        </ul>
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a>
                    <img src="../img/user.png" id="user-img" alt="">
                    <div class="login-logout-popup hide">
                        <p class="account-info">Log in as, name</p>
                        <button class="btn" id="user-btn">Log out</button>
                    </div>
                </a>
                <a href="/cart"><img src="../img/cart.png" alt=""></a>
            </div>
        </div>
    `;
}

createNav();

// nav popup
const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () => {
    userPopup.classList.toggle('hide');
})

window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if(user != null){
        // means user is logged in
        sessionStorage.setItem("logged in", true)
        popuptext.innerHTML = `log in as, ${user.name}`;
        actionBtn.innerHTML = 'log out';
        actionBtn.addEventListener('click', () => {
            sessionStorage.clear();
            location.reload();
        })
    } else{
        // user is logged out
        sessionStorage.setItem("logged in", false)
        //localStorage.getItem("cart") 
        popuptext.innerHTML = 'log in to place order';
        actionBtn.innerHTML = 'log in';
        actionBtn.addEventListener('click', () => {
            location.href = '/login';
        })
    }
}

// search box

const searchBtn = document.querySelector('.search-btn');
const searchBox = document.querySelector('.search-box');
searchBtn.addEventListener('click', () => {
    if(searchBox.value.length){
        location.href = `/search/${searchBox.value}`
    }
})