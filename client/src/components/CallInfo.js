import React from "react";
const CallInfo = (props) => {
    return (
        <div className="card border-primary my-2">
            <div className="card-header h3 bg-light text-primary">
                {props.title}
            </div>
            <div className="card-body">
                {Object.entries(props.callInfo).map(el => <p className="card-text" key={el[0]}>{el[0]}: {String(el[1])} </p>)}
            </div>
        </div>
    )

}

export default CallInfo;