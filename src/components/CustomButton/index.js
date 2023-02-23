import "./style.css";

const Button = (props) => {

    const { label, handleClick, variant, ...rest } = props;


    return (
        <button
            className={`button ${variant}`}
            onClick={handleClick} {...rest}>
            {label}
        </button>
    )
}

export default Button;