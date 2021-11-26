import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
const posts = [
  {
    title: "React Testing",
    excerpt: "Learn React Testing",
  },
  {
    title: "React Tugo",
    excerpt: "Learn React Testing",
  },
  {
    title: "React Sika",
    excerpt: "Learn React Testing",
  },
];
export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-10">
      <Head>
        <title>Akud Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-gray-300">
        {posts.map((post, index) => (
          <div key={index}>
            {post.title}
            {post.excerpt}
          </div>
        ))}
      </div>
    </div>
  );
}
