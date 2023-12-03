import logos from '../../../assets/logos.svg';
import './local.css';

const Partners = () => {
    return (
        <div className="flex flex-col items-center justify-center py-40 ">
            <h1 className="py-4 text-3xl font-bold text-gray-500 font-plus-jakarta-sans">
                From <span className="text-primary">Small Business</span> to
                <span className="text-primary"> Enterprises</span>, Everyone
                <span className="text-red-500"> Loves Us</span>
            </h1>
            <img src={logos} alt="" className="md:w-1/2" />
        </div>
    );
};

export default Partners;
