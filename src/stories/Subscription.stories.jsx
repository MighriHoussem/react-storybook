import { Success } from "./CustomButton.stories";
import { MidiumInput } from "./Input.stories";

import "../index.css";


export default {
    title: "Form/Subscription"
};

export const SucessSubscription = (props) => {

    return (
        <>
            <div className={"wrapperDiv"}>
                <div className={"divInput"}>
                    <MidiumInput
                        id={"subs-input"}
                        placeholder={"Midium Input"}
                        size={"midium"}
                        handleChange={(event) => { console.log(event.target.value) }}
                    />
                </div>
                <div className={"divButton"}>
                    <Success
                        label={"Subscribe"}
                        handleClick={(event) => { console.log('clicked') }}
                    />
                </div>
            </div>
        </>
    )
} 