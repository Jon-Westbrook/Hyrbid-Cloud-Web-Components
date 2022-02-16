import React, { ReactElement, useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';
import animationData from './ibm-journey-animation.json';

import { homeScene } from '../data/scenes';

import { useSelector, useDispatch } from 'react-redux';
import { Scene } from '../data/scenes';
import {
  selectCurrentScene,
  setHomeNavIn,
  setInfocardIn,
} from '../lib/redux/slices/scenesSlice';
import {
  setAnimRight,
  setTransitioning,
} from '../lib/redux/slices/presentationSlice';

const Animation = (): ReactElement => {
  const anim = useRef<AnimationItem>();
  const observer = useRef<IntersectionObserver>();
  const lottieContainer = useRef<Element>();
  const scene = useSelector(selectCurrentScene);
  const isHome = scene === null;
  const dispatch = useDispatch();

  function usePrevious<T = unknown>(val: T) {
    const ref = useRef<T>();
    useEffect(() => {
      ref.current = val;
    });
    return ref.current;
  }

  const previousScene = usePrevious<Scene | null>(scene);

  const useLottie = () => {
    useEffect(() => {
      if (!lottieContainer?.current) {
        return;
      }
      anim.current = lottie.loadAnimation({
        container: lottieContainer.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData,
      });

      dispatch(setTransitioning(true));

      // init lottie
      anim.current.addEventListener('DOMLoaded', () => {
        if (!anim.current) {
          return;
        }
        anim.current.playSegments(homeScene.in, true);

        const onEnterFrame = () => {
          if (anim?.current?.firstFrame === 0) {
            if (
              homeScene.labelIn &&
              homeScene.labelIn < anim.current.currentFrame
            ) {
              dispatch(setHomeNavIn(true));
            }
            if (
              homeScene.infocardIn &&
              homeScene.infocardIn < anim.current.currentFrame
            ) {
              dispatch(setInfocardIn(true));

              // remove listener inside the last event (Home.labelIn < Home.infocardIn)
              anim.current.removeEventListener('enterFrame', onEnterFrame);
            }
          }
        };
        anim.current.addEventListener('enterFrame', onEnterFrame);

        const onComplete = () => {
          dispatch(setTransitioning(false));
          anim?.current?.removeEventListener('complete', onComplete);
        };
        anim.current.addEventListener('complete', onComplete);

        // pause lottie when out of view
        const callback: IntersectionObserverCallback = (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) anim?.current?.play();
            else anim?.current?.pause();
          });
        };

        observer.current = new IntersectionObserver(callback, {
          rootMargin: '0px',
        });

        if (lottieContainer.current) {
          observer.current.observe(lottieContainer.current);
        }
      });

      return () => {
        if (lottieContainer.current && observer.current) {
          observer.current.unobserve(lottieContainer.current);
        }
      };
    }, []);
  };
  useLottie();

  const useFromHome = () => {
    const transitioningFromHomeToScene = !previousScene && scene;
    useEffect(() => {
      const onComplete = () => {
        dispatch(setTransitioning(false));
        dispatch(setInfocardIn(true));
        if (!anim.current || !scene?.loop) {
          return;
        }
        anim.current.loop = true;
        anim?.current?.playSegments(scene?.loop);
        anim?.current?.removeEventListener('complete', onComplete);
      };
      if (transitioningFromHomeToScene) {
        if (!anim.current) {
          return;
        }
        anim.current.loop = false;
        dispatch(setTransitioning(true));
        dispatch(setInfocardIn(false));
        anim.current.addEventListener('complete', onComplete);
        anim.current.playSegments(scene?.fromHome || []);
      }
      // eslint-disable-next-line
    }, [isHome]);
  };
  useFromHome();

  const useSceneTransitions = () => {
    const transitioningBetweenScenes = previousScene && scene;
    const onComplete = () => {
      if (!anim.current || !scene?.loop) {
        return;
      }
      dispatch(setTransitioning(false));
      anim.current.loop = true;
      anim.current.playSegments(scene.loop);
      anim.current.removeEventListener('complete', onComplete);
    };
    const onEnterFrame = () => {
      if (!anim.current) {
        return;
      }
      if (anim.current.firstFrame === scene?.in[0]) {
        dispatch(setInfocardIn(true));
        anim.current.removeEventListener('enterFrame', onEnterFrame);
      }
    };
    useEffect(() => {
      if (transitioningBetweenScenes && anim.current && previousScene.out) {
        anim.current.loop = false;
        dispatch(setTransitioning(true));
        dispatch(setInfocardIn(false));

        anim.current.addEventListener('complete', onComplete);
        anim.current.addEventListener('enterFrame', onEnterFrame);

        anim.current.playSegments(previousScene?.out);
        anim.current.playSegments(scene.in);
      }
      // eslint-disable-next-line
    }, [scene]);
  };
  useSceneTransitions();

  const useHomeIn = () => {
    const onComplete = () => {
      dispatch(setTransitioning(false));
      if (typeof anim.current !== 'undefined') {
        anim.current.removeEventListener('complete', onComplete);
      }
    };
    const onEnterFrame = () => {
      if (typeof anim?.current?.firstFrame === 'undefined') {
        return;
      }
      dispatch(setAnimRight(true));

      if (homeScene.labelIn && homeScene.labelIn < anim.current.currentFrame) {
        dispatch(setHomeNavIn(true));
      }
      if (
        homeScene.infocardIn &&
        homeScene.infocardIn < anim.current.currentFrame
      ) {
        dispatch(setInfocardIn(true));
        anim.current.removeEventListener('enterFrame', onEnterFrame);
      }
    };
    useEffect(() => {
      if (
        isHome &&
        typeof previousScene !== 'undefined' &&
        typeof anim?.current !== 'undefined' &&
        typeof previousScene?.out !== 'undefined'
      ) {
        anim.current.loop = false;
        dispatch(setTransitioning(true));
        dispatch(setInfocardIn(false));

        anim.current.addEventListener('complete', onComplete);
        anim.current.playSegments(previousScene.out);
        anim.current.playSegments(homeScene.in);

        anim.current.addEventListener('enterFrame', onEnterFrame);
      }
      if (!isHome) {
        dispatch(setHomeNavIn(false));
        dispatch(setAnimRight(false));
      }
    }, [isHome]);
  };
  useHomeIn();

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <div id="lottie-container" ref={lottieContainer} />
    </>
  );
};

export default Animation;
