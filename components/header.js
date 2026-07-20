class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark sticky-top">

          <h1>
            <a class="navbar-brand" href="/">ANKIT SHARMA</a>
          </h1>

          <button class="navbar-toggler collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarCollapse"
                  aria-controls="navbarCollapse"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="navbar-collapse collapse" id="navbarCollapse">
            <ul class="navbar-nav ml-auto">

              <li class="nav-item mr-2">
                <a class="nav-link" href="/">HOME</a>
              </li>

              <li class="nav-item mr-2">
                <a class="nav-link" href="/pages/education.html">EDUCATION</a>
              </li>

              <li class="nav-item mr-2">
                <a class="nav-link" href="/pages/experience.html">EXPERIENCE</a>
              </li>

              <li class="nav-item mr-2">
                <a class="nav-link" href="/pages/skills.html">SKILLS</a>
              </li>

              <li class="nav-item mr-2">
                <a class="nav-link" href="/pages/projects.html">RESEARCH & PROJECTS</a>
              </li>

              <li class="nav-item mr-2">
                <a class="nav-link" href="/pages/publications.html">PUBLICATIONS</a>
              </li>

              <li class="nav-item mr-2">
                <a class="nav-link" href="/pages/teaching.html">TEACHING</a>
              </li>

              <li class="nav-item mr-2">
                <a class="nav-link" href="/pages/blogposts.html">AWARDS & SERVICE</a>
              </li>

            </ul>
          </div>

        </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);