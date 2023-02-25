import "./style.css";

const Input = (props) => {

    const { id, size, placeholder, handleChange } = props;


    return (
        <input
            type="text"
            className={`input ${size}`}
            placeholder={placeholder}
            id={id}
            onChange={handleChange}
        />
    )
}

export default Input;