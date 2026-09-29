
  const toggle = document.querySelector("#menu-toggle");
  const menu = document.querySelector("#div2");
  const demo = document.querySelector("#div3");

  toggle.onclick = () => {
    menu.classList.toggle("is-open");
    demo.classList.toggle("is-open");
  };
