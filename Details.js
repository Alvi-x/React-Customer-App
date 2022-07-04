const Details = ({firstName, lastName, cellPhone, physicalAddress, postalAddress, commentArea}) => {
  return (
    <div className="details">
      <label>Name: {firstName} {lastName}</label><br/>
        <p>Cell Number: {cellPhone}</p>
        <p>Physical Address: {physicalAddress}</p>
        <p>Postal Address: {postalAddress}</p>
        <p>Commment: {commentArea}</p>
    </div>
  )
}

export default Details
