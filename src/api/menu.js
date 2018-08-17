
const data = [
  {id: 1, caption: 'Home page', link: '/', icon: 'home'},
  {id: 2, caption: 'About Us', link: '/about', icon: 'assistant_photo'},
  {id: 3, caption: 'Contac Us', link: '/contact', icon: 'contacts'}
]

export default {
  getMenuPermission: () => {
    return new Promise((resolve) => { resolve(data) })
  }
}
