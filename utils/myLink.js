import Link from "next/link";
import { forwardRef } from "react";

export const MyLink = forwardRef((props, ref) => {
  let { href, children, ...rest } = props;
  return (
    (<Link href={href} ref={ref} {...rest}>

      {children}

    </Link>)
  );
});
