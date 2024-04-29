import { Component } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { auto } from '@popperjs/core';
import { SwiperOptions } from 'swiper/types';


@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css'
})
export class ProjetosComponent  {

  faGithub=faGithub;

  config: SwiperOptions = {
    initialSlide: 0,
    spaceBetween: 25,
    navigation: false,
    centeredSlides: true,

    keyboard: {
    enabled: true
    },
    loop: true,
    noSwipingClass: 'swiper-slide',
    slidesPerView: 'auto',
    pagination: {
      clickable: true
    },
    autoplay: {
      delay: 1,
      pauseOnMouseEnter: false,
      disableOnInteraction: false,
    },
    speed: 2000,
    grabCursor: true,

    breakpoints: {
      640: {
        slidesPerView: auto,
        spaceBetween: 20
      },
      930: {
        slidesPerView: auto,
        spaceBetween: 20
      },
      1250: {
        slidesPerView: auto,
        spaceBetween: 30
      },
      1300: {
        slidesPerView: auto,
        spaceBetween: 30
      }
    }
  }
}
