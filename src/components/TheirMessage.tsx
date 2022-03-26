import React from 'react'

const TheirMessage = ({ lastMessage, message }: any) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.userName !== message.sender.username
    return (
        <div className='message-row'>
            {isFirstMessageByUser && (
                <div className='message-avatar'
                    style={{ backgroundImage: `url(${message?.sender?.avatar})` }} />
            )}
            {message?.attachments?.length > 0
                ? (
                    <img src={message.attachments[0].file}
                        alt="message-attachment"
                        className='message-image'
                        style={{ float: 'right' }} />
                ) : (
                    <div className='message'
                        style={{
                            float: 'left', marginLeft: isFirstMessageByUser ? '4px' : '48px',
                            color: 'white', backgroundColor: '#CABCDC'
                        }}></div>
                )}
        </div>
    )
}
export default TheirMessage