import React from 'react'
import axios from 'axios'

const LoginForm = () => {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')

    const handleSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault()
        const authObject = {
            'PROJECT-ID': "c1cb2bbc-9444-4f4c-af62-e7dcb4f62497",
            'User-Name': "Vickstar",
            'User-Secret': "victor"
        }
        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject })

            localStorage.setItem('username', username)
            localStorage.setItem('password', password)

            window.location.reload()
        }
        catch {
            setError('Oops, Incorrect Credentials')
        }
    }
    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Chat App</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text'
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        className='input'
                        placeholder='username'
                        required />
                    <input type='text'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className='input'
                        placeholder='password'
                        required />
                    <div style={{ textAlign: 'center' }}>
                        <button type='submit' className='button'>
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className='error'>{error}</h2>
                </form>
            </div >
        </div >
    )
}
export default LoginForm