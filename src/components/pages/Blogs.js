import React from 'react'
import { Link, Outlet } from 'react-router-dom'


export default function Blogs() {
  return (
    <div className='componentStyle'>
      <Link to="newblog" className='subBlogItem'> NEW BLOGS</Link>
      <Link to="oldblog" className='subBlogItem'> OLD BLOGS</Link>
      <h1>Blogs Page</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam temporibus, sit ullam quaerat voluptate, maxime blanditiis deleniti fuga quae, ex ratione reiciendis alias pariatur quisquam inventore ut atque ipsum quod aut facilis adipisci quam laborum rerum sunt. Sequi labore quas deleniti fugiat error consequuntur at, cupiditate enim quidem voluptatem sed repudiandae. Nesciunt dolor tempora minima aliquid fuga harum pariatur corrupti officiis incidunt animi, nobis omnis vitae iusto, temporibus nihil ad! Sint eum labore molestiae id, alias odit ea sapiente perspiciatis porro quibusdam voluptas iure exercitationem voluptatum, voluptates aut cum! Maiores quod totam dolore. Perspiciatis ab cum rem! Delectus, cumque sapiente.</p>
      <Outlet/>
    </div>
  )
}
