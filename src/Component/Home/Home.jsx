import Cart from "../Cart/Cart";
import { useEffect, useState } from "react";
import { FaBookOpen } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
    const [coursesData, setCoursesData] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);
    const [remaining, setRemaining] = useState(0);
    const [creditHour, setCreditHour] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        fetch('../data.json')
            .then(res => res.json())
            .then(data => setCoursesData(data))
    }, []);

    const handleSelectCourse = (course) => {
        const isExist = selectedCourse.find((item) => item.id === course.id);
        let count = parseFloat(course.credit_hours);
        let price = parseFloat(course.price_in_USD);

        const totalSelectedCreditHours = selectedCourse.reduce(
            (hour, item) => hour + parseFloat(item.credit_hours), 0
        );

        const remainingCreditHours = 20 - totalSelectedCreditHours;

        if (isExist) {
            toast.warn('Already booked', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else if (count > remainingCreditHours) {
            toast.warn(' Sorry, your limit of 20 hours has been reached.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            setRemaining(remainingCreditHours - count);
            setCreditHour(totalSelectedCreditHours + count);
            setTotalPrice(price + parseFloat(totalPrice));
            setSelectedCourse([...selectedCourse, course]);
        }
    };

    return (
        <div className="container">
            <p className="w-56"></p>
            <h1 className="text-center text-4xl font-bold">Course Registration</h1>
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
                progress={undefined}
                theme="light"
            />
            <div className="shadow-lg p-4 h-fit my-5 md:hidden lg:hidden">
                <Cart selectedCourse={selectedCourse} remaining={remaining} creditHour={creditHour} totalPrice={totalPrice}></Cart>
            </div>
            <div className="flex justify-between gap-5">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {coursesData.map((course) => (
                        <div key={course.id} className="shadow-xl rounded-lg gap-5 p-4">
                            <img className="w-full" src={course.image} alt="" />
                            <h1 className="title my-4 font-bold">{course.title}</h1>
                            <p className="details w-fit">{course.details}</p>
                            <div className="my-4 font-medium flex justify-between items-center">
                                <p>$<span className="ml-2">Price : {course.price_in_USD}</span></p>
                                <p><FaBookOpen /></p>
                                <p>Credit : {course.credit_hours}hr</p>
                            </div>
                            <button onClick={() => handleSelectCourse(course)} className="bg-sky-500 py-2 min-w-full  rounded-lg text-slate-50 font-semibold text-lg">Select</button>
                        </div>
                    ))}
                </div>
                <div className="shadow-lg p-4 h-fit w-7/12 hidden md:inline-block lg:inline-block">
                    <Cart selectedCourse={selectedCourse} remaining={remaining} creditHour={creditHour} totalPrice={totalPrice}></Cart>
                </div>
            </div>
        </div>
    );
}

export default Home;