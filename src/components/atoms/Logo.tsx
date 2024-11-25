import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Logo: FC = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logos/paco@4x.png"
        height={54}
        width={54}
        alt="Logo"
        priority
      />
    </Link>
  );
};
export default Logo;
