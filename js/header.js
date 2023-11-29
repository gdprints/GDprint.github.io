const createheader = () => {
	let header = document.querySelector('.hero-header');
	header.innerHTML = `
		<header class="hero-header">
      <div class="top">
        <div class="container">
          <div class="row">
            <div class="span6">
              <p class="topcontact"><i class="icon-phone"></i> &#40;&#43;374&#41;96 965&#45;874</p>
            </div>
            <div class="span6">
              
              <ul class="social-network">
                <p class="topcontact"><i class="bi bi-alarm-fill"></i> 09:00-19:00</p>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="container">


        <div class="row nomargin">
          <div class="span4">
            <div class="logo">
              <a href="index.html"><img src="img/logo.png" alt="" /></a>
            </div>
          </div>
          <div class="span8">
            <div class="navbar navbar-static-top">
              <div class="navigation">
                <nav>
                  <ul class="nav topnav">
                    <li class="dropdown">
                      <a href="index.html">Տուն</a>
                    </li>
                    <li class="dropdown">
                      <a href="about.html">Մեր մասին</a>
                    </li>
                    <li class="dropdown">
                      <a href="services.html">Ծառայություններ</a>
                   
                    </li>
                    <li class="dropdown">
                      <a href="portfolio-4cols.html">Պորտֆոլիո</a>
                  
                    </li>
                    <li class="dropdown ">
                      <a href="blog-left-sidebar.html">Բլոգ</a>
                    </li>
                    <li>
                      <a href="contact.html">Կապ</a>
                    </li>
                    <li class="dropdown active">
                      <a href="#">Այլ<i class="icon-angle-down"></i></a>
                      <ul class="dropdown-menu">
                        <li class="dropdown"><a href="team.html">Թիմ</a>
                        <li class="dropdown"><a href="regulations.html">Կանոնակարգ</a>
                        <li class="dropdown"><a href="faq.html">Հարց ու պատասխան</a>
                        <li class="dropdown"><a href="pricingbox.html">Գնային տուփ</a>
                     
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
        
            </div>
          </div>
        </div>
      </div>
    </header>
    `; 	
}
createheader();