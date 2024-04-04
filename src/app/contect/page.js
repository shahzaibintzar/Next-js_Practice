import React from 'react'
import Card from '../(components)/Card/card'
import Header from '../(components)/header/header'
import Footer from '../(components)/footer/footer'


const fetchPosts = async () =>{
  let res = await fetch('http://localhost:3000/API/post',{ cache: 'no-store' });
  res = await res.json();
  return res
}
export default async function contect() {
  const posts = await fetchPosts();
  console.log('posts', posts)
  return (
    <div>
    <h1>posts</h1>
    {posts.map((item, i) =>{
      return(
        <table>
        <tr>
        <th>ID</th>
        <th>TITLE</th>
        <th>DISCRIPTION</th>
        </tr>
        <tr key={i}>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.description}</td>
        </tr>
        </table>
        // <div key={id}>
        // <h1>post id == {item.id}</h1>
        // <h1>post title == {item.title}</h1>
        // <h1>post body == {item.description}</h1>
        // </div>
      )
    })}

    <Card />
    <Header />
    <Footer />
    </div>

  )
}
