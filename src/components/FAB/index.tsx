import React from "react";
import { ActionButton } from "./styles";

type Props = {
  icon: React.ReactChild;
  secondary?: boolean;
  onClick?(event: React.MouseEvent<Element, MouseEvent>): void;
};

const FAB: React.FC<Props> = ({ icon, secondary, onClick }) => {
  return (
    <ActionButton secondary={secondary} onClick={onClick}>
      {icon}
    </ActionButton>
  );
};

export default FAB;
