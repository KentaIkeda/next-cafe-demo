import gsap from 'gsap';
import _ScrollTrigger, { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WandHinFloatingCookie } from '../types/types';

// 左右にfixedされているクッキーをスクロールに応じてサイジングするアニメーションクラス
export class FloatingCookie {
  element: HTMLElement | null;
  w: WandHinFloatingCookie;
  h: WandHinFloatingCookie;
  tween: gsap.core.Tween;
  constructor(
    element: string,
    w: WandHinFloatingCookie,
    h: WandHinFloatingCookie
  ) {
    this.element = document.getElementById(element)!;
    this.w = w;
    this.h = h;
    this.tween = gsap.to(this.element, {
      width: `${this.w}%`,
      height: `${this.h}%`,
      duration: 0.5,
      paused: true,
      ease: 'circ.out',
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
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(this.element, {
      scrollTrigger: {
        trigger: '#first-view',
        start: 'bottom center',
        toggleActions: 'play none none reverse', // onEnter onLeave onEnterBack onLeaveBack
        scrub: true,
      },
      opacity: 1,
      ease: 'circ.out',
    });
    this.getConceptSection();
    this.getBusinessHourSection();
    this.getAccessSection();
    this.getNewsSection();
  };
}

export class ScrollChangeColor {
  element: HTMLElement;
  color: string;
  changeColorTween: gsap.core.Tween;
  constructor(element: string, color: string) {
    //試しに書いてみてる
    gsap.registerPlugin(ScrollTrigger);
    this.element = document.getElementById(element)!;
    this.color = color;
    this.changeColorTween = gsap.to('#hamburger-icon', {
      color: this.color,
      paused: true,
      duration: 0.25,
      ease: 'power4',
    });
  }
  // ハンバーガーメニューアイコンに指定されているtopの値を取得する関数
  getDistanvefromTopOfFirstView = () => {
    const top = getComputedStyle(
      document.getElementById('hamburger-icon')?.parentElement as Element
    ).top;
    return Number(top.slice(0, -2));
  };
  // ハンバーガーメニューアイコンのheightを取得
  iconHeight = () => {
    return document.getElementById('hamburger-icon')!.clientHeight;
  };
  // ハンバーガーメニューアイコンに指定されているtopとheightの値を足してreturnする関数
  // 後々gsapで計算する時にコードが煩雑にならないように作成した
  sumDistanveAndHight = () => {
    return this.getDistanvefromTopOfFirstView() + this.iconHeight() / 2;
  };
  changeColor = () => {
    ScrollTrigger.create({
      trigger: this.element,
      start: `bottom +=${this.sumDistanveAndHight()}`,
      onEnter: () => this.changeColorTween.play(),
      onLeaveBack: () => this.changeColorTween.reverse(),
    });
  };
}

export class FixedHeader {
  triggerElement: HTMLElement;
  animation: gsap.core.Tween;

  constructor(triggerElement: string) {
    // 末尾に"!"を付けてるからuseEffect内で使用することを想定
    // triggerElement
    this.triggerElement = document.getElementById(triggerElement)!;
    this.animation = gsap.to('#header_navigation', {
      opacity: 1,
      duration: 0.2,
      paused: true,
    });
  }
  playAnimation = () => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: this.triggerElement,
      start: 'bottom top',
      onEnter: () => {
        console.log('start');
        this.animation.play();
      },
      onEnterBack: () => {
        console.log('back');
        this.animation.reverse();
      },
    });
  };
}
