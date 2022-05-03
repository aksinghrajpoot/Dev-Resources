import Styles1 from './Main.module.css'
import { useGetPosts } from "../../utils/swr/useRequest"
import Image from 'next/image'


export default function Main() {
    const { posts, error } = useGetPosts("/api/db_flat")

    if (error) return <div className='container'><h1>Something went wrong!</h1></div>
    if (!posts) return <div className='container'><h1>Loading...</h1></div>

    return <>
        <section className='display bg-gray-50 py-10 bg-[url("/images/site/background_1.jpg")] bg-cover bg-center'>
            <div className="container grid grid-cols-1 md:grid-cols-4 gap-4">

                {posts.map(post => (
                    <Articles post={post} key={post.name} />
                ))}

            </div>
        </section>
    </>
}


function Articles({ post }) {
    const { name, website, categories, description } = post
    return <>

        <div className=" card bg-white shadow-md shadow-violet-200  hover:shadow-xl ease-in-out duration-100 hover:shadow-violet-200  rounded-md ">
            <div id='card-thumb' className={`${Styles1.thumb} bg-white-100 card-thumb relative aspect-[4/2.1]`}>
                {/* <Image title={name} alt={name} src={`https://s0.wp.com/mshots/v1/https%3A%2F%2F${database.url}?w=1980&h=700`} layout="fill" objectFit="cover" /> */}
                <Image title={`this is name`} alt={`this is name`} src={`https://v1.screenshot.11ty.dev/https%3A%2F%2F${website}%0A/opengraph/smaller`} layout="fill" objectFit="cover" />
                <a href={`//${`this is website`}`} target='_'><button className="bg-green-600 bg-opacity-80 transition-all text-light hover:bg-beta hover:bg-opacity-75 hover:text-white py-[2px] px-3 text-[14px] absolute right-0 bottom-0 border border-gray-300">Preview</button></a>
            </div>
            <div className="card-body relative pt-2 p-5 md:p-4 border-t border-red-300">
                <h5 className="card-title external_link font-medium">{name}</h5>
                <p className="card-description text-sm text-gray-500">{description}</p>
                <div className="card-footer flex databases-center justify-between mt-2">
                    <span className="card-tags text-sm capitalize text-gray-500 inline-block">#{categories}</span>
                </div>
            </div>
        </div>

    </>

}
