import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import NFTCard from "../components/NFTCard";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <Head>
                <title>BiMarketplace | Official Marketplace for BiGame</title>
                <meta
                    name="description"
                    content="This is the official Marketplace of BiGame - 1st game for everyone who want to earn money by playing games."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <div className="grid grid-cols-2 gap-x-3 bg-dark-secondary py-4 px-8 rounded-3xl items-center">
                    <div>
                        <h1 className="text-3xl font-bold leading-10">
                            The official Marketplace for BiGame
                        </h1>
                        <span className="my-5 block text-gray-400">
                            You can buy NFT hero below.
                        </span>
                        <div className="flex items-center">
                            <button className="mr-3 bg-blue-primary shadow-sm shadow-blue-400 rounded-full py-2 px-4 text-xs font-bold">
                                Buy now
                            </button>
                            <Link href="/buy/egg">
                                <a className="flex items-center text-blue-primary fill-blue-primary hover:text-white hover:fill-white rounded-full py-2 px-4 text-xs font-bold">
                                    Buy egg
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        id="Layer_1"
                                        data-name="Layer 1"
                                        viewBox="0 0 24 24"
                                        width={512}
                                        height={512}
                                        className="w-4 h-4 ml-1 "
                                    >
                                        <path d="M12,0C6.294,0,2,8.493,2,14a10,10,0,0,0,20,0C22,8.493,17.706,0,12,0Zm1,7a1,1,0,1,1,1,1A1,1,0,0,1,13,7Zm2.5,6A1.5,1.5,0,1,1,17,11.5,1.5,1.5,0,0,1,15.5,13Z" />
                                    </svg>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 items-center gap-x-5">
                        <div>
                            <img
                                alt=""
                                src="https://api-test.nft.marketplace.200lab.io/assets/pets/pets_7.png"
                                className="rounded-xl"
                            />
                            <div className="px-2 flex justify-between items-center mt-2">
                                <span className="text-blue-primary text-xs">
                                    #2348791347862
                                </span>
                                <span className="text-xs text-gray-400">
                                    Price
                                </span>
                            </div>
                            <div className="px-2 flex justify-between items-center mt-1">
                                <span className=" text-xs">Barley</span>
                                <span className="text-xs">1,321.32 BT</span>
                            </div>
                        </div>
                        <div>
                            <img
                                alt=""
                                src="https://api-test.nft.marketplace.200lab.io/assets/pets/pets_12.png"
                                className="rounded-xl"
                            />
                            <div className="px-2 flex justify-between items-center mt-2">
                                <span className="text-blue-primary text-xs">
                                    #2348791347862
                                </span>
                                <span className="text-xs text-gray-400">
                                    Price
                                </span>
                            </div>
                            <div className="px-2 flex justify-between items-center mt-1">
                                <span className=" text-xs">Wookie</span>
                                <span className="text-xs">1,321.32 BT</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12">
                    <h1 className="font-semibold">Explore all NFT</h1>
                    <div className="grid grid-cols-4 mt-4 gap-x-5">
                        <NFTCard
                            id="#2348791347862"
                            name="Barley"
                            price="1,321.32 BT"
                            image="https://api-test.nft.marketplace.200lab.io/assets/pets/pets_6.png"
                        />
                        <NFTCard
                            id="#2348791347862"
                            name="Barley"
                            price="1,321.32 BT"
                            image="https://api-test.nft.marketplace.200lab.io/assets/pets/pets_7.png"
                        />
                        <NFTCard
                            id="#2348791347862"
                            name="Barley"
                            price="1,321.32 BT"
                            image="https://api-test.nft.marketplace.200lab.io/assets/pets/pets_8.png"
                        />
                        <NFTCard
                            id="#2348791347862"
                            name="Barley"
                            price="1,321.32 BT"
                            image="https://api-test.nft.marketplace.200lab.io/assets/pets/pets_9.png"
                        />
                    </div>
                    <div className="w-full text-center mt-12">
                        <button className="bg-blue-primary shadow-sm rounded-full py-2 px-4 text-xs font-bold">
                            Load more
                        </button>
                    </div>
                </div>
            </Layout>
        </div>
    );
}
