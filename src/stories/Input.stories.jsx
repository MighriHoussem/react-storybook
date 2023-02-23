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