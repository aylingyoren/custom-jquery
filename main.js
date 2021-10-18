function JQuery() {
    // elem = document.querySelector('elem');

    this.addClass = function(elem, className) {
        return elem.classList.add(className)
    }
    this.removeClass = function(elem, className) {
        return elem.classList.remove(className);
    }
    this.append = function(elem) {
        return document.body.append(elem);
    }
    this.remove = function(elem) {
        return elem.remove();
    }
    // this.text = function(elem) {
    //     return elem.
    // }
    this.attr = function(elem, name) {
        console.log(elem.getAttribute(name));
        return elem.getAttribute(name);
    }
    this.children = function(elem) {
        console.log(elem.children)
        return elem.children;
    }
    this.addText = function(elem, text) {
        return elem.innerHTML = text;
    }
    this.empty = function(elem) {
        return elem.innerHTML = '';
    }
    // this.css = function(elem, {name: value}) {
    this.css = function(elem, cssText) {
        // return elem.style = {name: value};
        return elem.style.cssText = `${cssText}`;
    }
}

let jQuery = new JQuery();

const header = document.querySelector('h1');
const ul = document.querySelector('ul');

jQuery.addText(header, 'Hey');
jQuery.append(header);
jQuery.addClass(header, 'new');
jQuery.attr(header, 'class');
jQuery.children(ul);
jQuery.css(header, `color: red; font-style: italic`);
// jQuery.empty(header);
// jQuery.remove(header);
// jQuery.removeClass(header, 'new');