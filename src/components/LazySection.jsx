import { Suspense, useEffect, useRef, useState } from 'react';

const LazySection = ({
  children,
  rootMargin = '280px 0px',
  minHeight = 120,
  className = '',
  fallback = null,
}) => {
  const ref = useRef(null);
  const [shouldRender, setShouldRender] = useState(
    () => typeof IntersectionObserver === 'undefined',
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || shouldRender) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, shouldRender]);

  return (
    <div
      ref={ref}
      className={className}
      style={shouldRender ? undefined : { minHeight }}
    >
      {shouldRender ? (
        <Suspense fallback={fallback}>{children}</Suspense>
      ) : (
        fallback
      )}
    </div>
  );
};

export default LazySection;
