import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenis } from 'lenis/react';
import { LENIS_SCROLL_TARGET } from '../utils/scroll';

gsap.registerPlugin(ScrollTrigger);

const GsapLenisBridge = () => {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return undefined;

    const onScroll = () => ScrollTrigger.update();
    lenis.on('scroll', onScroll);

    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.scrollerProxy(LENIS_SCROLL_TARGET, {
      scrollTop(value) {
        if (arguments.length) {
          lenis.scrollTo(value, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    ScrollTrigger.refresh();

    return () => {
      lenis.off('scroll', onScroll);
      gsap.ticker.remove(tickerCallback);
      ScrollTrigger.scrollerProxy(LENIS_SCROLL_TARGET, {});
    };
  }, [lenis]);

  return null;
};

export default GsapLenisBridge;
