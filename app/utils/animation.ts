import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export class FloatingCookie {
  element: HTMLElement | null;
  tl!: gsap.core.Tween;
  constructor(element: string) {
    this.element = document.getElementById(element)!;
  }
  resizeCookie = (w: number, h: number) => {
    return gsap.to(this.element, {
      width: `${w}%`,
      height: `${h}%`,
      duration: 0.5,
      paused: true,
      ease: 'power4.inOut',
    });
  };
  playResizeCookie = (w: number, h: number) => {
    this.tl = this.resizeCookie(w, h);
    console.log(`this.tlが生成されました: ${this.tl}`);
    this.tl.play();
  };
  reverseResizeCookie = () => {
    this.tl.reverse();
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
          this.playResizeCookie(45, 45);
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
          this.playResizeCookie(45, 45);
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
          this.playResizeCookie(30, 30);
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
          this.playResizeCookie(45, 45);
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
