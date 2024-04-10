const Footer = () => {
  return (
    <div id="footer">
      {/* <!-- Footer --> */}
      <footer class="section">
        {/* <!-- Contact Form --> */}
        <form class="contact" id="contact">
          {/* <!-- Title --> */}
          <div class="footerSubTitle">Contact Form</div>
          <div class="text">Feel free to ask any queries here</div>

          {/* <!-- Name --> */}
          <div class="contactElement">
            <label for="name">NAME</label>
            <input type="text" id="name" class="contactInput" required />
          </div>

          {/* <!-- Email --> */}
          <div class="contactElement">
            <label for="email">EMAIL</label>
            <input type="email" id="email" class="contactInput" required />
          </div>

          {/* <!-- Feedback --> */}
          <div class="contactElement">
            <label for="feedback">QUERY</label>
            <textarea id="feedback" class="contactInput" required></textarea>
          </div>
          {/* <!-- Buttons --> */}
          <div class="contactButtons">
            {/* <!-- Submit --> */}
            <input type="submit" class="contactButton" id="button1" />

            {/* <!-- Reset --> */}
            <input type="reset" class="contactButton" id="button2" />
          </div>
        </form>

        <div class="footerRight">
          {/* <!-- Quick links --> */}
          <div class="quickLinks">
            <div class="footerSubTitle">Site Map</div>

            <div class="linksList">
              <a href="#top" class="footerLink">
                Home
              </a>
              <a href="#suggestionsSection" class="footerLink">
                Recommended
              </a>
              <a href="#reviewRead" class="footerLink">
                Reviews
              </a>
            </div>
          </div>

          {/* <!-- Social Media Handles --> */}
          <div class="socialMedia">
            <div class="footerSubTitle">Social Media</div>
            <div class="socialMediaLinks">
              <a
                href="https://www.instagram.com/m_v_sushanth/"
                class="socialMediaLink"
                target="_blank"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="" class="socialMediaLink">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
              <a href="" class="socialMediaLink">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="" class="socialMediaLink">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
