export default interface IButton {
  label: string;
  isLoading?: boolean;
  type: "submit" | "reset" | "button";
  variant: "default" | "primary" | "secondary";
  disabled: boolean;
  border?: "rounded" | "rounded-50";
  onClick?: () => void;
}
