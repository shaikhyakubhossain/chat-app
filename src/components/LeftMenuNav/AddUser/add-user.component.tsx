'use client';
import { useState } from "react";
import { getUrl } from "@/utils/urls";
import Btn from "@/components/Btn/btn.component";
import Toast from "@/components/Toast/toast.component";

import { useDispatch } from "react-redux";
import { toggleFriendListRerender } from "@/lib/features/TriggerComponentRerender/triggerComponentRerender";

type propsType = {
    token: string | null
}

export default function AddUser(props: propsType): JSX.Element {

    const dispatch = useDispatch();

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
            dispatch(toggleFriendListRerender());
        })
    }

    return (
        <div className="flex my-auto">
            <Toast show={toast.show} message={toast.message} hide={() => setToast({ show: false, message: "" })} />
            <input onChange={(e) => setSearchUsername(e.target.value)} className='my-auto w-full h-10 text-black bg-[#F5F5F5] rounded-lg p-3 placeholder:text-[#707991] mx-1' type="text" placeholder='Add Friend' />
            <Btn onClick={handleSearch} customTW='h-10 bg-gray-50 dark:bg-gray-700 hover:bg-pink-800'>Add</Btn>
        </div>
    )
}