import { cleanup, renderHook } from '@testing-library/react';
import { afterEach, expect, it, vi } from 'vitest';
import { useFadeIn } from './useFadeIn';

afterEach(() => { cleanup(); document.body.innerHTML = ''; vi.unstubAllGlobals(); });

it('leaves hero, FAQ and contact visible and removes global animation delays', () => {
  document.body.innerHTML = '<section><div data-animate="fade-in" id="hero-content"></div></section><section id="faq"><div data-animate="fade-in"></div></section><section id="kontakt"><div data-animate="fade-in"></div></section><section id="o-nas"><div data-animate="fade-in" id="animated"></div></section>';
  const observe = vi.fn();
  const disconnect = vi.fn();
  vi.stubGlobal('IntersectionObserver', class { observe = observe; disconnect = disconnect; });
  const { unmount } = renderHook(useFadeIn);
  expect(observe).toHaveBeenCalledTimes(1);
  const animated = document.getElementById('animated')!;
  expect(animated.style.opacity).toBe('1');
  expect(animated.style.transition).toBe('transform 0.3s ease-out');
  for (const selector of ['#hero-content', '#faq div', '#kontakt div']) {
    expect(document.querySelector(selector)).not.toHaveAttribute('style');
  }
  unmount();
  expect(disconnect).toHaveBeenCalled();
  expect(animated.style.transform).toBe('');
});
