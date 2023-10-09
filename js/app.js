import { headerNavLinks, heroSectionTitle, featureSection01, featureSection02 } from '../assets/data.js';
const navListEl = document.getElementById( 'nav__list' );
const heroTitleEl = document.getElementById( 'hero__title' );
const featureListEl01 = document.getElementById( 'feature__list_01' );
const featureListEl02 = document.getElementById( 'feature__list_02' );

// HEADER NAV LINKS

const headerNavLinkElements = headerNavLinks.map( ( link ) => (
    `
        <li>
            <a href="${link.linkUrl }" class="${ link.className }">${ link.linkTitle }</a>    
        </li>
    `
    )
).join( '' );

navListEl.innerHTML = headerNavLinkElements;


// HERO SECTION

const heroTitleElements = heroSectionTitle.map( ( item ) => (
    `
        <span class="${ item.class }">${ item.titlePart }</span>
    `
) ).join( '' );

heroTitleEl.innerHTML = heroTitleElements;


// FEATURES SECTION 01


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

// FEATURES SECTION 02

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