import { FC } from "react";

import IBadge from "@/interfaces/ui/IBadge";
import { BadgeStyle } from "@/components/Global/UI/Badge/Badge.style";

const Badge: FC<IBadge> = ({ children, variant, border }) => {
  return (
    <BadgeStyle variant={variant} border={border}>
      {children}
    </BadgeStyle>
  );
};

export default Badge;
