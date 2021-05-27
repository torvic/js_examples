import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { shorcuts, moveBall } from "./dom/teclado.js";
import countdown from "./dom/cuenta_regresiva.js";
import scrollTopBottom from "./dom/boton_scroll.js";
import darkTheme from "./dom/tema_oscuro.js";
import responsiveMedia from "./dom/objeto_responsive.js";


const d = document;

d.addEventListener("DOMContentLoaded", e => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock('#reloj', '#activar-reloj', '#desactivar-reloj');
  alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "May 26, 2021 12:08:19", "Boom Chakalaka !!!");
  scrollTopBottom(".scroll-top-btn");
  responsiveMedia("youtube", "(min-width: 1024px)", `<a href="https://www.youtube.com/watch?v=lbuEZGlTW2U&t=52s" target="_blank" rel="noopener">Ver Video</a>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/lbuEZGlTW2U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
  responsiveMedia("gmaps", "(min-width: 1024px)", `<a href="https://goo.gl/maps/FnsJgZB7DFYdCK7u7" target="_blank" rel="noopener">Ver Mapa</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.9883257007104!2d-72.5471515857696!3d-13.163135967251486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916d9a5f89555555%3A0x3a10370ea4a01a27!2sMachu%20Picchu!5e0!3m2!1ses-419!2spe!4v1622151336144!5m2!1ses-419!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`);
})

d.addEventListener("keydown", e => {
  shorcuts(e);
  moveBall(e, ".ball", ".stage");
})

darkTheme(".dark-theme-btn", "dark-mode");