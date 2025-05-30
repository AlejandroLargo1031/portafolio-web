import Link from "next/link";

interface ButtonProps {

  link: string;

  text: string;

  className?: string;

}



const Button: React.FC<ButtonProps> = ({ link, text, className }) => {

  return (

    <Link href={link} className={className}>
      {text}
    </Link>

  );

};



export default Button;
