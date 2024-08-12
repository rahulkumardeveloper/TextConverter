import React from 'react';

export default function Alert(props) {

  const captalizeType = (type) => {
    return type.toLowerCase().charAt(0).toUpperCase() + type.slice(1);
  }


  return (
    <div>
      {props.alert &&
        <div className={`alert alert-${props.alert.type}`} role="alert">
          <strong> {captalizeType(props.alert.type)}</strong> : {props.alert.massage}.
        </div>
      }
    </div>
  );
}
