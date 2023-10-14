
const header = document.getElementById( 'header' );
const heroSection = document.getElementById( 'hero__section' );
const heroWrapper = document.getElementById( 'hero__wrapper' );
const heroImageWrapper = document.getElementById( 'hero__image_wrapper' );

console.log( header );

function getDynamicHeaderHeight () {

    let headerHeight = header.offsetHeight;

    heroSection.style.marginTop = headerHeight + "px";

    console.log( "header height: " + headerHeight );
}

function getDynamicHeroSize () {
    let heroSectionSize = heroSection.offsetWidth;
    let heroWrapperSize = heroWrapper.clientWidth;

    let sizeDifference = (heroSectionSize - heroWrapperSize) / 2;

    let newSize = heroImageWrapper.style.width = `calc(100% - ${sizeDifference}px)`;

}

getDynamicHeaderHeight()
getDynamicHeroSize()

export { getDynamicHeaderHeight, getDynamicHeroSize };