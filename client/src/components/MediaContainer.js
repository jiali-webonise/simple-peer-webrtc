import React, { useEffect, useRef, useState } from 'react';

const MediaContainer = (props) => {
    const ref = useRef();
    const [show, setShow] = useState(true);

    useEffect(() => {
        props.peer.on("stream", stream => {
            ref.current.srcObject = stream;
        })

        props.peer.on("close", () => {
            setShow(false);
            // console.log("MediaContainer peer closing....");
            ref.current = null;
            // console.log("Video ref set to null....")
            props.peer.destroy();
            // console.log("MediaContainer peer destroyed....");
        })

        props.peer.on("connect", () => {
            // console.log("MediaContainer peer connected....")
            ref.current = props.peer;
        })

        props.peer.on('error', (err) => {
            console.error(`${JSON.stringify(err)} at MediaContainer error`);
            console.log("peer: ", props.peer);
        })

    }, [props.peer]);

    const peerVideoComponent = (
        <>
            <video className='video-style' playsInline autoPlay ref={ref} />
            <div className="card-body">
                <h5 className="card-title h5">Partner partnerID: </h5>
                <p className="card-text">{props.partnerID}</p>
            </div>
        </>)

    return (<>
        {show && peerVideoComponent}</>
    );
}

export default MediaContainer;