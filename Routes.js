import { BrowserRouter, Route, Switch } from "react-router-dom";
import Listing from "./Listing";
import Details from "./Details";
import NewCustomerAddress from "./NewCustomerAddress";
import NewCustomerDetails from "./NewCustomerDetails";
import NewCustomerComments from "./NewCustomerComments";

const Routes = () => {
    return(
        <BrowserRouter>
        <Route path="/" component={Listing} />
        <Route path="/Details" component={Details} />
        <Route path="/NewCustomerAddress" component={NewCustomerAddress} />
        <Route path="/NewCustomerDetails" component={NewCustomerDetails} />
        <Route path="/NewCustomerComments" component={NewCustomerComments} />
        </BrowserRouter>
    );
};
export default Routes;