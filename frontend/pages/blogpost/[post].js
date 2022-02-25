import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import Image from "next/image";
const Post = () => {
  const router = useRouter();
  const { post } = router.query;

  return (
    <main className="px-1 sm:px-9 md:px-12">
      <div className="blogContainer md:grid md:grid-cols-3 md:gap-10">
        <div className="md:col-span-2">
          <h2 className="text-xl text-yellow-600 py-4 font-bold underline md:text-2xl">
            Latest
          </h2>
          <div className="singleBlog bg-white shadow hover:shadow-md sm:rounded md:rounded-md">
            <div className="card m-5 p-5">
              <div className="imgCard">
                <Image
                  className=""
                  height={2}
                  width={3}
                  layout="responsive"
                  src="https://source.unsplash.com/collection/1346951/500x500?sig=1"
                />
              </div>
              <div className="textCard content-center grid">
                <div className="text-2xl font-bold hover:underline">{post}</div>
                <p className="text-yellow-600">Type</p>
                <p className="text-slate-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quas debitis facilis est excepturi quisquam aliquam cum, aspernatur repudiandae aliquid quo, nihil ducimus adipisci? Similique est consequuntur unde tempore magni, quae repudiandae esse, reprehenderit a voluptatum sequi doloremque maxime eaque nihil exercitationem magnam beatae corporis eum. Assumenda sint officiis et. officiis ad consequuntur a hic molestiae voluptatem
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
          <div className="tredingItem md:block">
            <div className="singleBlog bg-white sm:rounded md:rounded-md pb-6">
              <div className="imgCard">
                <Image
                  className=""
                  height={2}
                  width={3}
                  layout="responsive"
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
              <div className="imgCard bg-white">
                <Image
                  className=""
                  height={2}
                  width={3}
                  layout="responsive"
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
    </main>
  );
};

export default Post;
