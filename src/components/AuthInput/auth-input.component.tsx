"use client";
import { useState } from 'react';
import styles from './auth-input.module.scss';
import Btn from '../Btn/btn.component';

type dataToSendType = {
    username: string,
    password: string,
    confirmPassword?: string,
}

type propsType = {
    type: string | null,
    submit: ({username, password}: dataToSendType) => void,
    error?: string | null,
    isLoading: boolean
}

const AuthInput = (props: propsType) => {

    const [dataToSend, setDataToSend] = useState<dataToSendType>({username: '', password: '', confirmPassword: ''});

    const handleSubmit = () => {
        if(props.type === 'login'){
            props.submit(dataToSend);
        }
        else if(props.type === 'register' && dataToSend.password === dataToSend.confirmPassword && dataToSend.password.length > 5 && dataToSend.username !== ""){
            props.submit(dataToSend);
        }
    }

    return (
        <div className={styles.authInputContainer}>
            {
                props.type === 'login' ? <div className='text-3xl text-center mx-auto mt-2'>Login</div> : <div className='text-3xl text-center mx-auto mt-2'>Register</div>
            }
            <div className={`${styles.textFieldContainer}`}>
                    <div className="my-4">
                        <label className="block my-1 text-sm font-medium text-gray-900">Username</label>
                        <input onChange={(e) => setDataToSend({...dataToSend, username: e.target.value})} type="text" id="username" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="username" required />
                    </div> 
                    <div className={`${props.error ? 'block' : 'hidden'} text-red-800`}>{props.error}</div>
                    <div className={`${props.isLoading ? 'block' : 'hidden'} text-green-800`}>Loading</div>
                    <div className="my-4">
                        <label className="block my-1 text-sm font-medium text-gray-900">Password</label>
                        <input onChange={(e) => setDataToSend({...dataToSend, password: e.target.value})} type="password" id="password" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="password" required />
                    </div> 
                    <div className={`${dataToSend.password.length <= 5 && props.type === 'register' && dataToSend.password !== "" ? 'block' : 'hidden'} text-red-800`}>Password must be at least 6 characters</div>
                    {
                        props.type === 'register' && (
                        <>
                        <div className="my-4">
                            <label className="block my-1 text-sm font-medium text-gray-900">Confirm password</label>
                            <input onChange={(e) => setDataToSend({...dataToSend, confirmPassword: e.target.value})} type="password" id="confirm_password" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="confirm password" required />
                        </div>
                        <div className={`${dataToSend.password !== dataToSend.confirmPassword && props.type === 'register' && dataToSend.confirmPassword !== "" ? 'block' : 'hidden'} text-red-800`}>Passwords do not match</div>
                        </>
                        )
                    }
                </div>
                <div className='flex justify-center'>
                <Btn customTW='bg-pink-500' onClick={handleSubmit}>{props.type === 'login' ? 'Login' : 'Register'}</Btn>
            </div>
        </div>
    )
}

export default AuthInput;