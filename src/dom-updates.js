let domUpdates = {

  hide(elements) {
    elements.forEach(element => {
      element.classList.add('hidden')
    })
  },

  show(elements) {
    elements.forEach(element => {
      element.classList.remove('hidden')
    })
  },

}


export default domUpdates;
