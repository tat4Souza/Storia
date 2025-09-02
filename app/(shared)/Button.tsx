"use client";
import classNames from "classnames";
import { useEffect, useState } from "react";

export default function Button({
  content,
  onClick,
  rippleColor,
  outlined,
  className,
  mainColor = "var(--primary)",
  ripple = false,
}: {
  content: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  rippleColor?: string;
  outlined?: boolean;
  mainColor?: string;
  ripple?: boolean;
  className?: string;
}) {
  const [isRipple, setIsRipple] = useState(false);
  const [coords, setCoords] = useState({ x: -1, y: -1 });

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRipple(true);

      setTimeout(() => setIsRipple(false), 180);
    } else {
      setIsRipple(false);
    }
  }, [coords]);

  useEffect(() => {
    if (!isRipple) setCoords({ x: -1, y: -1 });
  }, [isRipple]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    onClick?.(e);
  };

  console.log(isRipple);
  return (
    <button
      onClick={handleClick}
      className={classNames("button", className, {
        "button--outlined": outlined,
        "button--ripple-hover": ripple,
      })}
      style={
        outlined
          ? { color: mainColor }
          : ({
              backgroundColor: mainColor,
              "--main-color": mainColor,
            } as React.CSSProperties)
      }
    >
      {ripple && isRipple ? (
        <span
          className="button--ripple"
          style={{
            left: coords.x,
            top: coords.y,
            backgroundColor: rippleColor,
          }}
        ></span>
      ) : (
        ""
      )}
      <span className="content">{content}</span>
    </button>
  );
}
