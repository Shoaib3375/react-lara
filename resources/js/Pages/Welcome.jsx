import { Link, Head } from "@inertiajs/react";
import Footer from "./Footer";

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />

            <header className="text-gray-600 body-font bg-red-500">

                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

                    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a class="mr-5 hover:text-gray-900">First Link</a>
                        <a class="mr-5 hover:text-gray-900">Second Link</a>
                        <Link
                            href={route("register")}
                            className="mr-5 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-800 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Register
                        </Link>
                        <Link
                            href={route("login")}
                            className="mr-5 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-800 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500 "
                        >
                            Log in
                        </Link>
                    </nav>
                </div>
            </header>

            <div className=" relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center    selection:text-white">
                <section class="text-gray-600 body-font">
                    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                                Before they sold out
                                <br class="hidden lg:inline-block" />
                                readymade gluten
                            </h1>
                            <p class="mb-8 leading-relaxed">
                                Copper mug try-hard pitchfork pour-over freegan
                                heirloom neutra air plant cold-pressed tacos
                                poke beard tote bag. Heirloom echo park mlkshk
                                tote bag selvage hot chicken authentic tumeric
                                truffaut hexagon try-hard chambray.
                            </p>
                            <div class="flex justify-center">
                                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    Button
                                </button>
                                <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                                    Button
                                </button>
                            </div>
                        </div>
                        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <img
                                class="object-cover object-center rounded"
                                alt="hero"
                                src="https://dummyimage.com/720x600"
                            />
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    );
}
