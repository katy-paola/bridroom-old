import type { ButtonHTMLAttributes } from 'react';
import type { IconName } from './Icon/constants';
import Icon from './Icon';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary';
    icon?: IconName;
};

const Button = ({ variant = 'primary', children, icon, ...rest }: ButtonProps) => {
    return (
        <button className={`button button--${variant}`} {...rest}>
            {icon && <Icon name={icon} size="sm" />}
            {children}
        </button>
    );
};

export default Button;
