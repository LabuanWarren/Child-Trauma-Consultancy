import { ReactLenis } from 'lenis/react';
import GsapLenisBridge from './GsapLenisBridge';

const lenisOptions = {
  autoRaf: false,
  lerp: 0.1,
  smoothWheel: true,
  anchors: {
    offset: -64,
  },
};

const SmoothScroll = ({ children }) => (
  <ReactLenis root options={lenisOptions}>
    <GsapLenisBridge />
    {children}
  </ReactLenis>
);

export default SmoothScroll;
