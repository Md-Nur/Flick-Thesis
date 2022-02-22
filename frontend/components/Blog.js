import React from "react";
import Link from "next/link";
import Image from "next/image";

function Blog() {
  return (
    <div>
      <div className="blogContainer md:grid md:grid-cols-3 md:gap-4">
        <div className="md:col-span-2">
          <h2 className="text-xl text-yellow-600 py-4 font-bold underline md:text-2xl">
            Latest
          </h2>
          <div className="singleBlog shadow hover:shadow-md sm:rounded md:rounded-md">
            <div className="card sm:grid sm:grid-cols-2 sm:gap-3 sm:content-center">
              <div className="imgCard">
                <Image
                  className="w-full h-64" height="16 rem" width="100 %"
                  src="https://source.unsplash.com/collection/1346951/500x500?sig=1"
                />
              </div>
              <div className="textCard content-center grid">
                <p className="text-yellow-600">Type</p>
                <Link href="" className="text-2xl font-bold hover:underline">
                  Title
                </Link>
                <p className="text-slate-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur officiis ad consequuntur a hic molestiae voluptatem
                </p>
                <p className="text-slate-500">
                  Author <span className="text-slate-400">Date</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="trendingBlog">
          <h2 className="text-xl py-4 text-yellow-600 font-bold underline md:text-2xl">
            Trending
          </h2>
          <div className="tredingItem sm:flex sm:justify-between sm:items-center md:block">
            <div className="singleBlog py-4">
              <div className="imgCard">
                <Image
                  className="w-full sm:64 md:w-full h-64"
                  src="https://source.unsplash.com/collection/1346951/500x500?sig=1"
                />
                <p className="text-yellow-600">Type</p>
                <Link href="" className="text-2xl font-bold hover:underline">
                  Title
                </Link>
                <hr />
              </div>
            </div>
            <div className="singleBlog">
              <div className="imgCard">
                <Image
                  className="w-full sm:w-64 md:w-full h-64"
                  src="https://source.unsplash.com/collection/1346951/500x500?sig=1"
                />
                <p className="text-yellow-600">Type</p>
                <Link href="" className="text-2xl font-bold hover:underline">
                  Title
                </Link>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;