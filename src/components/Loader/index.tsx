import Image from "next/image";
import { FunctionComponent } from "react";

const Loader:FunctionComponent =() =>{
    return <div className="w-screen h-screen bg-black flex justify-center items-center overflow-clip">
        <Image src="/loader/loader.gif" width={400} height={180} alt="loader" className="scale-[1.3] md:scale-150" />
    </div>
}
export default Loader