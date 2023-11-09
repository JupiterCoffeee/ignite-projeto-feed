import { Trash } from "phosphor-react";
import { useState } from 'react'

interface commentProps {
    content: string
    onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment } : commentProps ) {

    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
    }

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    return (
        <>
            <div className="flex gap-3 w-full">
                <div>
                    <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=50&w=900&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-[3.125rem] h-[3.125rem] object-cover object-top rounded-lg outline-green-500 rounded-t-lg box-content"/>
                </div>
                <div className="w-full">
                    <div className="bg-gray-450 flex flex-col gap-2 p-3 py-4  rounded-lg">
                        <header className="flex w-full justify-between items-start">
                            <div className="flex flex-col">
                                <strong className="text-white text-base">Janny Wilson</strong>
                                <time className="text-gray-300 text-sm">Cerca de 2h atrás</time>
                            </div>
                            <button title="Apagar" onClick={handleDeleteComment} className="text-gray-300 hover:text-red-300">
                                <Trash />
                            </button>
                        </header>
                        <div className="text-white text-sm">
                            <p>{content}</p>
                        </div>
                    </div>
                    <button className="text-sm py-2" onClick={handleLikeComment}>
                        <p className="text-gray-300 cursor-pointer hover:text-green-300">Aplaudir &#9725; {likeCount}</p>
                    </button>
                </div>
            </div>
        </>
    )
}