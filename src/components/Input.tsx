import { InputHTMLAttributes, useState } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    error?: string;
};

const Input = ({ label, error, ...rest }: InputProps) => {
    const [focus, setFocus] = useState(false);

    const handleFocus = () => {
        setFocus(true);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { value } = e.target;

        if (!value.length) {
            setFocus(false);
        }
    };

    return (
        <>
            <div className="container-input">
                <div className="input-form">
                    <input onFocus={handleFocus} onBlur={handleBlur} className="input" {...rest} />
                    <label className={`label ${focus && 'toggle-focus'}`} htmlFor="">
                        {label}
                    </label>
                </div>
                {error && <span className="error">{error}</span>}
            </div>
        </>
    );
};

export default Input;
