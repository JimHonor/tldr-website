"use client";

// DONE 点击后，copy to the clipboard
// DONE 点击后，按钮内容切换为 `Copied` 之类的东西
// DONE 点击后，一定时间后，按钮内容切换为原来的内容
// DONE 点击后，按钮内容切换为 `Copied` 之类的东西 → 可以自定义要切换的内容
// DONE 点击后，如果还在内容显示为 `Copied` 时，用户再次点击按钮，

import React, { useRef, useState } from "react";

type Props = {
  value: string;
};

export default function CopyButton({ value }: Props) {
  const [copied, setCopied] = useState(false);

  const timeoutIdRef = useRef<number | undefined>(undefined);

  const handleClick = () => {
    if (!copied) {
      setCopied(true);
      timeoutIdRef.current = window.setTimeout(() => {
        setCopied(false);
      }, 1000);

      copyToClipboard(value);
    } else {
      window.clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = window.setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
  };

  return <button onClick={handleClick}>{copied ? "copied" : "copy"}</button>;
}

const copyToClipboard = (value: string) => {
  navigator.clipboard.writeText(value);
};
