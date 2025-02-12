import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const Careers = () => {
    const [jobs, setJobs] = useState([]);
    const [selectedJobId, setSelectedJobId] = useState(null);
    const [selectedJob, setSelectedJob] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [resume, setResume] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('https://ways-ahead-global-backend-suman-saran.vercel.app//api/job/jobs', {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                });

                if (!response.ok) throw new Error(`Error: ${response.statusText}`);

                const data = await response.json();
                setJobs(data.jobs);
            } catch (error) {
                console.error("Failed to fetch jobs:", error);
            }
        };

        fetchJobs();
    }, []);

    const handleApply = (id) => {
        setSelectedJobId(id);
        const selectedJobDetails = jobs.find(job => job._id === id);
        setSelectedJob(selectedJobDetails);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !resume) {
            alert("Please fill in all fields and upload a resume.");
            return;
        }

        setIsSubmitting(true);

        const formData = new FormData();
        formData.append("jobId", selectedJobId);
        formData.append("name", name);
        formData.append("email", email);
        formData.append("resume", resume);

        try {
            const response = await fetch('https://ways-ahead-global-backend-suman-saran.vercel.app//api/job/jobs/apply', {
                method: 'POST',
                body: formData, // Use FormData for multipart/form-data
            });

            const result = await response.json();

            if (response.ok) {
                alert("Application submitted successfully!");
                setSelectedJobId(null);
                setName('');
                setEmail('');
                setResume(null);
            } else {
                alert(result.message || "Failed to submit application.");
            }
        } catch (error) {
            console.error("Error submitting application:", error);
            alert("Something went wrong! Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <section id='careers' className='min-h-screen w-full'>
            <img src="https://www.waysaheadglobal.com/assets/images/carrer.jpg" alt="Career" className='w-full h-[50vh] object-cover' />

            <div className='w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 py-10'>
                <div className='w-full md:w-2/3'>
                    <h2 className='text-3xl md:text-4xl font-bold text-orange-600'>Careers</h2>
                    <p className='font-serif text-lg leading-relaxed mt-4 '>
                        WaysAhead Global is committed to excellence and to attracting and retaining the best talent in investment management and across all functions. We strive to build an engaged and motivated team by investing in our people and by providing them with opportunities to learn, grow and build fulfilling careers.
                        <br /><br />
                        We foster a high-performance culture that is fuelled by trust, transparency, inclusiveness, and a growth mindset. We empower, recognise and reward top performers.
                    </p>
                    <button className='bg-orange-600 hover:bg-orange-700 transition-all duration-300 px-6 py-4 mt-6 rounded text-white cursor-pointer shadow-md text-lg'>Discover</button>
                </div>

                <div className='w-full md:w-1/4'>
                    <h2 className='text-xl font-semibold text-center md:text-left mb-4'>ON THIS PAGE</h2>
                    <ul className='grid grid-cols-2 md:grid-cols-1 gap-3  text-sm md:text-lg'>
                        <li className='text-center md:text-left'>Career</li>
                        <li className='text-center md:text-left'>Opportunities</li>
                        <li className='text-center md:text-left'>Experienced Professionals</li>
                        <li className='text-center md:text-left'>Graduates & Interns</li>
                        <li className='text-center md:text-left'>Across Our Portfolio</li>
                    </ul>
                </div>
            </div>

            <div className='w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 py-10'>
                <div className='w-full md:w-1/2'>
                    <h2 className='text-2xl font-bold text-orange-600'>Career Opportunities</h2>
                    <p className='text-lg  mt-4 leading-relaxed font-serif'>
                        WaysAhead Global is a dynamic company, full of passionate people who believe they can make a difference. We provide great opportunities to make an impact and grow your career, working with a highly driven, passionate, dedicated and collaborative team.
                        <br /><br />
                        Our working environment is founded on trust, open-dialogue, mentorship and inclusiveness, with ample room for learning and self-development. Our people are our biggest asset, central to our success, representing the best in talent that Bahrain has to offer.
                    </p>
                    <button className='bg-orange-600 hover:bg-orange-700 transition-all duration-300 px-6 py-4 mt-6 rounded text-white cursor-pointer shadow-md text-lg'>Apply Now</button>
                </div>
                <div className='w-full md:w-1/2'>
                    <img src="https://www.waysaheadglobal.com/assets/images/career/career-1.png" alt="Career" className='w-full h-auto rounded-lg shadow-md' />
                </div>
            </div>


            <div className="overflow-x-auto">
                <table className="w-[90%] md:w-[80%] mx-auto bg-white shadow-lg rounded-lg text-xs md:text-sm my-5">
                    <thead className="bg-gray-200">
                        <tr className="text-sm font-semibold">
                            <th className="py-4 px-6 border-b text-left">Title</th>
                            <th className="py-4 px-6 border-b text-left">Location</th>
                            <th className="py-4 px-6 border-b text-left">Experience</th>
                            <th className="py-4 px-6 border-b text-left">Openings</th>
                            <th className="py-4 px-6 border-b text-left">Salary</th>
                            <th className="py-4 px-6 border-b text-left">Apply</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.length > 0 ? (
                            jobs.map((job) => (
                                <tr key={job._id} className="border-b">
                                    <td className="py-4 px-6 border-b">{job.title}</td>
                                    <td className="py-4 px-6 border-b">{job.location}</td>
                                    <td className="py-4 px-6 border-b">{job.experience}</td>
                                    <td className="py-4 px-6 border-b">{job.openings}</td>
                                    <td className="py-4 px-6 border-b">{job.salary}</td>
                                    <td className="py-4 px-6 border-b cursor-pointer">
                                        <button
                                            className='border flex rounded items-center justify-center px-4 py-2 text-xs bg-orange-500 text-white hover:bg-orange-600'
                                            onClick={() => handleApply(job._id)}
                                        >
                                            Apply
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="py-4 text-center text-orange-500">
                                    No jobs available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {selectedJobId !== null && (
                <div className="fixed flex items-center justify-center min-h-screen top-0 left-0 w-full  bg-opacity-50 z-50">
                    <div className="min-h-[80vh] flex flex-col justify-center bg-[#01082b] text-white w-3/4 max-w-[600px] rounded-lg shadow-lg p-6 relative overflow-auto">
                        <button className="absolute top-4 right-4 hover:text-gray-400 cursor-pointer" onClick={() => setSelectedJobId(null)}>
                            <IoClose className='text-3xl' />
                        </button>

                        <h2 className="text-xl font-bold">Apply for {selectedJob?.title} Job</h2>
                        <p className='text-xs my-2 font-normal text-gray-400'>{selectedJob?.description}</p>
                        <div className='flex justify-between text-sm items-center'>
                            <h2 className='my-2 font-normal text-gray-400'>Location: {selectedJob?.location}</h2>
                            <h2>Salary: {selectedJob?.salary}</h2>
                        </div>
                        <p className="my-2 text-sm">Submit your details to apply for this job.</p>

                        <form onSubmit={handleSubmit} className="mt-6">
                            <label className="block text-sm">Full Name:</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your full name"
                                className="mt-2 p-2 text-sm border rounded w-full"
                            />

                            <label className="block text-sm mt-4">Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="mt-2 p-2 text-sm border rounded w-full"
                            />

                            <label className="block text-sm mt-4">Upload Resume:</label>
                            <input
                                type="file"
                                accept=".pdf"
                                className="mt-2 p-2 text-sm border rounded w-full"
                                onChange={(e) => setResume(e.target.files[0])}
                            />

                            <div className="mt-6 flex justify-between">
                                <button
                                    type="submit"
                                    className="bg-orange-600 text-sm px-4 py-2 rounded text-white hover:bg-orange-700 cursor-pointer transition-all"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Submitting..." : "Submit Application"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className='w-[80%] mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-10 py-10'>
                <div className='w-full md:w-1/2'>
                    <h2 className='text-2xl font-bold text-orange-600'>Experienced Professionals
                    </h2>
                    <p className='text-lg  mt-4 leading-relaxed font-serif'>
                        We are always looking to attract, foster and retain the best talent providing opportunities to be part of a passionate, dedicated and motivated team who are committed to excellence, continuous learning and development.
                        <br /><br />
                        We foster a high performing and responsible culture, ideal for those who thrive on challenges and seek to work in a fast-paced, stimulating engaging environment.
                    </p>
                    <button className='bg-orange-600 hover:bg-orange-700 transition-all duration-300 px-6 py-4 mt-6 rounded text-white cursor-pointer shadow-md text-lg'>Apply Now</button>
                </div>
                <div className='w-full md:w-1/2'>
                    <img src="https://www.waysaheadglobal.com/assets/images/career/career-2.png" alt="Career" className='w-full h-auto rounded-lg shadow-md' />
                </div>
            </div>

            <div className='w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 py-10'>
                <div className='w-full md:w-1/2'>
                    <h2 className='text-2xl font-bold text-orange-600'>Graduates
                    </h2>
                    <p className='text-lg  mt-4 leading-relaxed font-serif'>
                        Kick-start your career with us at WaysAhead Global. We believe in identifying and nurturing talent by providing a stepping-stone for eligible young graduates to shape and forge their careers. We provide opportunities to grow with the organisation, to discover and develop your strengths, to learn new skills and expand your horizons.
                        <br /><br />
                        If you join us, you will have the ability to work closely with and be mentored by a team of highly experienced and devoted professionals.
                    </p>
                    <button className='bg-orange-600 hover:bg-orange-700 transition-all duration-300 px-6 py-4 mt-6 rounded text-white cursor-pointer shadow-md text-lg'>Apply Now</button>
                </div>
                <div className='w-full md:w-1/2'>
                    <img src="https://www.waysaheadglobal.com/assets/images/career/career-3.png" alt="Career" className='w-full h-auto rounded-lg shadow-md' />
                </div>
            </div>

            <div className='w-[80%] mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-10 py-10'>
                <div className='w-full md:w-1/2'>
                    <h2 className='text-2xl font-bold text-orange-600'>Interns
                    </h2>
                    <p className='text-lg  mt-4 leading-relaxed font-serif'>
                        WaysAhead Global offers the opportunity for interns to gain exposure and valuable work experience in an inspiring environment, ideal for those seeking to explore or embark on a career in the field of investments.
                        <br /><br />
                        You will be trained and mentored by qualified, experienced and committed professionals, with a gateway to learn and develop skill sets that are critical to a successful career.
                    </p>
                    <button className='bg-orange-600 hover:bg-orange-700 transition-all duration-300 px-6 py-4 mt-6 rounded text-white cursor-pointer shadow-md text-lg'>Apply Now</button>
                </div>
                <div className='w-full md:w-1/2'>
                    <img src="https://www.waysaheadglobal.com/assets/images/career/career-4.png" alt="Career" className='w-full h-auto rounded-lg shadow-md' />
                </div>
            </div>

            <div className='w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 py-10'>
                <div className='w-full md:w-1/2'>
                    <h2 className='text-2xl font-bold text-orange-600'>Opportunities Across Our Portfolio
                    </h2>
                    <p className='text-lg  mt-4 leading-relaxed font-serif'>
                        Our portfolio companies represent a wide array of sectors. We aim to support our group of companies in identifying the right candidate across various roles.
                    </p>
                    <button className='bg-orange-600 hover:bg-orange-700 transition-all duration-300 px-6 py-4 mt-6 rounded text-white cursor-pointer shadow-md text-lg'>Apply Now</button>
                </div>
                <div className='w-full md:w-1/2'>
                    <img src="https://www.waysaheadglobal.com/assets/images/career/career-5.png" alt="Career" className='w-full h-auto rounded-lg shadow-md' />
                </div>
            </div>

            <a href="/careers/add-jobs" className='flex justify-center w-[200px] bg-orange-500 p-2  font-semibold  button rounded mx-auto'>
                Add Job
            </a>
        </section>
    );
};

export default Careers;  