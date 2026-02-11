import './Button.css';

interface IProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<IProps> = ({ children, onClick }) => {
  return (
    <button className={`button button--link`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
