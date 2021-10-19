function someTh() {
    alert('You clicked it');
}

class JQuery {
    constructor(elem) {
      if(typeof elem === 'string') {
        elem = document.createElement(elem);
      }
      this.elem = elem;
    }
    text(text) {
      if(text) {
          this.elem.textContent = text;
      } else {
          console.log(this.elem.textContent);
          this.elem.textContent;
      }
      return this;
    }
    css(cssText) {
      this.elem.style.cssText = `${cssText}`
      return this;
    }
    append () {
      document.body.append(this.elem);
      return this;
    }
    remove() {
        this.elem.remove();
        return this;
    }
    addClass(className) {
        this.elem.classList.add(className);
        return this;
    }
    removeClass(className) {
        this.elem.classList.remove(className);
        return this;
    }
    attr(name, value) {
        if(value) {
            this.elem.setAttribute(name, value);
            console.log(this.elem.attributes);
        } else {
            this.elem.getAttribute(name);
            console.log(this.elem.attributes);
        }
        return this;
    }
    children() {
        this.elem.children;
        console.log(this.elem.children);
        return this;
    }
    empty() {
        this.elem.innerHTML = '';
        return this;
    }
    click(handler) {
        this.elem.addEventListener('click', handler);
        return this;
    }
}

const ul = document.querySelector('ul');
const jQuery = new JQuery(document.querySelector('h1'));
const jQuery2 = new JQuery('h1');
const jQuery3 = new JQuery(ul);
jQuery2.text('Big Blue Header').css(`color: blue; font-size: 52px`).addClass('new').removeClass('new').attr('sth', 'yeah').append().children();
jQuery.text('Big Red Header').css(`color: red; font-size: 52px`).click(someTh);
jQuery3.children();
