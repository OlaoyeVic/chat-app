import React from 'react'
import { SendOutlined, PictureOutlined } from '@ant-design/icons'
import { sendMessage, isTyping } from 'react-chat-engine'

const MessageForm = (props: { chatId: any; creds: any }) => {
    const [value, setValue] = React.useState('')
    const { chatId, creds } = props

    const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setValue(event.target.value)
        isTyping(props, chatId)
    }

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        const text = value.trim()
        if (text.length > 0) sendMessage(creds, chatId, { text })

        setValue('')
    }

    const handleUpload = (event: { target: { files: any; }; }) => {
        sendMessage(creds, chatId, { files: event.target.files, text: '' })
    }

    return (
        <form className='message-form' onSubmit={handleSubmit}>
            <input className='message-input'
                placeholder='send a message'
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <label htmlFor='upload-button'>
                <span className='image-button'>
                    <PictureOutlined className='picture-icon' />
                </span>
            </label>
            <input id='upload-button'
                type='file'
                multiple={false}
                style={{ display: 'none' }}
                onChange={handleUpload}
            />
            <button type='submit' className='send-button'>
                <SendOutlined className='send-icon' />
            </button>
        </form>
    )
}
export default MessageForm