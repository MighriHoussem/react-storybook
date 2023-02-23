import Button from "../components/CustomButton";
import CustomButton from "../components/CustomButton";


export default {
    title: 'Custom Button',
    component: CustomButton,
};

export const ButtonDefault = {
    argTypes: {
        variant: {
            options: ['primary', 'secondary', 'success', 'danger'],
            control: { type: 'radio' },
        },
        label: {
            value: "Button",
            options: ['Primary', 'Secondary', 'Success', 'Danger'],
            control: { type: 'text' }
        }
    },
};


export const Primary = () => <Button variant="primary" label={"Primary"} />;
export const Secondary = () => <Button variant={"secondary"} label={"Secondary"} />
export const Success = () => <Button variant={"success"} label={"Success"} />
export const Danger = () => <Button variant={"danger"} label={"Danger"} />

