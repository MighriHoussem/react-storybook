import Input from "../components/Input";


export default {
    title: "Input",
    component: Input,
    argTypes: {
        size: {
            options: ["small", "midium", "large"],
            control: {
                type: "radio"
            },
        }
    }
};

export const DefaultInput = {
    component: Input,
    title: "Default Input",
    argTypes: {
        size: {
            options: ['small', 'midium', 'large'],
            control: {
                type: 'select'
            }
        },
        placeholder: {
            options: [],
            control: {
                type: 'text'
            },
        },
        id: {
            options: [],
            control: {
                type: 'text'
            }
        },
        handleChange: {
            action: 'clicked',
        }
    }
};

export const SmallInput = (props) => <Input
    id={"smallInput"}
    size={"small"}
    placeholder={"Small"}
/>

export const MidiumInput = () => <Input
    id={"midiumInput"}
    size={"midium"}
    placeholder={"Midium"}
/>

export const LargeInput = () => <Input
    id={"largeInput"}
    size={"large"}
    placeholder={"Large"}
/>