class Footer extends HTMLElement {
constructor() {
super();
}

connectedCallback() {
this.innerHTML = ` <div class="footer-lemos mt-5">

    <div class="py-3 px-md-5 container-fluid">
        <div class="row align-items-center">

            <div class="col-md-6">
                <p class="mb-0" style="color: var(--light-gray);">
                    © 2026 Ankit Sharma
                </p>

                <p class="my-0 pt-0">
                    <a href="mailto:a_sharma@wr.iitr.ac.in">
                        Email: a_sharma@wr.iitr.ac.in
                    </a>
                </p>
            </div>

            <div class="col-md-6 text-md-right mt-3 mt-md-0">

                <p class="mb-1" style="color: var(--light-gray);">
                    Quick Links
                </p>

                <a href="/" class="mr-3">
                    <i class="footer-icons fa-solid fa-house"></i>
                </a>

                <a href="https://orcid.org/0009-0007-4294-0753" target="_blank" class="mr-3">
                    <i class="footer-icons fa-brands fa-orcid"></i>
                </a>

                <a href="#" target="_blank" class="mr-3">
                    <i class="footer-icons fa-brands fa-google-scholar"></i>
                </a>

                <a href="#" target="_blank" class="mr-3">
                    <i class="footer-icons fab fa-linkedin"></i>
                </a>

                <a href="#" target="_blank">
                    <i class="footer-icons fab fa-github"></i>
                </a>

            </div>

        </div>
    </div>

</div>
`;

}
}

customElements.define('footer-component', Footer);
