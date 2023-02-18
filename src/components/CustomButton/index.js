

const Button = (props) => {

    const { label, handleClick, variant, ...rest } = props;


    return (
        <button className={`btn btn-${variant}`} onClick={handleClick} {...rest}>
            {label}
        </button>
    )
}

export default Button;