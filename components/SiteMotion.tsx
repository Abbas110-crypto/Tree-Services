"use client";

import { useEffect } from "react";

const selectors = [
  "section",
  "section article",
  "section figure",
  "section details",
  ".surface-sage",
  "form",
].join(",");

export default function SiteMotion() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selectors));

    elements.forEach((element, index) => {
      element.dataset.motion = "";
      element.style.setProperty("--motion-delay", `${Math.min(index % 8, 7) * 70}ms`);

      if (element.id === "top") {
        element.classList.add("is-visible");
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    elements
      .filter((element) => !element.classList.contains("is-visible"))
      .forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}
