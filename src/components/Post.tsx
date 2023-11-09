interface Content {
    type: "paragraph" | "link"
    content: string
}

interface Author {
    name: string
    role: string
    avatarUrl: string
}

export interface PostType {
    id: number
    author: Author
    publishedAt: string
    content: Content[]
}

interface PostProps {
    post: PostType
}

import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react"
import { Comment } from "./Comment"

export function Post({post} : PostProps ) {

    const [comments, setComments] = useState([
        'Muito bacana!',
    ])

    const [newCommentText, setNewCommentText] = useState('');

    function handleCreateNewComment(event: FormEvent) {
        event?.preventDefault()
        const newCommentContent = event?.target.comment.value;
        setComments([...comments, newCommentContent]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event?.target.setCustomValidity('')
        setNewCommentText(event?.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event?.target.setCustomValidity('Esse campo é obrigatório!')
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete;
        })
        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length == 0;

    return (
        <>
            <div className="flex flex-col gap-4 bg-gray-600 rounded-lg p-6">
                <header className="flex justify-between">
                    <div className="flex gap-4">
                        <img src={post.author.avatarUrl} className="w-[3rem] h-[3rem] object-cover object-top rounded-lg border-3 border-gray-700 outline outline-3 outline-green-500 rounded-t-lg box-content"/>
                        <div className="flex flex-col">
                            <strong className="text-white">{post.author.name}</strong>
                            <span className="text-gray-300 text-sm">{post.author.role}</span>
                        </div>
                    </div>
                    <div>
                        <time dateTime={post.publishedAt} title={post.publishedAt} className="text-gray-300 text-sm">{post.publishedAt}</time>
                    </div>
                </header>
                <div className="text-gray-200 text-base flex flex-col gap-4">
                   {post.content.map(item => {
                    if (item.type == 'paragraph') {
                        return (<p key={item.content}>{item.content}</p>)
                    } else {
                        return (<a href="#" key={item.content} className="hover:text-green-300">{item.content}</a>)
                    }
                   })}
                </div>
                <form onSubmit={handleCreateNewComment} className="flex flex-col gap-2 items-start border-t-[1px] border-gray-500 py-4 group">
                    <strong className="text-white text-base">Deixe seu feedback</strong>
                    <textarea 
                        onChange={handleNewCommentChange} 
                        value={newCommentText}
                        name="comment" 
                        placeholder="Deixe um comentário" 
                        required
                        onInvalid={handleNewCommentInvalid} 
                        className="h-[6rem] w-full rounded-lg bg-gray-700 p-1 px-2 text-sm text-white resize-none focus:outline focus:outline-2 focus:outline-green-300"
                    />
                    <div className="invisible max-h-0 group-focus-within:visible group-focus-within:max-h-full">
                        <input type="submit" value="Publicar" disabled={isNewCommentEmpty} className="bg-green-500 py-[1rem] px-[1.5rem] rounded-lg text-sm text-white cursor-pointer"/>
                    </div>
                </form>
                <div>
                    {comments.map(comment => {
                        return (
                            <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment}
                        />
                        )
                   })}
                </div>
            </div>
        </>
    )
}