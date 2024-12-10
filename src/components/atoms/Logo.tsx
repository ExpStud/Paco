import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Logo: FC = () => {
  return (
    <Link href="/">
      <Image
        src={`${process.env.CLOUDFLARE_STORAGE}/images/logos/paco-new.jpeg`}
        height={54}
        width={54}
        alt="Logo"
        priority
        className="rounded-full"
      />
    </Link>
  );
};
export default Logo;
