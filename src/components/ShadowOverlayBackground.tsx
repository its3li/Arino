import React, { useRef, useId, useEffect, CSSProperties } from 'react';
import { animate, useMotionValue, AnimationPlaybackControls } from 'framer-motion';

interface AnimationConfig {
  scale: number;
  speed: number;
}

interface NoiseConfig {
  opacity: number;
  scale: number;
}

interface ShadowOverlayBackgroundProps {
  sizing?: 'fill' | 'stretch';
  color?: string;
  animation?: AnimationConfig;
  noise?: NoiseConfig;
  style?: CSSProperties;
  className?: string;
}

function mapRange(value: number, fromLow: number, fromHigh: number, toLow: number, toHigh: number): number {
  if (fromLow === fromHigh) {
    return toLow;
  }
  const percentage = (value - fromLow) / (fromHigh - fromLow);
  return toLow + percentage * (toHigh - toLow);
}

const useInstanceId = (): string => {
  const id = useId();
  return `shadowoverlay-${id.replace(/:/g, '')}`;
};

export default function ShadowOverlayBackground({
  sizing = 'fill',
  color = 'rgba(18, 52, 76, 1)',
  animation = { scale: 60, speed: 40 },
  noise = { opacity: 0.2, scale: 0.5 },
  style,
  className
}: ShadowOverlayBackgroundProps) {
  const id = useInstanceId();
  const animationEnabled = animation.scale > 0;
  const feColorMatrixRef = useRef<SVGFEColorMatrixElement>(null);
  const hueRotateMotionValue = useMotionValue(180);
  const hueRotateAnimation = useRef<AnimationPlaybackControls | null>(null);

  const displacementScale = mapRange(animation.scale, 1, 100, 20, 100);
  const animationDuration = mapRange(animation.speed, 1, 100, 1000, 50);

  useEffect(() => {
    if (!feColorMatrixRef.current || !animationEnabled) {
      return;
    }

    hueRotateAnimation.current?.stop();
    hueRotateMotionValue.set(0);

    hueRotateAnimation.current = animate(hueRotateMotionValue, 360, {
      duration: animationDuration / 25,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'linear',
      onUpdate: (value: number) => {
        if (feColorMatrixRef.current) {
          feColorMatrixRef.current.setAttribute('values', String(value));
        }
      }
    });

    return () => {
      hueRotateAnimation.current?.stop();
    };
  }, [animationDuration, animationEnabled, hueRotateMotionValue]);

  return (
    <div
      className={className}
      style={{
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        height: '100%',
        ...style
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: -displacementScale,
          filter: animationEnabled ? `url(#${id}) blur(4px)` : 'none'
        }}
      >
        {animationEnabled && (
          <svg style={{ position: 'absolute' }}>
            <defs>
              <filter id={id}>
                <feTurbulence
                  result="undulation"
                  numOctaves="2"
                  baseFrequency={`${mapRange(animation.scale, 0, 100, 0.001, 0.0005)},${mapRange(animation.scale, 0, 100, 0.004, 0.002)}`}
                  seed="0"
                  type="turbulence"
                />
                <feColorMatrix ref={feColorMatrixRef} in="undulation" type="hueRotate" values="180" />
                <feColorMatrix
                  in="dist"
                  result="circulation"
                  type="matrix"
                  values="4 0 0 0 1  4 0 0 0 1  4 0 0 0 1  1 0 0 0 0"
                />
                <feDisplacementMap in="SourceGraphic" in2="circulation" scale={displacementScale} result="dist" />
                <feDisplacementMap in="dist" in2="undulation" scale={displacementScale} result="output" />
              </filter>
            </defs>
          </svg>
        )}
        <div
          style={{
            backgroundColor: color,
            maskImage: "url('https://framerusercontent.com/images/ceBGguIpUU8luwByxuQz79t7To.png')",
            maskSize: sizing === 'stretch' ? '100% 100%' : 'cover',
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
            width: '100%',
            height: '100%'
          }}
        />
      </div>

      {noise.opacity > 0 && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: "url('https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png')",
            backgroundSize: `${noise.scale * 200}px`,
            backgroundRepeat: 'repeat',
            opacity: noise.opacity / 2
          }}
        />
      )}
    </div>
  );
}
