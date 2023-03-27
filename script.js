mailEl = document.getElementById('maintag')
console.log(`Inside script ${mailEl}`)
mailEl.style.setProperty("background-color", 'var(--main-bg)');

mailEl.innerHTML = '<h1>SEI Rocks!</h1>'
mailEl.className = 'flex-ctr'

topMenuEl = document.getElementById('top-menu')
console.log(`Top menu  ${topMenuEl}`)
topMenuEl.style.setProperty("background-color", 'var(--top-menu-bg)')
topMenuEl.style.setProperty('height ', '100%')
topMenuEl.className = 'flex-around'

var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
]
menuLinks.forEach(item => {
  console.log(item)
  let anchor = document.createElement('a');
  anchor.innerText = item.text
  anchor.setAttribute('href', item.href)
  topMenuEl.appendChild(anchor);
})



subMenuEl = document.getElementById('sub-menu') //Select and cache the <nav id="sub-menu">element in a variable named subMenuEl.

subMenuEl.style.setProperty('height ', '100%') //Set the height subMenuElelement to be 100%.

subMenuEl.style.setProperty("background-color", 'var(--sub-menu-bg)') //Set the background color of subMenuElto the value stored in the --sub-menu-bgCSS custom property.

subMenuEl.className = 'flex-around' //Add the class of flex-aroundto the subMenuElelement.

document.getElementById('sub-menu').style.position = 'absolute' //Set the CSS position property of subMenuEl to the value of absolute.

document.getElementById('sub-menu').style.top = "0" //Set the CSS top property of subMenuElto the value of 0.

topMenuLinks = document.getElementById('top-menu')  //Select and cache the all of the <a>elements inside of topMenuElin a variable named topMenuLinks.
console.log(`child ${topMenuLinks.children.length}`)
let showingSubMenu = "false" //Declare a global showingSubMenu variable and initialize it to false;

topMenuLinks.addEventListener('click', (event) => {
  event.preventDefault()

  // The second line of code function should immediately return if the element clicked was not an <a> element.
  // console.log the content of the <a>to verify the handler is working.
  let element = event.target
  if (element.tagName != 'A') {
    console.log('Im not anchor tag')
    return
  }

  // Task 5.3
  // Next in the event listener, if the clicked <a>link has a class of active:
  // Remove the activeclass from the clicked <a>element.
  // Set the showing SubMenu

  // Set the CSS topproperty of subMenuElto 0.
  // returnto exit the handler.
 
  if (element.classList.contains('active')) {
    console.log('Remove active class')
    element.classList.remove('active')
    showingSubMenu = false
    subMenuEl.style.top = "0"
    return
  }

  console.log(`Remove topMenuLinks active class ${topMenuLinks.children.length}`)
  menuChild = topMenuLinks.children
  for(i = 0; i < menuChild.length; i++){
    console.log('Remove topMenuLinks active class')
    menuChild[i].classList.remove('active')
  }

  // Task 5.5
// Next, the event listener should add a class name of active to the <a> element that was clicked.
  element.classList.add('active')


}

)








