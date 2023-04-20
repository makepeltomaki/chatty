import { useEffect, useRef } from "react";

const useChatScrollToBottom = (prop) => {
  const scrollRef = useRef(null);
  if (scrollRef.current) {
    scrollRef.current.scrollTop = scrollRef.current?.scrollHeight - scrollRef.current?.clientHeight;
  }

  useEffect(() => {}, [prop]);
  return scrollRef;
};
export default useChatScrollToBottom;
