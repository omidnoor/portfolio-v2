import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export default function WheelDiv({
  children,
  animationInProgress,
  setAnimationInProgress,
}) {
  const [circleSize, setCircleSize] = useState(0);
  const [circleHeight, setCircleHeight] = useState(0);
  const [containerSize, setContainerSize] = useState({
    width: 0,
    height: 0,
  });

  const handleScroll = () => {
    const containerElement = document.getElementById("container");
    const containerRect = containerElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const containerVisibleHeight = Math.min(
      containerRect.bottom,
      windowHeight - containerRect.top,
    );
    setCircleSize(20);
    // console.log(containerVisibleHeight > containerSize.height - 0.1);
    if (containerVisibleHeight > containerSize.height - 0.1) {
      animateCircle();
    } else {
      setAnimationInProgress(false);
    }
  };

  console.log(circleHeight);
  const handleWheel = (e) => {
    if (animationInProgress) {
      e.preventDefault();

      setCircleHeight((prev) => {
        const newCircleHeight = prev + e.deltaY / 50;

        if (newCircleHeight <= 20 && newCircleHeight >= 0) {
          return newCircleHeight;
        } else if (newCircleHeight > 20) {
          return 20;
        } else if (newCircleHeight < 0) {
          return 0;
        }

        return prev;
      });
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [animationInProgress]);

  useEffect(() => {
    const containerElement = document.getElementById("container");
    // console.log(containerElement.offsetWidth);
    if (containerElement) {
      setContainerSize({
        width: containerElement.offsetWidth,
        height: containerElement.offsetHeight,
      });
    }
  }, []);

  const animateCircle = () => {
    setAnimationInProgress(true);
    handleWheel();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [containerSize]);

  return (
    <div className={styles.container} id="container">
      <div
        className={styles.scrollingDiv}
        style={{
          width: `${2 * circleSize}px`,
          height: `${2 * circleSize}px`,
          top: `${animationInProgress ? 50 - circleHeight : "50"}%`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
