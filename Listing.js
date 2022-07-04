import { useNavigate } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {FaAngleDown} from 'react-icons/fa';

const Listing = ({firstName, lastName, cellPhone}) => {
  let navigate = useNavigate();
  
/*
  const onSubmit = (e) => {
        e.preventDefault()
   if(!text){
    alert('Please add a task')
    return
}
  onAdd({ text, day, reminder })

  alert('The Information has been successfully submited')

  firstName('')   framework/sample to use
  lastName('')
  cellPhone(false) */

  return (
    <div>
      <hr />
      <label className='countCustomers'>All Customers</label>
      <button className="addCustomer" onClick={() => {
        navigate("/newdetails");
      }}>Add Customer</button>
      
      <table>
        <thead>
            <th>Name <FaAngleDown style={{float: 'right'}} /></th>
            <th>Surname  <FaAngleDown style={{float: 'right'}} /></th>
            <th>Cell Number  <FaAngleDown style={{float: 'right'}} /></th>
            <th>Action <FaAngleDown style={{float: 'right'}} /></th>
        </thead>
        <tbody>
            <td>John</td>
            <td>Doe</td>
            <td>012 345 6789</td>
            <td><Link to="details" className="more">Read more...</Link></td>
        </tbody>
        <tbody>
            <td>Jane</td>
            <td>Doe</td>
            <td>012 345 6780</td>
            <td><Link to="details" className="more">Read more...</Link></td>
        </tbody>
        <tbody>
            <td>Joe</td>
            <td>Smitt</td>
            <td>012 345 6785</td>
            <td><Link to="details" className="more">Read more...</Link></td>
        </tbody>
        <tbody>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{cellPhone}</td>
            <td><Link to="details" className="more">Read more...</Link></td>
        </tbody>
      </table>
    </div>
  )
}

export default Listing
