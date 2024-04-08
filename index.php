<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My pofolio</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,100..900;1,100..900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

    <!-- Link to css file -->
    <link rel="stylesheet" href="css/styles.css">

    <!-- Link to font awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">

</head>
<body>
    <!-- ======================== setting section starts ========================  -->
    <div class="customize-them">

        <div class="arow">
            <i class="fas fa-arrow-left"></i>
        </div>

        <div class="card">
            <h2>Customize you view</h2>
            <p>Manage your font size, color, and background</p>
            <!-- font size -->
            <div class="font-size">
                <h3>Font Size</h3>
                
                <div>
                    <h6>Aa</h6>
                    <div class="choose-size">
                        <span class="font-size-1"></span>
                        <span class="font-size-2"></span>
                        <span class="font-size-3 active"></span>
                        <span class="font-size-4"></span>
                    </div>
                    <h3>Aa</h3>
                </div>
            </div>
            <!-- Color -->
            <h3>Color</h3>
            <div class="choose-color">
                <span class="color-1"></span>
                <span class="color-2"></span>
                <span class="color-3 active"></span>
                <span class="color-4"></span>
                <!--<span class="color-5"></span>
                <span class="color-6"></span>-->
            </div>
            <!-- Bacground -->
            <div class="background">
                <h3>background</h3>
                <div class="choose-bg">
                    <div class="bg-1 active">
                        <span></span>
                        <h5 for="bg-1">Cyan</h5>
                    </div>
                    <div class="bg-2">
                        <span></span>
                        <h5 for="bg-2">Gray</h5>
                    </div>
                    <div class="bg-3">
                        <span></span>
                        <h5 for="bg-3">Light Blue</h5>
                    </div>
                </div>
            </div>
            <button id="reset-button">Reset</button>
        </div>
    </div>
    <!-- ======================== setting section ends ========================  -->

    <!-- ======================== load page section starts ========================  -->

    <div class="loader">
        <img src="image/loader.png" alt="loader">
    </div>
    <h4 class="loading">Loading ...</h4>
    <!-- ======================== load page section ends ========================  -->

    <!-- ======================== scroll to top section starts ========================  -->
    <div id="progress" class="hide-on-load">
        <span id="progress_value"><i class='fas fa-arrow-up'></i></span>
    
    </div>
    <!-- ======================== scroll to top section ends ========================  -->

    <!-- ======================== header section starts ========================  -->
    <header class="header" id="cache">

        <a href="#" class="logo"><img src="image/logo17.png" id="settint-btn"></a>

        <!-- ======================== setting section starts ========================  -->
        <div class="setting">
            <i class="fa fa-gear"></i>
            <div class="tooltip">Setting</div>
        </div>
        <!-- ======================== setting section ends ========================  -->

        <!-- ======================== zoom section starts ========================  -->
        <div class="zoom-icon">
            <img src="image/zoom.png" alt="Image pour zoumer" id="zoom-btn">
            <div class="tooltip">Zoom</div>
        </div>

        <div class="zoom-box">
            <div class="zoom-item">
                <p>Zoom : </p>
                <span id="zoom-in"><i class="fas fa-search-plus"></i> </span>
                <span id="zoom-out"><i class="fas fa-search-minus"></i> </span>
                <img src="image/reset.png" alt="Reset zoom" id="reset-zoom">
                <span id="zoom-percentage">100%</span>
            </div>
        </div>
        <!-- ======================== zoom section ends ========================  -->

        <div class="icons">
            <div id="seach-btn" class="fas fa-search"></div>
            <div class="tooltip">Search</div>
        </div>

        <!-- ======================== search bar section starts ========================  -->
        <div class="search-box">

            <div class="row">
                <input type="text" id="input-box" placeholder="search anything here ..." autocomplete="off">
                <i class='fas fa-search'></i>
            </div>

            <div class="result-box">
                <!--<ul>
                    <li>Javascript</li>
                    <li>Web Develoment</li>
                </ul>-->
            </div>
        </div>

        <div class="fas fa-bars"></div>

        <nav class="navbar">
            <ul>
                <!-- TODO Link the nav item -->
                <li><a data-text="Home" href="./main.php#hero" class="home">Home</a></li>
                <li><a data-text="Service" href="./main.php#services">Service</a></li>
                <li><a data-text="About" href="./main.php#about">About</a></li>
                <li><a data-text="Projects" href="./main.php#projects">Projects</a></li>
                <li><a data-text="Faq" href="./main.php#faq">FAQ</a></li>
                <!-- TODO Link the contact page-->
                <li><a data-text="Contact" href="contact.php">Contact</a></li>
            </ul>
        </nav>
        <!-- ======================== search bar section ends ========================  -->
        
    </header>
    <!-- ======================== header section ends ========================  -->

    <!--  ======================== Hero Section starts  ======================== -->
    <section id="hero" class="hide-on-load">

        <div class="hero hero-content" id="accueil">

            <div class="left">

                <div class="heading">
                    <h1>Hello, <span></span></h1>
                    <h1>My name is <span></span></h1>
                    <h1>Belvinard<span></span></h1>
                </div>

                <p class="desc"> I'm Full-stack developper</p>

                <div class="seeWork">
                    <a href="#projects" class="myWork">See my Works</a>
                    <a href="#projects" class="down"><div class="scroll-down"></div></a>
                </div>

            </div>

            <div class="right zoomable"><img src="image/presentation.png" alt="" class="image"></div>

        </div>

        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
        <div class="wave wave3"></div>
        <div class="fas fa-cog nut1"></div>
        <div class="fas fa-cog nut2"></div>

    </section>
    <!--  ======================== Hero Section ends  ======================== -->

    <!-- Link to js file -->
    <script src="scripts/script.js"></script>
</body>
</html>