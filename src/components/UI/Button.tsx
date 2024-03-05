type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  children: string;
  onClick?: () => void;
  className?: string;
};

const Button = ({ className, onClick, children }: ButtonProps) => {
  return (
    <button
      className={`bg-slate-500 text-white px-3 py-1 rounded-md ${className}`}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
