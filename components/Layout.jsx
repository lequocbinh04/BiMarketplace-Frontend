import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    MenuIcon,
    UsersIcon,
    XIcon,
    PlusSmIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
const navigation = [
    { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
    { name: "Team", href: "#", icon: UsersIcon, current: false },
    { name: "Projects", href: "#", icon: FolderIcon, current: false },
    { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
    { name: "Documents", href: "#", icon: InboxIcon, current: false },
    { name: "Reports", href: "#", icon: ChartBarIcon, current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Layout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="fixed inset-0 flex z-40 md:hidden"
                        onClose={setSidebarOpen}
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                        </Transition.Child>
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                                        <button
                                            type="button"
                                            className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                            onClick={() =>
                                                setSidebarOpen(false)
                                            }
                                        >
                                            <span className="sr-only">
                                                Close sidebar
                                            </span>
                                            <XIcon
                                                className="h-6 w-6 text-white"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                                    <div className="flex-shrink-0 flex items-center px-4">
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                                            alt="Workflow"
                                        />
                                    </div>
                                    <nav className="mt-5 px-2 space-y-1">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? "bg-gray-900 text-white"
                                                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                    "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                                                )}
                                            >
                                                <item.icon
                                                    className={classNames(
                                                        item.current
                                                            ? "text-gray-300"
                                                            : "text-gray-400 group-hover:text-gray-300",
                                                        "mr-4 flex-shrink-0 h-6 w-6"
                                                    )}
                                                    aria-hidden="true"
                                                />
                                                {item.name}
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                                <div className="flex-shrink-0 flex bg-gray-700 p-4">
                                    <a
                                        href="#"
                                        className="flex-shrink-0 group block"
                                    >
                                        <div className="flex items-center">
                                            <div>
                                                <img
                                                    className="inline-block h-10 w-10 rounded-full"
                                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-base font-medium text-white">
                                                    Tom Cook
                                                </p>
                                                <p className="text-sm font-medium text-gray-400 group-hover:text-gray-300">
                                                    View profile
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </Transition.Child>
                        <div className="flex-shrink-0 w-14">
                            {/* Force sidebar to shrink to fit close icon */}
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden md:flex md:w-[17rem] md:flex-col md:fixed md:inset-y-0">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex-1 flex flex-col min-h-0 bg-transparent">
                        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto no-scrollbar">
                            <div className="flex items-center flex-shrink-0 px-4">
                                <Link href="/">
                                    <a>
                                        <img
                                            className="h-12 w-auto cursor-pointer"
                                            src="/assets/images/logo.svg"
                                            alt=""
                                        />
                                    </a>
                                </Link>
                            </div>
                            <nav className="mt-8 flex-1 px-4 ">
                                <button className="w-full mb-8 bg-dark-secondary rounded-2xl px-5 py-5 relative hover:shadow-md hover:shadow-blue-900 transition-all duration-300">
                                    <div className="flex items-center">
                                        <div className="bg-blue-primary bg-opacity-30 rounded-lg p-1 mr-3">
                                            <PlusSmIcon className="h-5 font-bold text-blue-primary" />
                                        </div>
                                        <span className="text-sm font-semibold">
                                            Buy BiToken (BT)
                                        </span>
                                    </div>
                                    <div
                                        className="w-[50%] bg-blue-primary rounded-full absolute bottom-0"
                                        style={{
                                            left: "50%",
                                            transform: "translate(-50%, 100%)",
                                            height: "0.20rem",
                                        }}
                                    />
                                </button>
                                <div className="bg-dark-secondary mb-8 rounded-2xl px-5 py-4 relative text-[#827D9D]">
                                    <span className="uppercase text-blue-primary text-xs font-bold">
                                        market place
                                    </span>
                                    <button className="mt-4 flex items-center hover:ml-2 transition-all duration-300">
                                        <img
                                            src="/assets/icons/svg/Dashboard.svg"
                                            className="h-4"
                                        />
                                        <span className="ml-3 text-sm ">
                                            Marketplace
                                        </span>
                                    </button>
                                    <button className="mt-3 flex items-center hover:ml-2 transition-all duration-300">
                                        <img
                                            src="/assets/icons/svg/Chart.svg"
                                            className="h-4"
                                        />
                                        <span className="ml-3 text-sm ">
                                            Stats
                                        </span>
                                    </button>
                                    <button className="mt-3 flex items-center hover:ml-2 transition-all duration-300">
                                        <img
                                            src="/assets/icons/svg/Paper.svg"
                                            className="h-4"
                                        />
                                        <span className="ml-3 text-sm">
                                            Resources
                                        </span>
                                    </button>
                                    <div
                                        className="w-[50%] bg-blue-primary rounded-full absolute bottom-0"
                                        style={{
                                            left: "50%",
                                            transform: "translate(-50%, 100%)",
                                            height: "0.20rem",
                                        }}
                                    />
                                </div>
                                <div className="bg-dark-secondary rounded-2xl px-5 py-4 relative text-[#827D9D]">
                                    <span className="uppercase text-blue-primary text-xs font-bold">
                                        filter
                                    </span>
                                    <button className="mt-4 flex items-center hover:ml-2 transition-all duration-300">
                                        <img
                                            src="/assets/icons/svg/Dashboard.svg"
                                            className="h-4"
                                        />
                                        <span className="ml-3 text-sm ">
                                            Status
                                        </span>
                                    </button>
                                    <button className="mt-3 flex items-center hover:ml-2 transition-all duration-300">
                                        <img
                                            src="/assets/icons/svg/Chart.svg"
                                            className="h-4"
                                        />
                                        <span className="ml-3 text-sm ">
                                            Price
                                        </span>
                                    </button>
                                    <button className="mt-3 flex items-center hover:ml-2 transition-all duration-300">
                                        <img
                                            src="/assets/icons/svg/Paper.svg"
                                            className="h-4"
                                        />
                                        <span className="ml-3 text-sm">
                                            Created at
                                        </span>
                                    </button>
                                    <button className="mt-3 flex items-center hover:ml-2 transition-all duration-300">
                                        <img
                                            src="/assets/icons/svg/More Circle.svg"
                                            className="h-4"
                                        />
                                        <span className="ml-3 text-sm">
                                            Hero
                                        </span>
                                    </button>
                                    <button className="mt-3 flex items-center hover:ml-2 transition-all duration-300">
                                        <img
                                            src="/assets/icons/svg/Discount.svg"
                                            className="h-4"
                                        />
                                        <span className="ml-3 text-sm">
                                            Damage
                                        </span>
                                    </button>
                                    <div
                                        className="w-[50%] bg-blue-primary rounded-full absolute bottom-0"
                                        style={{
                                            left: "50%",
                                            transform: "translate(-50%, 100%)",
                                            height: "0.20rem",
                                        }}
                                    />
                                </div>
                                <div className="relative block mt-8 p-4 max-w-sm rounded-lg border shadow-md  bg-gray-800 border-gray-700 hover:bg-gray-700">
                                    <h5 className="mb-1 text-md font-bold tracking-tight text-white">
                                        HOT
                                    </h5>
                                    <p className="font-normal text-sm text-gray-400">
                                        Hold 1,000BT to decrease fee when buy
                                        hero.
                                    </p>
                                    <div className="absolute -top-2 right-[30px]">
                                        <div className="fire">
                                            <div className="fire-left">
                                                <div className="main-fire" />
                                                <div className="particle-fire" />
                                            </div>
                                            <div className="fire-main">
                                                <div className="main-fire" />
                                                <div className="particle-fire" />
                                            </div>
                                            <div className="fire-right">
                                                <div className="main-fire" />
                                                <div className="particle-fire" />
                                            </div>
                                            <div className="fire-bottom">
                                                <div className="main-fire" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="md:pl-[17rem] flex flex-col flex-1">
                    <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
                        <button
                            type="button"
                            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <main className="flex-1">
                        <div className="py-6 px-3">
                            <div className="flex justify-between items-center w-full">
                                <h1 className="text-lg font-semibold">
                                    Main marketplace
                                </h1>
                                <div className="flex items-center">
                                    <div className="bg-[#202425] rounded-full mr-5 ">
                                        <input
                                            className="bg-transparent outline-0 w-72 py-3 px-6 text-sm "
                                            placeholder="Search token by token ID"
                                        />
                                    </div>
                                    <button className="bg-blue-primary shadow-sm shadow-blue-400 rounded-xl py-3 px-4 text-sm font-bold">
                                        Connect wallet
                                    </button>
                                </div>
                            </div>
                            <div className="grid grid-cols-8 mt-8 gap-x-5">
                                <div className=" col-span-6">{children}</div>
                                <div className="col-span-2 rounded-xl">
                                    <div
                                        style={{
                                            background: "rgba(32, 36, 37, 0.5)",
                                            borderRadius: "21px",
                                        }}
                                        className="py-6 px-6 relative"
                                    >
                                        <span
                                            className=" uppercase text-blue-primary text-sm font-semibold relative"
                                            style={{ zIndex: 2 }}
                                        >
                                            Your Wallet
                                        </span>
                                        <div
                                            className="flex items-center mt-4 relative"
                                            style={{ zIndex: 2 }}
                                        >
                                            <img
                                                alt=""
                                                src="/assets/icons/svg/Wallet.svg"
                                                className="h-8"
                                            />
                                            <div className="ml-3 font-semibold text-xl">
                                                1,000,000BT
                                            </div>
                                        </div>
                                        <img
                                            src="/assets/icons/svg/bg.svg"
                                            className="absolute top-1/2 left-1/2 h-full"
                                            style={{
                                                zIndex: 1,
                                                transform:
                                                    "translate(-50%, -50%)",
                                            }}
                                        />
                                        <div
                                            className="w-[50%] bg-blue-primary rounded-full absolute bottom-0"
                                            style={{
                                                left: "50%",
                                                transform:
                                                    "translate(-50%, 100%)",
                                                height: "0.20rem",
                                                zIndex: 2,
                                            }}
                                        />
                                    </div>
                                    <div
                                        style={{
                                            background: "rgba(32, 36, 37, 0.5)",
                                            borderRadius: "21px",
                                        }}
                                        className="py-6 px-6 relative mt-8"
                                    >
                                        <span
                                            className=" uppercase text-blue-primary text-sm font-semibold relative"
                                            style={{ zIndex: 2 }}
                                        >
                                            Recent NFT Sold
                                        </span>
                                        <div
                                            className="flex items-start mt-4 relative"
                                            style={{ zIndex: 2 }}
                                        >
                                            <img
                                                alt=""
                                                src="/assets/images/avatar.png"
                                                className="h-9"
                                            />
                                            <div className="ml-3">
                                                <div className="">
                                                    #2348791347862
                                                </div>
                                                <p className="mt-1 text-sm">
                                                    Has been sold{" "}
                                                    <span className="text-blue-primary">
                                                        2,000BT
                                                    </span>
                                                    .
                                                </p>
                                                <p className="mt-4 text-sm text-gray-400">
                                                    <span>
                                                        {new Date().toLocaleString()}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="w-[90%] h-0.5 rounded-full bg-[#2F2F2F] mx-auto mt-4"></div>
                                        <div
                                            className="flex items-start mt-4 relative"
                                            style={{ zIndex: 2 }}
                                        >
                                            <img
                                                alt=""
                                                src="/assets/images/avatar.png"
                                                className="h-9"
                                            />
                                            <div className="ml-3">
                                                <div className="">
                                                    #2348791347862
                                                </div>
                                                <p className="mt-1 text-sm">
                                                    Has been sold{" "}
                                                    <span className="text-blue-primary">
                                                        2,000BT
                                                    </span>
                                                    .
                                                </p>
                                                <p className="mt-4 text-sm text-gray-400">
                                                    <span>
                                                        {new Date().toLocaleString()}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="w-[50%] bg-blue-primary rounded-full absolute bottom-0"
                                            style={{
                                                left: "50%",
                                                transform:
                                                    "translate(-50%, 100%)",
                                                height: "0.20rem",
                                                zIndex: 2,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
