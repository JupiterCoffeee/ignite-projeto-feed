import { Navbar } from "./components/Navbar";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=50&w=900&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Leslie Alexander',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: '2023-30-10 10:00:00'
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=50&w=900&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Jane Cooper',
      role: 'UI Designer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 '},
      { type: 'link', content: 'janecooper.design'},
    ],
    publishedAt: '2023-28-10 13:00:00'
  },
]

export function App() {
  return (
    <>
      <Navbar />
      <div className="grid md:grid-cols-[16rem_minmax(0px,_1fr)_0px] gap-4 mt-6 px-6">
        <Sidebar />
        <div className="flex flex-col gap-4">
            {posts.map(item => {
              return (
                <Post
                  key={item.id}
                  post={item}
                />
              )
            })}
        </div>
      </div>
    </>
  )
}