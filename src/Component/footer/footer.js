import React from "react";
import "./footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

function Footer() {
  return (
    <>
      <div class="footer-dark">
        <footer>
          <div class="container footer">
            <div class="row">
              <div class="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <a href="#">Web design</a>
                  </li>
                  <li>
                    <a href="#">Development</a>
                  </li>
                  <li>
                    <a href="#">Hosting</a>
                  </li>
                </ul>
              </div>
              <div class="col-sm-6 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="#">Company</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-6 item text lastinfooter">
                <h3>Tejas Gallary app</h3>
                <p>
                  Here, You can upload each kind of image and see other images
                  which is uploaded by others user.
                </p>
                <p>If you find something useful then subscribe our chanel.</p>
              </div>
            </div>
            <div class="col item social iconworld">
              <div className="insta">
                <a href="https://www.instagram.com/tejas__tank_235/">
                  <InstagramIcon />
                </a>
              </div>
              <div className="twitter">
                <a href="https://twitter.com/TejasTa65040578">
                  <TwitterIcon />
                </a>
              </div>
              <div className="linked">
                <a href="https://www.linkedin.com/in/tejas-tank-122648204/">
                  <LinkedInIcon />
                </a>
              </div>
              <div className="face">
                <a href="https://www.facebook.com/tejas.tank.94064">
                  <FacebookIcon />
                </a>
              </div>
            </div>
          </div>
          <p class="copyright">Tejas Social Media © 2022</p>
        </footer>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
    </>
  );
}

export default Footer;
