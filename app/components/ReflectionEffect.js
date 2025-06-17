"use client";

import { useEffect, useRef } from 'react';
import React from 'react';

export default function ReflectionEffect({ children }) {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    const cells = container.querySelectorAll('.reflection-grid-cell');

    cells.forEach((cell, index) => {
      const row = Math.floor(index / 10);
      const col = index % 10;

      cell.addEventListener('mouseenter', () => {
        const rotateX = (row * -5) + 25;
        const rotateY = (-25) + (col * 5);
        content.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
    });

    container.addEventListener('mouseleave', () => {
      content.style.transform = 'rotateX(0) rotateY(0)';
    });

    return () => {
      cells.forEach(cell => {
        cell.removeEventListener('mouseenter', () => {});
      });
      container.removeEventListener('mouseleave', () => {});
    };
  }, []);

  // Clone children and pass contentRef
  const childrenWithRef = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { contentRef });
    }
    return child;
  });

  return (
    <div ref={containerRef} className="reflection-container">
      {childrenWithRef}
    </div>
  );
} 