import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      name: "Gabriel Gonçalves",
      avatarUrl: "https://github.com/gabrielsilva13.png",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa ✌" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "👉 jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2022-06-23 10:27:00"),
  },
  {
    id: 2,
    author: {
      name: "John Doe",
      avatarUrl: "https://github.com/maykbrito.png",
      role: "CEO",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa ✌" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "👉 jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2022-06-23 10:27:00"),
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={{
                  name: post.author.name,
                  avatarUrl: post.author.avatarUrl,
                  role: post.author.role,
                }}
                publishedAt={post.publishedAt}
                content={post.content}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
