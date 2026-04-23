import Image from "next/image";

export default function BrandLogo({ className = "" }) {
  return (
    <Image
      src="/logo/triorecord%20logo.png"
      alt=""
      width={416}
      height={416}
      className={`${className} object-contain`}
      priority
    />
  );
}
