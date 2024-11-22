interface GreyButtonProps {
  label: string;
  onClick: () => void;
}
export default function GreyButton({ label, onClick }: GreyButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}
