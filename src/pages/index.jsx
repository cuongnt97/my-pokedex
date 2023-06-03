// pages/index.js
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/search");
  }, []);

  return <div>{/* Hiển thị nội dung tùy ý */}</div>;
}
