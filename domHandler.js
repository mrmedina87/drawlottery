class DomHandler {
  /**
    * Given a selector, returns the DOM element
    * @param {String}
    * @returns {Object}
    */
  getElement (sel) {
    return document.querySelector(sel);
  }

  /**
   * Given an DOM element and a text,
   * replaces the innerHTML with the text
   * @param {String} elem
   * @param {String} text
   */
  replaceInnerText(elem, text) {
    // Not insecure if we use it only to empty the node
    elem.innerHTML = '';
    const textnode = document.createTextNode(text);
    elem.appendChild(textnode);
  }
}