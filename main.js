function someTh() {
    alert('You clicked it');
}

class JQuery {
    constructor(elems) {
      if(typeof elems === 'string') {
        elems = document.createElement(elems);
      }
      this.elems = [elems];
    }
    text(text) {
      for(let i = 0; i < this.elems.length; i++) {
        if(text) {
          this.elems[i].textContent = text;
        } else {
          console.log(this.elems.textContent);
          this.elems[i].textContent;
        }
      }
      return this;
    }
    css(cssText) {
      for(let i = 0; i < this.elems.length; i++) {
        this.elems[i].style.cssText = `${cssText}`;
      }
      return this;
    }
    append () {
      for(let i = 0; i < this.elems.length; i++) {
        document.body.append(this.elems[i]);
      }
      return this;
    }
  
    remove() {
      for(let i = 0; i < this.elems.length; i++) {
        this.elems[i].remove();
        // debugger;
      }
      if(this.elems[0].children) {
        for(let i = 0; i < this.elems[0].children.length; i++) {
          this.elems[0].children[i].remove();
        }
        // NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
      }
      return this;
    }
  
    addClass(className) {
      for(let i = 0; i < this.elems.length; i++) {
        this.elems[i].classList.add(className);
      }
      return this;
    }
  
    removeClass(className) {
      for(let i = 0; i < this.elems.length; i++) {
        this.elems[i].classList.remove(className);
        let classAttr = this.elems[i].getAttribute('class');
        if(!classAttr.value) {
          this.elems[i].removeAttribute('class');
        }
      }
      return this;
    }
  
    attr(name, value) {
      for(let i = 0; i < this.elems.length; i++) {
        if(value) {
            this.elems[i].setAttribute(name, value);
            console.log(this.elems[i].attributes);
        } else {
            this.elems[i].getAttribute(name);
            console.log(this.elems[i].attributes);
        }
      }
      return this;
    }
    children() {
      this.elems = this.elems[0].children;
      return this;
    }
    empty() {
      for(let i = 0; i < this.elems.length; i++) {
        this.elems[i].innerHTML = '';
      }
      return this;
    }
    click(handler) {
      for(let i = 0; i < this.elems.length; i++) {
        this.elems[i].addEventListener('click', handler);
      }
      return this;
    }
  }

const ul = document.querySelector('ul');
console.log(ul);

const jq = new JQuery(ul);
jq.children().text('wow').remove();

const h1 = document.querySelector('h1');
const jgh = new JQuery(h1);
jgh.text('blah');
// jgh.remove();