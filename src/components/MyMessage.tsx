import React from "react";

const MyMessage = ({ message }: any) => {
    if (message?.attachments?.length > 0) {
        return (
            <img
                src={message.attachments[0].file}
                alt="message.attachment"
                style={{ float: "right" }}
                className="message-image" />
        )
    }
    return (
        <div className="message-style"
            style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>
            {message.text}
        </div>
    )
}
export default MyMessage