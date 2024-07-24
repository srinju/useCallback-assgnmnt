//create a component with a text input field and a button . the goal is to display an alert with the text entered when the button is clicked , use useCallback to memoize the event ,
//handler function that triggers the alert, ensuring its not recreated on every render.

import React , {useState , useCallback} from "react";

export function Assignement2() {
    const [inputText , setInputText] = useState('');

    const showAlert = useCallback(() => {
        alert(inputText);
    },[inputText]);

    return (
        <div>
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter Some Text"
            />
            <Alert showAlert={showAlert} />
        </div>
    )
}

function Alert({showAlert}) {
    return <div>
        <button style={{margin:10}} onClick={showAlert}>Show Alert</button>
    </div>
}