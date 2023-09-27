import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Footer from "./Footer";
const Students = (props) => {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    crud
                </h2>
            }
        >
            <Head title="crud" />

            <h1 className="text-center text-5xl ">Crud Operation</h1>
            <div className="mt-12 md:w-[500px]  w-96   h-60 bg-slate-300 mx-auto ">
                <form action={{route('students.store')}} method='post'>
                    @csrf
                    <h2 className="text-3xl font-mono text-center ">
                        Add New Student
                    </h2>
                    <input
                        className="md:w-2/3 mt-5  h-10 mx-auto block"
                        type="text"
                        placeholder="Write Your Name"
                    />
                    <button type="submit" className="bg-black px-3 mt-3 py-2 block mx-auto text-white">Add Student</button>
                </form>
            </div>
            <Footer />
        </AuthenticatedLayout>
    );
};

export default Students;
