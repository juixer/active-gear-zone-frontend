import { Helmet } from "react-helmet-async";

const HelmetElement = ({text} : {text : string}) => {
    return(
        <Helmet><title>Active Gear | {text}</title></Helmet>
    )}
export default HelmetElement;