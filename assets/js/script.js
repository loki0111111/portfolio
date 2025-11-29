const openNav = document.getElementById('open-nav')
const closeNav = document.getElementById('close-nav')
const navLinks = document.getElementById('nav-links')
const allNav = document.getElementById('all-nav')


openNav.addEventListener('click', () => {
    navLinks.style.display = 'flex'
    openNav.style.display = 'none'
    closeNav.style.display = 'block'
    allNav.style.backgroundColor = '#030014'
})


closeNav.addEventListener('click', () => {
    navLinks.style.display = 'none'
    openNav.style.display = 'block'
    closeNav.style.display  = 'none'
    allNav.style.backgroundColor = '#05000744'
})





if (window.innerWidth <= 860) {
    function closeNavBar() {
    onclick = navLinks.style.display = 'none'
    openNav.style.display = 'block'
    closeNav.style.display = 'none'
}}



const projectIcon = document.getElementById('project-icon')
const projectContent = document.getElementById('project-content')
const projectBox = document.getElementById('project-box')



const certificateBox = document.getElementById('certificateBox')
const certificateIcon = document.getElementById('certificate-icon')
const certificateContent = document.getElementById('certificate-content')



const techBox = document.getElementById('tech-box')
const techIcon = document.getElementById('tech-icon')
const techContent = document.getElementById('tech-content')


const projectContainer = document.getElementById('project-container')
const certificateContainer = document.getElementById('certificate-container')
const techContainer = document.getElementById('tech-stack-container')

    projectBox.addEventListener('click', () => {
        projectIcon.style.color = ' #6D64F1'
        projectContent.style.color = '#F7F7F7'
        projectBox.style.backgroundColor = '#211c41a6'
        certificateBox.style.backgroundColor = 'unset'
        techBox.style.backgroundColor = 'unset'


        projectContainer.style.display = 'flex'
        certificateContainer.style.display = 'none'
        techContainer.style.display = 'none'

        certificateIcon.style.color = '#8A919D'
        certificateContent.style.color = '#8A919D'
        techIcon.style.color = '#8A919D'
        techContent.style.color = '#8A919D'
    })



    certificateBox.addEventListener('click', () => {
        certificateIcon.style.color = '#6D64F1'
        certificateContent.style.color = '#F7F7F7'
        certificateBox.style.backgroundColor = '#211c41a6'
        projectBox.style.backgroundColor = 'unset'
        techBox.style.backgroundColor = 'unset'


        projectContainer.style.display = 'none'
        certificateContainer.style.display = 'flex'
        techContainer.style.display = 'none'

        projectIcon.style.color = '#8A919D'
        projectContent.style.color = '#8A919D'
        techIcon.style.color = '#8A919D'
        techContent.style.color = '#8A919D'
    })


    techBox.addEventListener('click', () => {
        techIcon.style.color = '#6D64F1'
        techContent.style.color = '#F7F7F7'
        techBox.style.backgroundColor = '#211c41a6'
        certificateBox.style.backgroundColor = 'unset'
        projectBox.style.backgroundColor = 'unset'

        projectContainer.style.display = 'none'
        certificateContainer.style.display = 'none'
        techContainer.style.display = 'flex'

        certificateIcon.style.color = '#8A919D'
        certificateContent.style.color ='#8A919D'
        projectIcon.style.color = '#8A919D'
        projectContent.style.color = '#8A919D'
    })



const seeMore = document.getElementById('see-more')
const seeLess = document.getElementById('see-less')
const projectFourth = document.getElementById('project-fourth')
const projectFifth = document.getElementById('project-fifth')

seeMore.addEventListener('click', () => {
    projectFourth.style.display = 'flex'
    projectFifth.style.display = 'flex'
    seeMore.style.display = 'none'
    seeLess.style.display = 'flex'
})


seeLess.addEventListener('click', () => {
    projectFourth.style.display = 'none'
    projectFifth.style.display = 'none'
    seeMore.style.display = 'flex'
    seeLess.style.display = 'none'
})




const footerYear = document.getElementById('footer-year')
footerYear.innerHTML = new Date().getFullYear()