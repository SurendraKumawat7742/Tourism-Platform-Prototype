import React, {useState} from "react";

function Footer() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div class="container-fluid" style={{ backgroundColor: "#dcdcdc" }}>
      <div class="row p-5" style={{ marginLeft: "55px" }}>
        <div class="col-2">
          <p class="text-muted">About NavikVerse</p>
          <a href="">About Us</a>
          <br></br>
          <a href="">Press</a>
          <br></br>
          <a href="">Resources and Policies</a>
          <br></br>
          <a href="">Careers</a>
          <br></br>
          <a href="">Trust & Safety</a>
          <br></br>
          <a href="">Contact us</a>
          <br></br>
          <a href="">NavikVerse Technology Blog</a>
          <br></br>
        </div>
        <div class="col-2">
          <p class="text-muted">Explore</p>
          <a href="">Write a review</a>
          <br></br>
          <a href="">Add a Place</a>
          <br></br>
          <a href="">Join</a>
          <br></br>
          <a href="">Travellers' Choice</a>
          <br></br>
          <a href="">Help Centre</a>
          <br></br>
          <a href="">Travel Stories</a>
          <br></br>
        </div>
        <div class="col-2">
          <p class="text-muted">Do Business With Us</p>
          <a href="">Owners & DMO/CVB</a>
          <br></br>
          <a href="">Business Advantage</a>
          <br></br>
          <a href="">Sponsored Placements</a>
          <br></br>
          <a href="">Access our Content API</a>
          <br></br>
          <br></br>

          <p class="text-muted">Get The App</p>
          <a href="">iPhone App</a>
          <br></br>
          <a href="">Android App</a>
          <br></br>
        </div>
        <div class="col-2"></div>
        <div class="col-4">
          <p class="text-muted">NavikVerse Sites</p>
          <p class="text-muted">
            Book tours and attraction tickets on <a href="">Viator</a>
          </p>
        </div>
      </div>

      <div class="row p-5" style={{ marginLeft: "55px" }}>
        <div class="col-8 ">
          <div class="d-flex">
            <div class="col-1">
              <img
                src="Images/logo.jpg "
                style={{ width: "70px", borderRadius: "50px" }}
              />
            </div>
            <div class="col-7 mb-2" style={{ marginLeft: "20px" }}>
              <p class="text-muted" style={{ fontSize: "12px" }}>
                © 2025 NavikVerse LLC All rights reserved.
              </p>

              <b>
                <a href="">Terms of Use</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="">Privacy and Cookies Statement</a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="">Cookie consent</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="">Site Map</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="">How the site works</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="">Contact us</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="">Accessibility Statement</a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </b>
            </div>
          </div>
          <p>
            <p>This is the version of our website addressed to speakers of English in India. If you are a resident of another country or region, please select the appropriate version of NavikVerse for your country or region in the drop-down menu.</p>{" "}
            {showMore && (
              <span>
                <p>NavikVerse LLC makes no guarantees for availability of prices advertised on our sites and applications. Listed prices may require a stay of a particular length or have blackout dates, qualifications or other applicable restrictions. NavikVerse LLC is not responsible for any content on external web sites that are not owned or operated by NavikVerse .</p>

                <p>NavikVerse LLC is not a booking agent or tour operator. When you book with one of our partners, please be sure to check their site for a full disclosure of all applicable fees.</p>
              </span>
            )}
          </p>

          <button
            className="btn btn-link p-0"
            onClick={() => setShowMore(!showMore)}
            style={{color:"black"}}
          >
            {showMore ? "Read Less ^" : "Read More"}
          </button>
        </div>
        <div class="col-4">
          <div
            class=" d-flex gap-5 "
            style={{ width: "400px", marginLeft:"30px"}}
          >
            <select>
              <option value="INR">₹ INR</option>
              <option value="USD">$ USD</option>
              <option value="EUR">€ EUR</option>
              <option value="GBP">£ GBP</option>
            </select>

            <select>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Japan">Japan</option>
            </select>
          </div>
          <div class="p-3 mt-4">
            <i class="fa-brands fa-facebook" style={{marginLeft:"15px", fontSize:"25px"}}></i>
            <i class="fa-brands fa-instagram" style={{marginLeft:"15px", fontSize:"25px"}}></i>
            <i class="fa-brands fa-pinterest-p" style={{marginLeft:"15px", fontSize:"25px"}}></i>
            <i class="fa-brands fa-youtube" style={{marginLeft:"15px", fontSize:"25px"}}></i>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
