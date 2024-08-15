import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import useAuthProvider from "../../../components/hooks/useAuthProvider";
import axios from "axios";

const SignUp = () => {
    const {signUpUser} = useAuthProvider();

    // Hook form elements
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    //   
    const onSubmit = async(data) => {
        console.log(data);

        // Save the uploaded photo in the imgBB
        const uploadedPhoto = data.photo[0];
        console.log(uploadedPhoto);
        // form the uploaded image
        const formedImage = new FormData();
        formedImage.append('image', uploadedPhoto);
        // Send to the imgBB
        const {data: imgData} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_PHOTO_UPLOAD_KEY}`, formedImage, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log(imgData);

        // Sign up the user
        signUpUser(data.email, data.password)
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.error(error);
            })
    };

    return (
        <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
            <div className="container max-w-5xl mx-auto h-full p-10">
                <div
                    className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                    <div className="w-full">
                        <div
                            className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                            <div className="g-0 lg:flex lg:flex-wrap">
                                {/* Left column container */}
                                <div className="px-4 md:px-0 lg:w-6/12">
                                    <div className="md:mx-6 md:p-12">
                                        {/*Logo */}
                                        <div className="text-center">
                                            <img
                                                className="mx-auto w-48"
                                                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                                alt="logo" />
                                            <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                                                We are The Lotus Team
                                            </h4>
                                        </div>

                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <p className="mb-4">Please register an account</p>
                                            {/*Name input */}
                                            <div className="relative mb-4" data-twe-input-wrapper-init>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Type your name"
                                                    {...register("name", { required: true })}
                                                />
                                                <label
                                                    htmlFor="name"
                                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                                                >Name
                                                </label>
                                            </div>
                                            {/*Photo input */}
                                            <div className="relative mb-4" data-twe-input-wrapper-init>
                                                <input
                                                    type="file"
                                                    name="photo"
                                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                                                    id="exampleFormControlInput1"
                                                    {...register("photo", { required: true })}
                                                />
                                                <label
                                                    htmlFor="photo"
                                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                                                >Photo
                                                </label>
                                            </div>
                                            {/*Email input */}
                                            <div className="relative mb-4" data-twe-input-wrapper-init>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Type your email"
                                                    {...register("email", { required: true })}
                                                />
                                                <label
                                                    htmlFor="email"
                                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                                                >Email
                                                </label>
                                            </div>

                                            {/*Password input */}
                                            <div className="relative mb-4" data-twe-input-wrapper-init>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                                                    id="exampleFormControlInput11"
                                                    placeholder="Password"
                                                    {...register('password', { required: true })}
                                                />
                                                <label
                                                    htmlFor="password"
                                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                                                >Password
                                                </label>
                                            </div>

                                            {/*Submit button */}
                                            <div className="mb-12 pb-1 pt-1 text-center">
                                                <input
                                                    type='submit'
                                                    value={'Sign up'}
                                                    className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                                                    data-twe-ripple-init
                                                    data-twe-ripple-color="light"
                                                    style={{
                                                        background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)'
                                                    }}
                                                />

                                                {/*Forgot password link */}
                                                <a href="#!">Terms and conditions</a>
                                            </div>

                                            {/*Register button */}
                                            <div className="flex items-center justify-between pb-6">
                                                <p className="mb-0 me-2">Have an account?</p>
                                                <Link to={'/sign-in'}>
                                                    <button
                                                        type="button"
                                                        className="inline-block rounded border-2 border-[#d8363a] px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-danger-50/50 hover:text-danger-600 focus:border-danger-600 focus:bg-danger-50/50 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-rose-950 dark:focus:bg-rose-950"
                                                        data-twe-ripple-init
                                                        data-twe-ripple-color="light">
                                                        Sign In
                                                    </button>
                                                </Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                {/* Right column container with background and description */}
                                <div
                                    className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none"
                                    style={{ background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)' }}>
                                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                                        <h4 className="mb-6 text-xl font-semibold">
                                            We are more than just a company
                                        </h4>
                                        <p className="text-sm">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris nisi ut aliquip ex
                                            ea commodo consequat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;