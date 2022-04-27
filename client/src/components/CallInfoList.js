import React from "react";
const CallInfoList = (props) => {
    return (
        <div className="card border-primary my-2">
            <div className="card-header h3 bg-light text-primary">
                {props.title}
            </div>
            <div className="card-body">
                {props.callInfoList.length > 0 && props.callInfoList.map(info => {
                    return <p key={info.channelName}>{JSON.stringify(info)}</p>
                })}
            </div>
        </div>
    )

}

export default CallInfoList