import './Button.css';

interface IProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'primary' | 'secondary' | 'bordered';
  className?: string;
}

const selectClassName = (type: 'primary' | 'secondary' | 'bordered') => {
  switch (type) {
    case 'primary':
      return 'button button--primary';
    case 'secondary':
      return 'button button--secondary';
    case 'bordered':
      return 'button button--bordered';
  }
};

const Button: React.FC<IProps> = ({ children, onClick, className, type = 'primary' }) => {
  return (
    <button className={`${selectClassName(type)} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
