import React from 'react'
import { IntrinsicElementsKeys } from 'styled-components'
import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'

interface IComponentProps {
    chats?: any
    activeChat?: any
    userName?: any
    messages?: any
}

const ChatFeed: React.FC<IComponentProps> = (props: any) => {
    const { chats, activeChat, userName, messages } = props

    const chat = chats && chats[activeChat]
    console.log(chat, userName, messages)

    const renderReadReceipts = (message: any, isMyMessage: any) => {
        return chat.people.map((person: { last_read: any }, index: any) => person.last_read === message.id && (
            <div key={`read_${index}`}
                className='read-receipt'
                style={{
                    float: isMyMessage ? 'right' : 'left',
                    backgroundImage: `person.person.avatar && url(${message?.sender?.avatar})`
                }} />
        ))
    }

    const renderMessages = () => {
        const keys = Object.keys(messages)
        console.log(keys)
        return keys.map((key, index) => {
            const message: any | [] = messages[key]
            const lastMessageKey: any = index === 0 ? null : keys[index - 1]
            const isMyMessage = userName === message.sender.username

            return (
                <div key={`msg_${index}`} style={{ width: '100%' }}>
                    <div className='message-block'>
                        {isMyMessage
                            ? <MyMessage message={message} />
                            : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />}
                    </div>
                    <div
                        className='read-receipts'
                        style={{
                            marginRight: isMyMessage ? '18px' : '0px',
                            marginLeft: isMyMessage ? '0px' : '68px'
                        }}>
                        {renderReadReceipts(message, isMyMessage)}
                    </div>
                </div>
            )
        })
    }

    renderMessages()
    if (!chat) return <p>Loading ...</p>

    return (
        <div className='chat-feed'>
            <div className='chat-title-container'>
                <div className='chat-title'>
                    {chat?.title}
                </div>
                <div className='chat-subtitle'>
                    {chat?.people.map((person: any) => `${person.person.userName}`)}
                </div>
                {renderMessages()}
                <div style={{ height: '100px' }} />
                <div className='message-form-container'>
                    <MessageForm {...props} chatId={activeChat} />
                </div>
            </div>
        </div>
    )
}
export default ChatFeed