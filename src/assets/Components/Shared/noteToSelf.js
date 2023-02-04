import { globals } from "../Shared/globals";
const noteToSelf = function(myString) {
    if(globals.testing){
        console.log("note="+myString);
    }; 
}

export default noteToSelf;