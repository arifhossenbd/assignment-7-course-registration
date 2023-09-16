import PropTypes from 'prop-types';
const Cart = ({ selectedCourse, remaining, creditHour, totalPrice }) => {
    return (
        <div>
            <h1 className='font-bold text-blue-500'>Credit Hour Remaining {remaining} hr</h1>
            <hr className='my-4' />
            <h1 className='mb-5 font-bold'>Course Name</h1>
            <ul>
                {selectedCourse.map((course, index) => (
                    <li className='gap-5' key={course.id}>
                        {`${index + 1}. ${course.title}`}
                    </li>
                ))}
            </ul>
            <hr className='my-4' />
            <h2 className='font-bold text-gray-500'>Total Credit Hour : {creditHour}</h2>
            <hr className='my-4' />
            <h2 className='font-semibold text-gray-600'>Total Price : {totalPrice} USD</h2>
        </div>
    )
}

Cart.propTypes = {
    selectedCourse: PropTypes.arrayOf(PropTypes.object).isRequired,
    remaining: PropTypes.number.isRequired,
    creditHour: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired
}

export default Cart;