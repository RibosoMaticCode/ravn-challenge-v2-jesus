import React from "react";

const Button = (props)=>{
  return( 
    <div className="btnCell">
      { !props.disabled &&
      <button onClick={props.onClick} disabled={props.disabled}>
        Load more
      </button>
      }
    </div>
  )
}

export default Button;