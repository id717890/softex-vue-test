
const data = [
  {id: 123, caption: 'Picture #1', link: 'https://i.ytimg.com/vi/T1mjfDIPz8I/maxresdefault.jpg'},
  {id: 124, caption: 'Picture #2', link: 'http://gov.cap.ru/Content/news/201804/09/Original/luxfon.com_38833.jpg'},
  {id: 125, caption: 'Picture #3', link: 'http://www.fainaidea.com/wp-content/uploads/2017/11/maxresdefault-3.jpg'},
  {id: 126, caption: 'Picture #4', link: 'https://i.ytimg.com/vi/_sz-f_eROu4/maxresdefault.jpg'},
  {id: 127, caption: 'Picture #5', link: 'https://images.alphacoders.com/438/thumb-1920-438211.jpg'}
]

export default {
  getCarouselItems: () => {
    return new Promise((resolve) => { resolve(data) })
  }
}
