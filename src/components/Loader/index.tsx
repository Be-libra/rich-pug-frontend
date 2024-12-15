import Image from "next/image";
import { FunctionComponent } from "react";

const Loader:FunctionComponent =() =>{
    return <div className="w-screen h-screen">
        <Image src="/loader/loader.gif" fill alt="loader" className="w-screen h-screen" />
    </div>
}
export default Loader