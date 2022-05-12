const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="../img/light-logo.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">men</li>
                <li><a href="#" class="footer-link">Clothing</a></li>
                <li><a href="#" class="footer-link">Footwear</a></li>
            
                
            </ul>
            <ul class="category">
                <li class="category-title">women</li>
                <li><a href="#" class="footer-link">Clothing</a></li>
                <li><a href="#" class="footer-link">Footwear</a></li>
            </ul>
        </div>
    </div>
    <br>
    <p class="footer-title">about company</p>
    <p class="info">UTOPIA is the celebration of Colours, Class and Craftsmanship. Value fast E-commerce  that offers a compelling range of products.
    All our Products are made with best quality fabrics and accessories by set of experienced craftsmen. In utopia, we are committed to providing our customers with great quality products at lower prices.</p>
    <p class="info">support emails - help@utopia.com, customersupport@utopia.com</p>
    <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
    <div class="footer-social-container">
        <div>
            <a href="aboutus.html" class="social-link">about us</a>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="https://www.instagram.com/vidhi.saxena.14/" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">Utopia, Best apparels online store</p>
    `;
}

createFooter();