import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/Layout";

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
                <div
                    href="#"
                    className="flex flex-col items-center rounded-lg border shadow-md md:flex-row  border-gray-700 bg-gray-800 hover:bg-gray-800"
                >
                    <img
                        className="object-cover h-auto rounded-t-lg md:h-auto md:w-96 md:rounded-none md:rounded-l-lg"
                        src="/assets/images/eggs/egg1.png"
                        alt=""
                    />
                    <div className="flex flex-col ml-6 justify-between p-4 leading-normal">
                        <h5 className="mb-2 tracking-tight text-blue-primary font-semibold">
                            An egg
                        </h5>
                        <h5 className="mb-3 font-bold text-white text-3xl">
                            Super hero egg
                        </h5>
                        <p className="text-gray-400 font-normal">
                            This is the site to help you buy superhero eggs.
                            This egg can unlock one of the super powerful
                            heroes. Buy and try your luck now!
                        </p>
                        <div className="mt-4">
                            <div className="text-blue-primary">
                                Current price
                            </div>
                            <div className="text-2xl font-semibold mt-3">
                                1,000BT
                            </div>
                            <button className="mr-3 mt-5 bg-blue-primary shadow-sm shadow-blue-400 rounded-full py-1 px-3 border-2 border-blue-primary text-sm font-semibold">
                                Buy now
                            </button>
                            <button className="mr-3 mt-5 shadow-sm text-blue-primary shadow-blue-400 rounded-full py-1 px-3 border-2 border-blue-primary text-sm font-semibold">
                                More offer
                            </button>
                        </div>
                        <div className="text-gray-400 mt-3">
                            Sale ends january 01,2099
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
}
