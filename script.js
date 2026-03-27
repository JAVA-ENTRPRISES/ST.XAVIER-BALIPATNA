/* --- LOAD COMMON HEADER & FOOTER --- */

document.addEventListener("DOMContentLoaded", function () {

    /* HEADER */
    const header = `
    <header>
        <nav>
            <h2 class="logo-text">ST XAVIER HIGH SCHOOL,KHORDHA</h2>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="facility.html">Facilities</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="mandatory.html">Mandatory</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    `;

    /* FOOTER */
    const footer = `
    <footer>
        <div class="footer-container">

            <div class="footer-section">
                <h3>About School</h3>
                <p>ST.Xavier School,Balipatna,Khordha is committed to quality education and overall student development.</p>
            </div>

            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="facility.html">Facilities</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h3>Contact</h3>
                <p>Email: school@gmail.com</p>
                <p>Phone: +91 9999999999</p>
                <p>Location: Balipatna,khordha</p>
            </div>
            <div> <h3>School Logo</h3>
                <div style="width: 80px; height: 80px; background: #444; display: flex; align-items: center; justify-content: center; border-radius: 5px;">
                    LOGO
                </div>
</div>

        </div>

        <div class="footer-bottom">
            <p>© 2026 ST XAVIER HIGH SCHOOL | All Rights Reserved</p>
        </div>
    </footer>
    `;

    /* INSERT INTO PAGE */
    document.getElementById("header").innerHTML = header;
    document.getElementById("footer").innerHTML = footer;

});


/* --- ACTIVE MENU HIGHLIGHT --- */
const links = document.querySelectorAll("nav ul li a");
links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});
