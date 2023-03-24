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








// Task 5.6
// Set showingSubMenuto trueif the clicked <a>element's "link" object within menuLinkshas a subLinksproperty (all do, except for the "link" object for ABOUT), otherwise, set it to false.
// Hint: Saving the "link" object in a variable will come in handy for passing its subLinksarray in Task 5.7



// Task 5.7
// Next in the event listener...
// If showingSubMenuis true:
// Call a buildSubMenufunction passing to it the subLinksarray for the clicked <a>element.
// Set the CSS topproperty of subMenuElto 100%.
// Otherwise (showingSubMenuis false):
// Set the CSS topproperty of subMenuElto 0.



// Task 5.8
// Code the buildSubMenufunction so that it:
// Clears the contents of subMenuEl.
// Iterates over the subLinksarray passed as an argument; and for each "link" object:
// Create an <a>element.
// On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.
// Set the new element's content to the value of the textproperty of the "link" object.
// Append the new element to the subMenuElelement.



// Task 6.0
// Attach a delegated 'click' event listener to subMenuEl.
// The first line of code of the event listener function should call the event object's preventDefault()method.
// The second line of code function should immediately return if the element clicked was not an <a>element.
// console.logthe content of the <a>to verify the handler is working.



// Task 6.1
// Next, the event listener should:
// Set showingSubMenuto false.
// Set the CSS topproperty of subMenuElto 0.



// Task 6.2
// Remove the class name of activefrom each <a>element in topMenuLinks- whether the activeclass exists or not.



// Task 6.3
// Update the contents of mainElto the contents of the <a>element, within an <h1>, clicked within subMenuEl.



// Task 6.4
// If the ABOUT link is clicked, an <h1>about</h1>should be displayed.
// Congrats!