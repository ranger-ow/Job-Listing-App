
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [skills, setSkills] = useState(["Reactjs", "javascript"]);
    const [coverletter, setCover] = useState("");
    const [yearofexp, setExp] = useState("");
    const [institute, setInstitute] = useState("");
    const [degree, setDegree] = useState("");



    const [error, setError] = useState("");
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !yearofexp || !skills) {
            setError("All fields are necessary.");
            return;
        }

        try {


            const res = await fetch("/apply", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                 institute,
                    degree,
                    skills,
                    coverletter,
                    yearofexp,
                }),
            });
            console.log(res);

            if (res.ok) {
                const form = e.target;
                form.reset();
                navigate('/');
            } else {
                console.log("User application failed.");
            }
        } catch (error) {
            console.log("Error during registration: ", error);
        }
    };

    return (
        <div className="w-full md:w-96 md:max-w-full mx-auto">
            <div className="p-6 border border-gray-300 sm:rounded-md">
                <h1 className="text-xl font-semibold">Job Application</h1>
                <form onSubmit={handleSubmit}>

                    <label className="block mb-6">
                        <span className="text-gray-700">Your name</span>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            required
                            name="name"
                            type="text"
                            className=" block
                            w-full
                            mt-1
                            border-gray-300
                            rounded-md
                            shadow-sm
                            focus:border-indigo-300
                            focus:ring
                            focus:ring-indigo-200
                            focus:ring-opacity-50
                          "
                            placeholder="Full Name"
                        />
                    </label>
                    <label className="block mb-6">
                        <span className="text-gray-700">Email address</span>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            name="email"
                            type="email"
                            className="block
                            w-full
                            mt-1
                            border-gray-300
                            rounded-md
                            shadow-sm
                            focus:border-indigo-300
                            focus:ring
                            focus:ring-indigo-200
                            focus:ring-opacity-50
                          "

                            placeholder="shawn@example.com"
                        />
                    </label>
                    <label className="block mb-6">
                        <span className="text-gray-700">Years of experience</span>
                        <select onChange={(e) => { setExp(e.target.value) }}
                            required
                            name="experience"
                            className=" block
                            w-full
                            mt-1
                            border-gray-300
                            rounded-md
                            shadow-sm
                            focus:border-indigo-300
                            focus:ring
                            focus:ring-indigo-200
                            focus:ring-opacity-50
                          "

                        >
                            <option value="Less than a year">Less than a year</option>
                            <option value="1 - 2 years">1 - 2 years</option>
                            <option value="2 - 4 years">2 - 4 years</option>
                            <option value="4 - 7 years">4 - 7 years</option>
                            <option value="7 - 10 years">7 - 10 years</option>
                            <option value="10+ years">10+ years</option>
                        </select>
                    </label>
                    <label className="block mb-6">
                        <span className="text-gray-700">Skills</span>
                        <input
                            onChange={(e) => setSkills(e.target.value)}
                            required

                            type="text"
                            className=" block
                            w-full
                            mt-1
                            border-gray-300
                            rounded-md
                            shadow-sm
                            focus:border-indigo-300
                            focus:ring
                            focus:ring-indigo-200
                            focus:ring-opacity-50
                          "
                            placeholder="Tech-Stack"
                        />
                    </label>
                    <label className="block mb-6">
                        <label className="text-gray-700">Education</label>

                        <input
                            onChange={(e) => setInstitute(e.target.value)}
                            required

                            type="text"
                            className=" block
                            w-full
                            mt-1
                            border-gray-300
                            rounded-md
                            shadow-sm
                            focus:border-indigo-300
                            focus:ring
                            focus:ring-indigo-200
                            focus:ring-opacity-50
                          "
                            placeholder="Institute/College"
                        />
                        <input
                            onChange={(e) => setDegree(e.target.value)}
                            required

                            type="text"
                            className=" block
                            w-full
                            mt-1
                            border-gray-300
                            rounded-md
                            shadow-sm
                            focus:border-indigo-300
                            focus:ring
                            focus:ring-indigo-200
                            focus:ring-opacity-50
                          "
                            placeholder="Institute/College Degree"
                        />
                    </label>
                    <label className="block mb-6">
                        <span className="text-gray-700">Tell us more about yourself</span>
                        <textarea onChange={(e) => { setCover(e.target.value) }}
                            name="message"
                            className="block
                            w-full
                            mt-1
                            border-gray-300
                            rounded-md
                            shadow-sm
                            focus:border-indigo-300
                            focus:ring
                            focus:ring-indigo-200
                            focus:ring-opacity-50
                          "

                            rows="3"
                            placeholder="What motivates you?"
                        ></textarea>
                    </label>
                    <label className="block mb-6">
                        <span className="text-gray-700">Your CV</span>
                        <input
                            required
                            name="cv"
                            type="file"
                            className=" block
                            w-full
                            mt-1
                            focus:border-indigo-300
                            focus:ring
                            focus:ring-indigo-200
                            focus:ring-opacity-50
                          "

                        />
                    </label>



                    <div className="mb-6">
                        <button
                            type="submit"
                            className=" h-10
                            px-5
                            text-indigo-100
                            bg-indigo-700
                            rounded-lg
                            transition-colors
                            duration-150
                            focus:shadow-outline
                            hover:bg-indigo-800
                          "

                        >
                            Apply
                        </button>
                        {error && (
                            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                                {error}
                            </div>
                        )}
                    </div>

                </form>
            </div>
        </div>

    );
}