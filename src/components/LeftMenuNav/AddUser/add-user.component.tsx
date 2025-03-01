'use client';
import { useState } from "react";
import { getUrl } from "@/utils/urls";
import Btn from "@/components/Btn/btn.component";
import Toast from "@/components/Toast/toast.component";

type propsType = {
    token: string | null
}

export default function AddUser(props: propsType): JSX.Element {

    const [searchUsername, setSearchUsername] = useState<string>("");
    const [toast, setToast] = useState({ show: false, message: "" });

    const handleSearch = () => {
        if(searchUsername === "") {
            return;
        }
        // console.log(props.token);
        fetch(`${getUrl()}/add-friend`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `bearer ${props.token}`
            },
            body: JSON.stringify({
                searchUsername
            })
        }).then(res => res.json()).then(data => {
            setToast({ show: true, message: data.message });
        })
    }

    return (
        <div className="flex my-auto">
            <Toast show={toast.show} message={toast.message} hide={() => setToast({ show: false, message: "" })} />
            <input onChange={(e) => setSearchUsername(e.target.value)} className='my-auto w-28 h-6 text-black bg-slate-200 rounded-lg p-3 placeholder:text-black mx-1' type="text" placeholder='Add Friend' />
            <Btn onClick={handleSearch} customTW='bg-gray-50 dark:bg-gray-700 hover:bg-pink-800'>Add</Btn>
        </div>
    )
}