import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Newdetails = () => {
  let navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [cell, setCell] = useState('')


  return (
    <form className="newdetails" onSubmit={handleSubmit(onSubmit)}>
      <label>Add Customer - Details</label><br/>
      <p className="grey">First Name</p>
      <input type="text" name="firstName" id="firstName" placeholder="First Name" value={fname}  onChange={(e) => setFname(e.target.value)} {...register("First name", {required: true, max: 20, min: 1, maxLength: 80})} />
      <p className="grey">Last Name</p>
      <input type="text" name="lastName" id="lastName" placeholder="Last Name" value={lname}  onChange={(e) => setLname(e.target.value)} {...register("Last name", {required: true, max: 20, min: 1, maxLength: 80})} />
      <p className="grey">Cell phone</p>
      <input type="text" name="cellPhone" id="cellPhone" placeholder="Cell phone" value={cell}  onChange={(e) => setCell(e.target.value)} {...register("Cell phone", {required: true, minLength: 6, maxLength: 12})} />
      
      <button className="next-btn" onClick={() => {
          navigate("/address");
        }}>Next</button>
    </form>
  )
}

export default Newdetails;