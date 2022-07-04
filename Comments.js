import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Comments = () => {
  let navigate = useNavigate();

  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [cell, setCell] = useState('')
  const [cmnt, setCmnt] = useState('')

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
/*    e.preventDefault()

    if(!text){
        alert('Please add a task')
        return
    }

    onAdd({ text, day, reminder })

    alert('The Information has been successfully submited')

    setFname('')
    setLname('')
    setCell('')
    setCmnt('')*/
  

  return (
    <div className="newcomments"  onSubmit={onSubmit}>
        <label>Add Customer - Comments</label><br/>
        <p className="addComment">Additional Comments</p>
        <textarea name="commentArea" id="commentArea" cols="30" rows="10" placeholder='write comment' value={cmnt} onChange={(e) => setCmnt(e.target.value)} {...register("comment", {required: true, max: 20, min: 1, maxLength: 80})}></textarea>
        <button className="back-btn" onClick={() => {
          navigate("/address");
        }}>Back</button>
        <button type='submit' className="submit-btn" onClick={() => {
          navigate("/");
        }}>Submit</button>
    </div>
  )
}

export default Comments
