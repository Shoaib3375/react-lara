
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const About = (props) => {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                   About
                </h2>
            }
        >
            <Head title="about" />



            <marquee>
                <h1 class="text-center font-extrabold text-3xl pt-16">
                    Tayyab is my name
                </h1>
            </marquee>
        </AuthenticatedLayout>
    );
};

export default About;

