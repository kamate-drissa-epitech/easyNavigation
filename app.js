class Spotlight extends HTMLElement {
  constructor() {
    super();
    // this.shortcutHandler = this.shortcutHandler.bind(this);
  }
  connectedCallback() {
    this.classList.add("search");
    this.classList.add("active");
    this.innerHTML = `
    
      <div class="bar">
        <input type="search" />
        <ul class="suggestions">
          <li class=""><a href="#">Dashboard</a></li>
          <li>
            <a href="#"
              ><mark>D</mark> <mark>a</mark> <mark>s</mark> <mark>h</mark>
              <mark>b</mark>oard</a
            >
          </li>
        </ul>
      </div>
            `;

    this.input = this.querySelector("input");
    this.input.addEventListener("blur", this.hide);
    window.addEventListener("keydown", this.shortcutHandler);
  }

  disconnectedCallback() {
    window.removeEventListener("keydown", this.shortcutHandler);
  }

  shortcutHandler = (e) => {
    if (e.key === "k" && e.ctrlKey === true) {
      e.preventDefault();
      this.classList.add("active");
      this.input.focus();
    }

    if (e.key === "Escape" && document.activeElement === this.input) {
      this.input.blur();
    }
  };

  hide = () => {
    this.classList.remove("active");
  };
}



class searchItem {
    /**
     * @param {string} title
     * @param {string} href
     */
    constructor(title, href){

    }
}

customElements.define("search-bar", Spotlight);
