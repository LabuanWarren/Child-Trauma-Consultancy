import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LENIS_SCROLL_TARGET } from '../utils/scroll';
import './ScrollReveal.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  inline = false,
  block = false,
  id,
  rotationEnd = 'top 55%',
  wordAnimationEnd = 'top 55%',
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\s+)/).map((word, index) => {
      if (/^\s+$/.test(word)) return word;

      return (
        <span className="word" key={`${word}-${index}`}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;
    if (!block && typeof children !== 'string') return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const scroller =
      scrollContainerRef?.current ?? LENIS_SCROLL_TARGET;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { transformOrigin: '0% 50%', rotate: baseRotation },
        {
          ease: 'none',
          rotate: 0,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top bottom',
            end: rotationEnd,
            scrub: true,
          },
        },
      );

      if (block) {
        gsap.fromTo(
          el,
          { opacity: baseOpacity, willChange: 'opacity' },
          {
            ease: 'none',
            opacity: 1,
            scrollTrigger: {
              trigger: el,
              scroller,
              start: 'top bottom-=20%',
              end: wordAnimationEnd,
              scrub: true,
            },
          },
        );

        if (enableBlur) {
          gsap.fromTo(
            el,
            { filter: `blur(${blurStrength}px)` },
            {
              ease: 'none',
              filter: 'blur(0px)',
              scrollTrigger: {
                trigger: el,
                scroller,
                start: 'top bottom-=20%',
                end: wordAnimationEnd,
                scrub: true,
              },
            },
          );
        }

        return;
      }

      const wordElements = el.querySelectorAll('.word');

      gsap.fromTo(
        wordElements,
        { opacity: baseOpacity, willChange: 'opacity' },
        {
          ease: 'none',
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top bottom-=20%',
            end: wordAnimationEnd,
            scrub: true,
          },
        },
      );

      if (enableBlur) {
        gsap.fromTo(
          wordElements,
          { filter: `blur(${blurStrength}px)` },
          {
            ease: 'none',
            filter: 'blur(0px)',
            stagger: 0.05,
            scrollTrigger: {
              trigger: el,
              scroller,
              start: 'top bottom-=20%',
              end: wordAnimationEnd,
              scrub: true,
            },
          },
        );
      }
    }, el);

    const refreshTriggers = () => ScrollTrigger.refresh();

    requestAnimationFrame(() => {
      requestAnimationFrame(refreshTriggers);
    });

    window.addEventListener('load', refreshTriggers);

    return () => {
      window.removeEventListener('load', refreshTriggers);
      ctx.revert();
    };
  }, [
    block,
    children,
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength,
  ]);

  if (block) {
    return (
      <div
        ref={containerRef}
        id={id}
        className={`scroll-reveal scroll-reveal--block ${containerClassName}`.trim()}
      >
        {children}
      </div>
    );
  }

  if (typeof children !== 'string') {
    return children;
  }

  return (
    <div
      ref={containerRef}
      id={id}
      className={`scroll-reveal ${inline ? 'scroll-reveal--inline' : ''} ${containerClassName}`.trim()}
    >
      <span className={`scroll-reveal-text ${textClassName}`.trim()}>{splitText}</span>
    </div>
  );
};

export default ScrollReveal;
