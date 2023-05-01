"use client";
import { useEffect, useRef, useState } from "react";

export type CardProps = {
  children: React.ReactNode;
  shadowColor: string;
  title: string;
};

export const Card = ({ children, shadowColor, title, ...props }: CardProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [cardPerspective, setCardPerspective] = useState({});
  const [childrenPerspective, setChildrenPerspective] = useState({});
  const [highlightPerspective, setHighlightPerspective] = useState({});

  const handlePointerMove = (event: PointerEvent) => {
    const pointerTypeIsMouse = event.pointerType === "mouse";
    if (!pointerTypeIsMouse) {
      event.preventDefault();
    }
    const { clientX, clientY } = event;
    const elBoundingClientRect = wrapperRef.current?.getBoundingClientRect();
    const { top, left, width, height }: any = elBoundingClientRect;

    const centerX = width / 2;
    const centerY = height / 2;

    const coordX = clientX - left;
    const coordY = clientY - top;

    let rotateY = (40 * (coordX - centerX)) / (width / 2);
    let rotateX = ((40 * (coordY - centerY)) / (height / 2)) * -1;

    if (rotateX > 0) {
      rotateX = rotateX > 30 ? 30 : rotateX;
    } else {
      rotateX = rotateX < -30 ? -30 : rotateX;
    }

    if (rotateY > 0) {
      rotateY = rotateY > 30 ? 30 : rotateY;
    } else {
      rotateY = rotateY < -30 ? -30 : rotateY;
    }

    const rotateXPercentage = (rotateX / 40) * 100;
    const rotateYPercentage = (rotateY / 40) * 100;

    const cardStyle = {
      transform: `scale(1.1) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      boxShadow: `
          ${-rotateY / 2}px ${rotateX / 2}px 15px ${shadowColor}`,
    };

    const childrenStyle = {
      transform: `translate3d(${rotateYPercentage * 0.25}%, ${
        -rotateXPercentage * 0.25
      }%, 0)`,
    };

    const highlightStyle = {
      transform: `translate3d(${-rotateYPercentage * 0.25}%, ${
        rotateXPercentage * 0.25
      }%, 0)`,
      opacity:
        Math.max(Math.abs(rotateXPercentage), Math.abs(rotateYPercentage)) /
        100,
      transitionDuration: "0ms",
    };

    setCardPerspective(cardStyle);
    setChildrenPerspective(childrenStyle);
    setHighlightPerspective(highlightStyle);
  };

  function handlePointerLeave() {
    setCardPerspective({
      transform: "scale(1) rotateX(0) rotateY(0)",
      transition: "box-shadow 0.3s, transform 0.3s",
    });
    setChildrenPerspective({
      transform: "translate3d(0, 0, 0)",
    });
    setHighlightPerspective({
      transform: "translate3d(0px, 0px, 0px)",
      transitionDuration: "600ms",
      opacity: 0,
    });
  }

  useEffect(() => {
    wrapperRef.current?.addEventListener("pointermove", handlePointerMove);
    wrapperRef.current?.addEventListener("pointerleave", handlePointerLeave);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={cardPerspective}
      {...props}
      className="relative backdrop-blur dark:backdrop-blur bg-opacity-50 dark:bg-opacity-50 flex pd-2 w-28 h-28 flex-col md:p-4 rounded-xl md:w-60 md:h-28 md:flex-row overflow-hidden justify-center items-center z-40 transition-shadow touch-none hover:cursor-pointer hover:[transition:transform 0s,box-shadow 0s]"
    >
      <div ref={wrapperRef} className="absolute z-50 inset-0 cursor-pointer" />
      <div style={childrenPerspective}>{children}</div>
      <h1 className="ml-4 dark:text-white text-slate-900">{title}</h1>
      <div
        style={highlightPerspective}
        className="absolute pointer-events-none block [left:-50%] [right:-50%] [width:200%] [height:200%] z-0"
      />
    </div>
  );
};
