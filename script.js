mailEl = document.getElementById('maintag')
console.log(`Inside script ${mailEl}`)
mailEl.style.setProperty("background-color",'var(--main-bg)');

mailEl.innerHTML = '<h1>SEI Rocks!</h1>'
mailEl.className ='flex-ctr'

topMenuEl = document.getElementById('top-menu')
console.log(`Top menu  ${topMenuEl}`)
topMenuEl.style.setProperty("background-color",'var(--top-menu-bg)')
topMenuEl.style.setProperty('height ','100%')
topMenuEl.className='flex-around'

var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

  menuLinks.forEach( item => {
    console.log(item)
    let anchor = document.createElement('a');
    anchor.innerText= item.text
    anchor.setAttribute('href',item.href)
    topMenuEl.appendChild(anchor);
  })
