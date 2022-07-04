import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';

const Address = () => {
  let navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="newaddress" onSubmit={handleSubmit(onSubmit)}>
      <label>Add Customer - Addresses</label><br/>
      <p className="physicalAddress">Physical Address</p>
      <input type="text" name="street" id="street" placeholder="street" {...register("street", {required: true, max: 20, min: 1, maxLength: 80})} />
      <input type="text" name="province" id="province" placeholder="province" {...register("province", {required: true, max: 20, min: 1, maxLength: 80})} />
      <input type="text" name="country" id="country" placeholder="country" {...register("country", {required: true, max: 20, min: 1, maxLength: 80})} />
      <input type="number" name="postalCode" id="postalCode" placeholder="postalCode" {...register("postalCode", {required: true, max: 20, min: 1, maxLength: 80})} /><br/>
      <p className="postalAddress">Postal Address</p>
      <input type="text" name="street" id="street" placeholder="street" {...register("street", {required: true, max: 20, min: 1, maxLength: 80})} />
      <input type="text" name="province" id="province" placeholder="province" {...register("province", {required: true, max: 20, min: 1, maxLength: 80})} />
      <input type="text" name="country" id="country" placeholder="country" {...register("country", {required: true, max: 20, min: 1, maxLength: 80})} />
      <input type="number" name="postalCode" id="postalCode" placeholder="postalCode" {...register("postalCode", {required: true, max: 20, min: 1, maxLength: 80})} />

      <button className="back-btn" onClick={() => {
          navigate("/newdetails");
        }}>Back</button>
      <button className="next-btn" onClick={() => {
          navigate("/comments");
        }}>Next</button>
    </div>
  )
}

export default Address;
