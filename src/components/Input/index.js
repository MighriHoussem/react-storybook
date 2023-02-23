import "./style.css";

const Input = (props) => {

    const { id, size, placeholder } = props;


    return (
        <input
            type="text"
            className={`input ${size}`}
            placeholder={placeholder}
            id={id}
        />
    )
}

export default Input;