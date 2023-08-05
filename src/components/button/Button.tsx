import "./Button.css";

interface ButtonProps {
  text: string;
  background: string;
  padding?: string;
  textColor?: string;
  borderRadius?: string
  onClick?: () => void;
}
export default function Button({
  text,
  background,
  textColor,
  padding,
  borderRadius, 
  onClick
}: ButtonProps) {
  return (
    <button
      style={{
        background,
        padding: padding || "12px 22px 13px 22px",
        color: textColor || "white",
        borderRadius: borderRadius || "5px",
      }}
      className="app-button"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
