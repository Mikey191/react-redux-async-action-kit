import { addManyCustomersAction } from "../store/customerReduser";


export const fetchCustomers = () => {
 return (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/users/")
    .then((response) => response.json())
    .then((json) => dispatch(addManyCustomersAction(json)));
 }
}