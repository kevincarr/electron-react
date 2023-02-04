import { globals } from "../Shared/globals";
const noteToSelf = function(myString) {
    if(globals.isTesting){
        console.log("note="+myString);
    }; 
}

export default noteToSelf;