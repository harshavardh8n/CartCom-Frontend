import React from 'react'
import "./NewCard.css"

const NewCard = ({icon,cardname,carddesc}) => {
  return (
    <>
    <div class="card-container">
  <div class="cardu">
  <div class="front-content">
  {icon}
  <p>

  {cardname}
  </p>
  </div>
  <div class="content">
  <p>{carddesc}</p>
  </div>
</div>
</div>
    </>
  )
}

export default NewCard