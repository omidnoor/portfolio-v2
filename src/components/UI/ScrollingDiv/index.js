import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export default function ScrollingDiv({ children }) {
  const [circleSize, setCircleSize] = useState(0);
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
    console.log(containerVisibleHeight);
    const maxRadius =
      Math.sqrt(
        containerSize.width * containerSize.width +
          containerSize.height * containerSize.height,
      ) / 2;

    if (containerVisibleHeight < containerSize.height / 2) {
      setCircleSize(20);
    } else {
      const newSize = Math.min(
        ((containerVisibleHeight * 2) / containerSize.height - 1) * maxRadius,
        maxRadius,
      );
      setCircleSize(newSize);
    }
  };

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [containerSize]);

  return (
    <div className={styles.container} id="container">
      <div
        className={styles.scrollingDiv}
        style={{ width: `${2 * circleSize}px`, height: `${2 * circleSize}px` }}
      >
        {children}
      </div>
    </div>
  );
}
