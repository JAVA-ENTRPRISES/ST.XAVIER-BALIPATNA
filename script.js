/* --- LOAD COMMON HEADER & FOOTER --- */

document.addEventListener("DOMContentLoaded", function () {

    /* HEADER */
    const header = `
    <header>
        <nav>
                    <div style="width: 80px; height: 80px; background: #444; display: flex; align-items: center; justify-content: center; border-radius: 5px; flex-shrink: 0;">
                <img src="image/LOGO.png" alt="Logo"
             style="width: 80px; height: 80px; object-fit: contain; border-radius: 5px; flex-shrink: 0;">

            </div>

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
      <footer>
    <div class="footer-container" style="display: flex; justify-content: space-between; gap: 30px; flex-wrap: wrap;">

        <!-- About Section -->
        <div class="footer-section" style="display: flex; align-items: flex-start; gap: 15px; max-width: 300px;">
            
            <!-- LOGO -->
            <div style="width: 80px; height: 80px; background: #444; display: flex; align-items: center; justify-content: center; border-radius: 5px; flex-shrink: 0;">
                <img src="image/LOGO.png" alt="Logo"
             style="width: 80px; height: 80px; object-fit: contain; border-radius: 5px; flex-shrink: 0;">
            </div>

            <!-- TEXT -->
            <div>
                <h3>About School</h3>
                <p>ST. Xavier School, Balipatna, Khordha is committed to quality education and overall student development.</p>
            </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-section">
            <h3>Quick Links</h3>
            <ul style="list-style: none; padding: 0;">
                <li><a href="index.html">Home</a></li>
                <li><a href="facility.html">Facilities</a></li>
                <li><a href="gallery.html">Gallery</a></li>
            </ul>
        </div>

        <!-- Contact -->
        <div class="footer-section">
            <h3>Contact</h3>
            <p>Email: xavierbalipatna@gmail.com</p>
            <p>Phone: +91 9040211028</p>
            <p>Location: Balipatna, Khordha</p>
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
