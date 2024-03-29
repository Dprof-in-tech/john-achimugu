import React from "react";
import Image from "next/image";

const Prefooter = () => {
    return(
        <div className="w-full h-[50vh] mt-16 mb-12" style={{
            backgroundImage: "url('/images/prefooter.png')", backgroundSize: "cover", backgroundPosition: "center"
        }}>
            
        </div>
    );
}

export default Prefooter;