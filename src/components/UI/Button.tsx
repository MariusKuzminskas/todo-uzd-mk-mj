type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  children: string;
  onClick?: () => void;
  className?: string;
};

const Button = ({ className, onClick, children }: ButtonProps) => {
  return (
    <button
      className={`text-white border px-3 py-1 rounded-md ${
        className?.includes('bg-') ? className : 'bg-slate-400'
      }`}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
