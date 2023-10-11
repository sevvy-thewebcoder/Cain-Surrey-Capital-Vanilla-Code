import { headerNavLinks, heroSectionTitle, featureSection01, featureSection02, aboutUsSection } from '../assets/data.js';
const hamburgerMenuEl = document.getElementById( 'hamburger__menu' );
const topBarEl = document.getElementById( 'top__bar' );
const middleBarEl = document.getElementById( 'middle__bar' );
const bottomBarEl = document.getElementById( 'bottom__bar' );
const navListEl = document.getElementById( 'nav__list' );
const heroTitleEl = document.getElementById( 'hero__title' );
const featureListEl01 = document.getElementById( 'feature__list_01' );
const featureListEl02 = document.getElementById( 'feature__list_02' );
const aboutCardContentEl = document.getElementById( 'about__card' );

// 01.01 HEADER MENU

hamburgerMenuEl.addEventListener("click", toggleMenu)

let isMobileNavActive = false;

function toggleMenu () {

    isMobileNavActive = !isMobileNavActive;

    if ( isMobileNavActive ) {
        hamburgerMenuEl.classList.add( 'active__mobile_menu' );
    } else {
        hamburgerMenuEl.classList.remove( 'active__mobile_menu' );
    }
    console.log(isMobileNavActive)
    
}

// 01.02 HEADER NAV LINKS

const headerNavLinkElements = headerNavLinks.map( ( link ) => (
    `
        <li>
            <a href="${link.linkUrl }" class="${ link.className }">${ link.linkTitle }</a>    
        </li>
    `
    )
).join( '' );

navListEl.innerHTML = headerNavLinkElements;


// 02 MAIN CONTENT SECTION

// 02.01 HERO SECTION

const heroTitleElements = heroSectionTitle.map( ( item ) => (
    `
        <span class="${ item.class }">${ item.titlePart }</span>
    `
) ).join( '' );

heroTitleEl.innerHTML = heroTitleElements;


// 02.02 FEATURES SECTION 01


const featureListElements01 = featureSection01.map( ( item ) => (
    `
        <li class="list__item lists">
            <data class="index">${item.index}</data>
            <div class="feature__card_content">
                <h3 class="title__h3">${item.title}</h3>
                <p class="item__desc desc">${item.desc}</p>
            </div>
        </li>
    `
) ).join( '' );

featureListEl01.innerHTML = featureListElements01;

// 02.03 FEATURES SECTION 02

document.getElementById( 'section__title' ).textContent = featureSection02.sectionTitle;

const featureListElements02 = featureSection02.listItems.map( ( item ) => (
    `
        <li class="list__item lists feature__card">
            <data class="index__02 title__h4">${item.index}</data>
            <div class="feature__card_content">
                <h4 class="title__h4">${item.title}</h4>
                <p class="item__desc desc">${item.desc}</p>
            </div>
        </li>
    `
) ).join( '' );

featureListEl02.innerHTML += featureListElements02;


// 02.04 ABOUT US SECTION

const aboutUsCardContentElement = `
    <div class="title__wrapper">
        <span class="dash__affix_alt bgc__dark"></span>
        <h5 class="title__h5 txt__transform">${aboutUsSection.subtitle}</h5>
    </div>
    <h2 class="title__h2">${aboutUsSection.title}</h2>
    <p class="desc">${aboutUsSection.desc}</p>
`;

aboutCardContentEl.innerHTML = aboutUsCardContentElement;