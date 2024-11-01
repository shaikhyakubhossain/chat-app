export default function Greetings(): JSX.Element {

    return (
        <div className="flex flex-col h-dvh justify-center items-center border-2 border-slate-300">
            <span className='text-4xl font-bold text-slate-600'>Welcome</span>
            <span className='text-2xl font-bold text-slate-400'>Select a chat to start messaging</span>
        </div>
    )
}