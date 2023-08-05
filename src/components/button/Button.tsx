import "./Button.css";

interface ButtonProps {
  text: string;
  background: string;
  padding?: string;
  textColor?: string;
  borderRadius?: string
}
export default function Button({
  text,
  background,
  textColor,
  padding,
  borderRadius
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
    >
      {text}
    </button>
  );
}
