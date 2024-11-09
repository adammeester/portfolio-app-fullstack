import { useEffect } from 'react';

export const usePopInObserver = (
  targetClassName: string,
  showClassName: string
) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(showClassName);
        } else {
          entry.target.classList.remove(showClassName);
        }
      });
    });

    const hiddenElements = document.querySelectorAll(`.${targetClassName}`);
    hiddenElements.forEach((element) => observer.observe(element));

    return () => {
      hiddenElements.forEach((element) => observer.unobserve(element));
    };
  }, [targetClassName]);
};
