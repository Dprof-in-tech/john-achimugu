import TwitterSlider from "./slider";

const Folks = () => {
    return (
        <div className="bg-[#121213]">
            <p className="text-white font-semibold text-4xl p-10">What <span  className="opacity-70">Folks are saying</span></p>
            <TwitterSlider />
        </div>
    );
}

export default Folks;