import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export class FloatingCookie {
  element: HTMLElement | null;
  w: number | string;
  h: number | string;
  tween: gsap.core.Tween;
  constructor(element: string, w: number | string, h: number | string) {
    this.element = document.getElementById(element)!;
    this.w = w;
    this.h = h;
    this.tween = gsap.to(this.element, {
      width: `${this.w}%`,
      height: `${this.h}%`,
      duration: 0.5,
      paused: true,
      ease: 'power4.inOut',
    });
  }
  playResizeCookie = () => {
    this.tween.play();
  };
  reverseResizeCookie = () => {
    this.tween.reverse();
  };

  getConceptSection = () => {
    gsap.registerPlugin(ScrollTrigger);
    const concept = document.getElementById('sec-concept');
    ScrollTrigger.create({
      trigger: concept,
      start: 'top center',
      end: 'bottom center',
      onToggle: (self) => {
        if (self.isActive) {
          this.playResizeCookie();
        }
        if (!self.isActive) {
          this.reverseResizeCookie();
        }
      },
    });
  };
  getBusinessHourSection = () => {
    gsap.registerPlugin(ScrollTrigger);
    const businessHour = document.getElementById('sec-businesshour');
    ScrollTrigger.create({
      trigger: businessHour,
      start: 'top center',
      end: 'bottom center',
      onToggle: (self) => {
        if (self.isActive) {
          this.playResizeCookie();
        }
        if (!self.isActive) {
          this.reverseResizeCookie();
        }
      },
    });
  };
  getAccessSection = () => {
    gsap.registerPlugin(ScrollTrigger);
    const access = document.getElementById('sec-access');
    ScrollTrigger.create({
      trigger: access,
      start: 'top center',
      end: 'bottom center',
      onToggle: (self) => {
        if (self.isActive) {
          this.playResizeCookie();
        }
        if (!self.isActive) {
          this.reverseResizeCookie();
        }
      },
    });
  };
  getNewsSection = () => {
    gsap.registerPlugin(ScrollTrigger);
    const news = document.getElementById('sec-news');
    ScrollTrigger.create({
      trigger: news,
      start: 'top center',
      end: 'bottom center',
      onToggle: (self) => {
        if (self.isActive) {
          this.playResizeCookie();
        }
        if (!self.isActive) {
          this.reverseResizeCookie();
        }
      },
    });
  };
  floatingCookie = () => {
    console.log(gsap.version);
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(this.element, {
      scrollTrigger: {
        trigger: '#first-view',
        start: 'bottom center',
        toggleActions: 'play none none reverse', // onEnter onLeave onEnterBack onLeaveBack
        scrub: true,
      },
      opacity: 1,
    });
    this.getConceptSection();
    this.getBusinessHourSection();
    this.getAccessSection();
    this.getNewsSection();
  };
}
