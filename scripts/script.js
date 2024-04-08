
document.addEventListener("DOMContentLoaded", function () {

    /* ====================== Animation lors du chargement de la page début ====================== */
    
    // Sélectionne l'élément de chargement
    let loader = document.querySelector('.loader');
    let loading = document.querySelector('.loading');

    // Affiche l'élément de chargement pendant 5 secondes
    loader.style.opacity = '1';
    loading.style.opacity = '1';

    // Cache l'élément de chargement après 5 secondes 
    setTimeout(function () {
        loader.style.opacity = '0';
        loading.style.opacity = '0';

        // Montre les sections après 5 secondes
        document.querySelectorAll('.hide-on-load').forEach(function (section) {
            section.classList.remove('hide-on-load');
        });

    }, 2000); // 5000 millisecondes = 5 secondes

    /* ====================== Animation lors du chargement de la page fin ====================== */

    /* =================== Cibler l'élément de la navbar cliqué début =================== */
    
    // Sélectionnez tous les liens dans la barre de navigation
    const navLinks = document.querySelectorAll(".header ul li a");
    // Ajoutez un gestionnaire d'événements de clic à chaque lien
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {

            // Retirez la classe "active" de tous les liens
            navLinks.forEach(link => link.parentElement.classList.remove("active"));

            // Ajoutez la classe "active" au lien cliqué
            this.parentElement.classList.add("active");


        });
    });

    /* =================== Cibler l'élément de la navbar cliqué fin =================== */


    // Gestionnaire de clic pour l'icône de menu

    document.querySelector('.fa-bars').addEventListener('click', function () {
        this.classList.toggle('fa-times');
        //document.querySelector('.navbar').classList.toggle('nav-toggle');
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('nav-toggle');

        
    });

    // Gestionnaire d'événement pour le chargement de la page et le défilement
    window.addEventListener('load', handleScroll);
    window.addEventListener('scroll', handleScroll);


    function handleScroll() {
        // Réinitialiser les classes lorsque la page est chargée ou que le défilement se produit
        document.querySelector('.fa-bars').classList.remove('fa-times');
        document.querySelector('.navbar').classList.remove('nav-toggle');

        // Récupérer la valeur de la variable --bg-hero
        const bgHeroColor = getComputedStyle(document.documentElement).getPropertyValue('--bg-hero');

        // Récupérer la valeur de la variable --color
        const bgHeaderColor = getComputedStyle(document.documentElement).getPropertyValue('--color');
        
        
        // Modifier le style de l'en-tête en fonction de la position de défilement
        let header = document.querySelector('.header');
        if (window.scrollY > 30) {
            header.style.background = bgHeaderColor;
            header.style.boxShadow = '0 .3rem .5rem rgba(0, 0, 0, .3)';
        } else {
            // Appliquer la couleur au style du header
            header.style.background = bgHeroColor;
            header.style.boxShadow = 'none';
        }
    }

    // Rendre les parties cachées du service visivle
    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
        
            const textContainer = button.parentElement.querySelector(".text");
            textContainer.classList.toggle("show-more");
            

            if (textContainer.classList.contains("show-more")) {
                button.textContent = "Read Less";
                
            } else {
                button.textContent = "Read More";
            }
        });
    });

    // Rendre la partie cachée de la présentation visible 
    const readMoreBtn = document.querySelector(".more");
    const text = document.querySelector(".right-text");

    readMoreBtn.addEventListener("click", (e) => {
    e.preventDefault();
    text.classList.toggle("know-more");

    if (text.classList.contains("know-more")) {
        readMoreBtn.innerText = "Learn Less";
    } else {
        readMoreBtn.innerText = "Learn More";
    }
    });

    // Rendre les parties cachées du projet visivle
    document.querySelectorAll(".know_more").forEach(projet => {
        projet.addEventListener("click", (e) => {
            e.preventDefault();
    
            const textMore = projet.closest(".item").querySelector(".project-desc");
            if (textMore) {
                textMore.classList.toggle("knowMore");
    
                if (textMore.classList.contains("knowMore")) {
                    projet.textContent = "Know Less";
                } else {
                    projet.textContent = "Know More";
                }
            }
        });
    });

    
});

/*  =========================================  js faq starts  =========================================  */

/*  =========================================  js faq ends  =========================================  */

/* ========================================= js scroll to top button starts ========================================= */
let calcScrollValue = () =>{
    let scrollProgress = document.getElementById("progress");
    let progessValue = document.getElementById("progress_value");

    let pos = document.documentElement.scrollTop;
    //console.log(pos);

    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    //console.log(calcHeight);

    let scrollVallue = Math.round((pos * 100) / calcHeight);
    //console.log(scrollVallue);
    if(pos > 100){
        scrollProgress.style.display = "grid";
    }else{
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click", ()=>{
        document.documentElement.scrollTop = 0;
    });
    
    // Récupérer la valeur de la variable --primary-color
    const complementaryColor = getComputedStyle(document.documentElement).getPropertyValue('--complementary-color');

    // Utiliser la variable dans votre style
    scrollProgress.style.background = `conic-gradient(${complementaryColor}, ${scrollVallue}%, #fff ${scrollVallue}%)`;

    //scrollProgress.style.background = `conic-gradient(#DD5D1F, ${scrollVallue}%, #fff ${scrollVallue}%)`;
}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

/* ========================================= js scroll to top button ends ========================================= */

/* =============================================  Js contact section starts ============================================= */
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
    this.style.borderColor = "#DD5D1F"; // Change la couleur de la bordure en focus
    parent.querySelector('label').style.color = "#DD5D1F"
    parent.style.backgroundColor = "#fff"; 
    parent.style.borderRadius = "0.50rem";
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
        this.style.borderColor = "#777777"; // Restaure la couleur de la bordure lorsque le champ est vide
        parent.querySelector('label').style.color = "#333333"; // Change la couleur du label en focu
        parent.style.backgroundColor = "transparent"; // Restaure la couleur d'arrière-plan lorsque le champ est vide
        parent.style.borderRadius = "0.50rem"
        
    }else{
        this.style.borderColor = "#777777";
        parent.querySelector('label').style.color = "#777777"; // Change la couleur du label lorsque le champ est rempli
        parent.style.backgroundColor = "transparent"; // Restaure la couleur d'arrière-plan lorsque le champ est vide
        parent.style.borderRadius = "0.50rem";
        
    }

    
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

/* =============================================  Js contact section ends ============================================= */

/* =============================================  js zoom box starts =============================================  */
let zoom_box = document.querySelector(".zoom-box");
document.querySelector("#zoom-btn").onclick = () => {
    zoom_box.classList.toggle("active");
}
// Faire disparaître la barre de zoom quand on scroll
document.addEventListener('scroll', function(){
    const zoom_box = document.querySelector(".zoom-box");

    // Vérifier si la classe "active" est présente dans la zoom-box
    if(zoom_box.classList.contains('active')){
        zoom_box.classList.remove('active');
    }

});


// Déclarez la variable newZoom au niveau supérieur de votre script
let newZoom;

// Sélectionnez les éléments zoomables
const zoomableElements = document.querySelectorAll('.zoomable');

// Sélectionnez les boutons de zoom et de réinitialisation
const zoomInButton = document.getElementById('zoom-in');
const zoomOutButton = document.getElementById('zoom-out');
const resetZoomButton = document.getElementById('reset-zoom');

// Sélectionnez l'élément qui affiche le pourcentage de zoom
const zoomPercentageElement = document.getElementById('zoom-percentage');

// Fonction pour augmenter ou diminuer le zoom
function zoom(value) {
    // Obtenez le zoom actuel (par exemple, à partir de la première section zoomable)
    const currentZoom = parseFloat(zoomableElements[0].style.zoom) || 1;

    // Calculez le nouveau niveau de zoom
    newZoom = currentZoom + value;

    // Limitez le zoom entre 0.5 et 3, par exemple
    const clampedZoom = Math.max(0.5, Math.min(3, newZoom));

    return clampedZoom;
}

// Fonction pour réinitialiser le zoom
function resetZoom() {
    // Réinitialisez le zoom à la valeur par défaut (1)
    newZoom = 1;
    return newZoom;
}

// Fonction pour ajuster le zoom des éléments zoomables
function zoomElements(value) {
    zoomableElements.forEach(element => {
        element.style.zoom = value;
    });

    // Mettez à jour le pourcentage de zoom affiché
    updateZoomPercentage(value * 100);

    // Désactivez overflow-x: hidden si le zoom est supérieur à 100%
    if (value > 1) {
        document.body.style.overflowX = 'auto';
    } else {
        document.body.style.overflowX = 'hidden';
    }
}

// Mettez à jour le pourcentage de zoom affiché
function updateZoomPercentage(percentage) {
    zoomPercentageElement.textContent = `${Math.round(percentage)}%`;
}

// Ajoutez les écouteurs d'événements après avoir défini les fonctions

// Fonction pour augmenter le zoom
zoomInButton.addEventListener('click', function() {
    const newZoomValue = zoom(0.1);
    zoomElements(newZoomValue);
});

// Fonction pour diminuer le zoom
zoomOutButton.addEventListener('click', function() {
    const newZoomValue = zoom(-0.1);
    zoomElements(newZoomValue);
});

// Fonction pour réinitialiser le zoom
resetZoomButton.addEventListener('click', function() {
    const newZoomValue = resetZoom();
    zoomElements(newZoomValue);
});


/* =============================================  js zoom box ends =============================================  */
let custhomizeTheme = document.querySelector(".customize-them");
let arrowLeft = document.querySelector(".fa-arrow-left");
const fontSize = document.querySelectorAll(".choose-size span");
const colorPalette = document.querySelectorAll(".choose-color span");
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");
const root = document.querySelector(":root");

/* -------------- FONTS -------------- */
// Remove active class from span or font size selectors
const removeSizeSelector = () => {
    fontSize.forEach(size =>{
        size.classList.remove('active');
    })
}
fontSize.forEach(size => {
    size.addEventListener('click', () => {
        
        removeSizeSelector();
        let fontSize;
        size.classList.toggle(".active");
        if(size.classList.contains('font-size-1')){
            fontSize = '9px';
        }else if(size.classList.contains('font-size-2')){
            fontSize = '11px';
        }else if(size.classList.contains('font-size-3')){
            fontSize = '13px';
        }else if(size.classList.contains('font-size-4')){
            fontSize = '15px';
        }
        // Change font size of the root html element
        document.querySelector('html').style.fontSize = fontSize;
    })
    
});

/* ------- Prymary color ------- */
// Remove active class form colors
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker =>{
        colorPicker.classList.remove('active');
    })
}


colorPalette.forEach(color => {
    color.addEventListener('click', () =>{
        let primaryHue;
        changeActiveColorClass();

        if(color.classList.contains('color-1')){
            primaryHue = "#26474E";
        }else if(color.classList.contains('color-2')){
            primaryHue = "#082BCB";
        }else if(color.classList.contains('color-3')){
            primaryHue = "#C3A83C";
        }else if(color.classList.contains('color-4')){
            primaryHue = "#CA2ED1";
        }

        color.classList.add("active");

        // Ajouter une condition spécifique à --color-1 
        if (primaryHue === "#26474E") {
            // Ajoutez des actions spécifiques si la couleur est #5F1FDD
            root.style.setProperty('--color', primaryHue);
            root.style.setProperty('--colo-text', "#226D68");
            root.style.setProperty('--nav-ul-li-a', "#ECF8F6");
            root.style.setProperty('--complementary-color', "#D6955B");
            root.style.setProperty('--news-h1', "#226D68");
            root.style.setProperty('--bg-news', '#eaeaea');
            root.style.setProperty('--bg-resultSearch', '#315862');
            root.style.setProperty('--bg-hero', 'linear-gradient(to right, #26474E, #1F3940, #26474E)');
            root.style.setProperty('--desc-news', '#26474E');
            root.style.setProperty('--bg-color2', '#26474E');
            root.style.setProperty('--bg-color3', '#26474E');
            root.style.setProperty('--bg-color4', '#26474E');
            
        }

        // Ajouter une condition spécifique à --color-2 
        if (primaryHue === "#082BCB") {
            // Ajoutez des actions spécifiques si la couleur est #5F1FDD
            root.style.setProperty('--color', primaryHue);
            root.style.setProperty('--colo-text', "#333031");
            root.style.setProperty('--nav-ul-li-a', "#FFFAF0");
            root.style.setProperty('--complementary-color', "#FEC606");
            root.style.setProperty('--news-h1', "#2599FB");
            root.style.setProperty('--bg-news', '');
            root.style.setProperty('--bg-resultSearch', '#1D3DD9');
            root.style.setProperty('--bg-hero', 'linear-gradient(to right, #082BCB, #7AE582, #082BCB)');
            root.style.setProperty('--desc-news', '#082BCB');
            root.style.setProperty('--bg-color1', '#082BCB');
            root.style.setProperty('--bg-color3', '#082BCB');
            root.style.setProperty('--bg-color4', '#082BCB');
    
        }

        // Ajouter une condition spécifique à --color-3
        if (primaryHue === "#C3A83C") {
            // Ajoutez des actions spécifiques si la couleur est #5F1FDD
            root.style.setProperty('--color', primaryHue);
            root.style.setProperty('--colo-text', "#222");
            root.style.setProperty('--nav-ul-li-a', "#FAF0E6");
            root.style.setProperty('--complementary-color', "#3CC364");
            root.style.setProperty('--news-h1', "#C3A83C");
            root.style.setProperty('--bg-news', '');
            root.style.setProperty('--bg-resultSearch', '#E1B522');
            root.style.setProperty('--bg-hero', 'linear-gradient(to right, #C3A83C, #3CC364, #C3A83C)');
            root.style.setProperty('--desc-news', '#C3A83C');
            root.style.setProperty('--bg-color1', '#C3A83C');
            root.style.setProperty('--bg-color2', '#C3A83C');
            root.style.setProperty('--bg-color4', '#CA2ED1');
        }

        // Ajouter une condition spécifique à --color-4
        if (primaryHue === "#CA2ED1") {
            // Ajoutez des actions spécifiques si la couleur est #5F1FDD
            root.style.setProperty('--color', primaryHue);
            root.style.setProperty('--colo-text', "#0000000");
            root.style.setProperty('--nav-ul-li-a', "#FAEBD7");
            root.style.setProperty('--complementary-color', "#7C225B");
            root.style.setProperty('--news-h1', "#CA2ED1");
            root.style.setProperty('--bg-news', '');
            root.style.setProperty('--bg-resultSearch', '#D94FD9');
            root.style.setProperty('--bg-hero', 'linear-gradient(to right, #CA2ED1, #C813B8, #CA2ED1)');
            root.style.setProperty('--desc-news', '#CA2ED1');
            root.style.setProperty('--bg-color1', '#CA2ED1');
            root.style.setProperty('--bg-color2', '#CA2ED1');
            root.style.setProperty('--bg-color3', '#CA2ED1');
        }

        
    })
});


const body = document.body;
/*-------- Theme Background ---------- */
let lightColorLghtness;

// Change background color
const changeBg = () => {
    body.style.backgroundColor = lightColorLghtness;
}
bg1.addEventListener('click', () => {
    lightColorLghtness = '#27C7D4';
    // add active class
    bg1.classList.add('active');
    // Remove active class from the others
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    // Remove customized changes from local storeage
    //window.location.reload();

    changeBg();
})
bg2.addEventListener('click', () => {
    lightColorLghtness = '#bfbfbf';

    // Add active class
    bg2.classList.add('active');

    // Remove active class from the others 
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBg();
})


bg3.addEventListener('click', () => {
   
    lightColorLghtness = '#ADD8E6';

    // Add active class
    bg3.classList.add('active');

    // Remove active class from the others 
    bg2.classList.remove('active');
    bg1.classList.remove('active');
    changeBg();
});

// Réinitialiser la couleur, le background et le font-size par défaut

const resetButton = document.getElementById('reset-button');

// Ajouter un gestionnaire d'événements pour le bouton de réinitialisation
resetButton.addEventListener('click', () => {
    // Réinitialiser la couleur principale à sa valeur par défaut
    root.style.setProperty('--color', '#1f9ddd');
    root.style.setProperty('--complementary-color', '#DD5D1F');
    root.style.setProperty('--nav-ul-li-a', '#F0F8FF');
    root.style.setProperty('--colo-text', '#222222');
    root.style.setProperty('--news-h1', '#0E0E0E');
    root.style.setProperty('--body', '#ffffff');
    root.style.setProperty('--bg-news', '#F9F8F7');
    root.style.setProperty('--bg-resultSearch', '#1f9fdd');
    root.style.setProperty('--bg-hero', 'linear-gradient(to right, #1f9ddd, #aad4eb, #1f9ddd)');
    root.style.setProperty('--desc-news', '#495A63');
    root.style.setProperty('--bg-color1', '#26474E');
    root.style.setProperty('--bg-color2', '#082BCB');
    root.style.setProperty('--bg-color3', ' #C3A83C');
    root.style.setProperty('--bg-color4', '#225B7C');

    // Réinitialiser la taille de la police à sa valeur par défaut
    document.querySelector('html').style.fontSize = '10px';

    // Réinitialiser la couleur du fond à sa valeur par défaut
    body.style.backgroundColor = '#ffffff';

    // Réinitialiser les classes actives pour les sélecteurs de taille de police et de couleur
    removeSizeSelector();
    changeActiveColorClass();

    // Réinitialiser la classe active pour le sélecteur de fond
    bg1.classList.add('active');
    bg2.classList.remove('active');
    bg3.classList.remove('active');
});



document.querySelector(".fa-gear").onclick = () =>{
    custhomizeTheme.classList.toggle("active");
}

arrowLeft.addEventListener("click", () => {
    custhomizeTheme.classList.remove("active");
});



/* =============================================  js search box starts =============================================  */
let search_box = document.querySelector(".search-box");
document.querySelector("#seach-btn").onclick = () => {
    search_box.classList.toggle("active");
}
    
// Faire disparaître la barre de recherche quand scroll
document.addEventListener('scroll', function () {
    const searchBox = document.querySelector('.search-box');
    // Vérifie si la classe "active" est présente dans la search-box
    if (searchBox.classList.contains('active')) {
        // Désactive la classe "active" pour fermer la search-box
        searchBox.classList.remove('active');
    }
    
});


let availableKeywords = [
    'Website development',
    'Mobile Friendy',
    'Responsive design',
    'Web Hosting Service',
    'SEO-Friendly Design',
    'Newsletter',
    'Project',
    'Home',
    'About me',
    'Frequently Asked Questions',
];

// Associer chaque mot clé à la partie correspondante
let keywordMapping = {
    'Website development':'website-development',
    'Mobile Friendy': 'mobile-friendly',
    'Responsive design': 'responsive-design',
    'web Hosting Service': 'web-hosting-service',
    'SEO-Friendly Design': 'seo-friendly-design',
    'Project' : 'projet',
    'Newsletter': 'newsletter',
    'Home' : 'accueil',
    'About me' : 'about-me',
    'Frequently Asked Questions' : 'fa-question',
}

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword) =>{
            return keyword.toLocaleLowerCase().includes(input.toLocaleLowerCase());
        });
        //console.log(result);
    }
    display(result);

    if(!result.length){
        resultBox.innerHTML = '';
    }

}

// Fonction pour mettre en surbrillance la lettre correspondante dans les résultats
function highlightLetter(result, input) {
    return result.replace(new RegExp(`(${input})`, 'gi'), '<span class="highlight">$1</span>');
}

// Mettez à jour la fonction display
function display(result){
    const content = result.map((list) =>{
        const highlighted = highlightLetter(list, inputBox.value);
        return `<li onclick="selectInput(this)">${highlighted}</li>`;
    });

    resultBox.innerHTML = `<ul>${content.join('')}</ul>`;

}

// Fonction appelée lorsqu'un élément est sélectionné dans la barre de recherche
function selectInput(element) {
    // Récupère le texte de l'élément sélectionné
    const selectedKeyword = element.innerText;

    // Vérifie si le mot-clé sélectionné est dans la table de mappage
    if (keywordMapping[selectedKeyword]) {
        // Récupère l'ID correspondant à partir de la table de mappage
        const sectionId = keywordMapping[selectedKeyword];

        // Vider la barre de recherche
        inputBox.value = '';
        
        // Vider le résultat de recherche
        resultBox.innerHTML = '';

        // Récupère l'élément de la section correspondante
        const section = document.getElementById(sectionId);

        // Vérifie si la section existe
        if (section) {
            // Fait défiler la vue vers la section
            section.scrollIntoView({ behavior: 'smooth' });

            // Ferme la barre de recherche
            search_box.classList.remove('active');
        }
    }

}

/* =============================================  js search box ends =============================================  */
    
    
/* =============================================  js faq box starts =============================================  */
document.addEventListener("DOMContentLoaded", () => {
    // Récupérer le premier accordion-header et son accordion-body
    const firstAccordionHeader = document.querySelector(".accordion-header");
    const firstAccordionBody = firstAccordionHeader.nextElementSibling;

    // Vérifier si le premier accordion-body est actif
    if (firstAccordionBody.classList.contains("active")) {
        // Ajouter la classe "active" au premier accordion-header
        firstAccordionHeader.classList.add("active-header");
    }


    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        // Récupérer l'élément accordion-body actif
        const activeAccordionBody = document.querySelector(".accordion_body.active");

        // Retirer la classe "active" de l'ancien accordion-body et du span correspondant
        if (activeAccordionBody) {
            activeAccordionBody.classList.remove("active");
            activeAccordionBody.previousElementSibling.querySelector("span").textContent = '+';
            activeAccordionBody.previousElementSibling.classList.remove("active-header");
        }

        // Récupérer l'élément accordion-body lié à l'accordion-header actuel
        const accordionBody = header.nextElementSibling;

        // Ajouter la classe "active" à l'accordion-body actuel et changer le span en "-"
        accordionBody.classList.toggle("active");
        header.querySelector("span").textContent = accordionBody.classList.contains("active") ? '-' : '+';

        // Ajouter la classe "active-header" à l'accordion-header
        header.classList.toggle("active-header");
    });
});

});

