import Image from "next/image"

const Hero = () => {
    return (
        <div className="bg-[#E3EDF6] mt-6">
            <div className="container grid md:grid-cols-2 py-8">
                <div className="flex items-center">
                    <div className="max-w-[450px] space-y-4">
                        <p className="text-topHeadingSecondary">Start At <span className="font-bold">$999.00</span></p>
                        <h1 className="text-topheadingPrimary font-bold text-4xl md:text-5xl">The Best Node Book Collection 2023</h1>
                        <h3 className="text-2xl font-['Oregano', cursive]">
                            Exclusive Offer Today
                        </h3>
                        <a className="inline-block bg-white rounded-md px-6 py-3 hover:bg-accent text-black" href="#">Shop Now</a>
                    </div>
                </div>
                <div>
                    {/* <img className="ml-auto" src="" alt="Hero"/> */}
                    <Image src="/Talisman.png" alt="Hero" className="ml-auto" width={200} height={200}/>
                </div>
            </div>
        </div>
    )
}

export default Hero