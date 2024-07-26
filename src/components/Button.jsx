const Button = ({ icon, handleClick }) => {
    return (
        <div className="relative inline-block">
            <button
                onClick={handleClick}
                className="w-16 h-16 rounded-full border-2 border-none bg-1 text-white text-2xl 
                            flex justify-center items-center relative z-10 transition-transform transform active:translate-y-1">
                {icon}
            </button>
            <div className="w-16 h-16 bg-2 rounded-full absolute top-1 z-0 transition-transform transform"></div>
        </div>
    );
}

export default Button;
