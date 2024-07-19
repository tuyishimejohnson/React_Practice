

const AirBnB = () => {
  return (
    <>
        <div className="w-[40%] border m-auto">
            <nav className=" py-8 pl-10 shadow-sm shadow-gray-300">
                <img src={require("./images/airbnb 1.png")} alt="" />
            </nav>
            <div className="mx-20 pt-10 pb-14">
                <img src={require("./images/Group 77.png")} alt="" />
            </div>

            <div className="pl-10 w-2/3 pb-12">
                <h1 className="text-4xl font-bold pb-4">Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>

            <div className="flex gap-2">
                <div>
                    <div className="h-[75%]">
                        <img src={require("./images/image 12.png")} alt=""  className="object-cover w-full h-full"/>
                    </div>
                    <div className="flex gap-3">
                        <img src={require("./images/Star 1.png")} alt=""/>
                        <span>5.0 (6) . USA</span>
                    </div>
                    <p>Life lessons with Katie Zaferes</p>
                    <p><span className="font-bold">From $136</span> / person</p>
                    <p>SOLD OUT</p>
                </div>

                <div>
                        <div className="h-[75%]">
                            <img src={require("./images/wedding-photography 1.png")} alt="" className="object-cover w-full h-full"/>
                        </div>
                    <div className="flex gap-3">
                    <img src={require("./images/Star 1.png")} alt=""/>
                        
                        
                        <span>5.0 (6) . USA</span>
                    </div>
                    <p>Life lessons with Katie Zaferes</p>
                    <p><span className="font-bold">From $136</span> / person</p>
                    <p>SOLD OUT</p>
                </div>
                <div>
                    <div className="h-[75%]">
                        <img src={require("./images/mountain-bike 1.png")} alt="" className="object-cover w-full h-full"/>
                    </div>
                    
                    <div className="flex gap-3">
                    
                            <img src={require("./images/Star 1.png")} alt=""/>
                    
                        
                        <span>5.0 (6) . USA</span>
                    </div>
                    <p>Life lessons with Katie Zaferes</p>
                    <p><span className="font-bold">From $136</span> / person</p>
                    <p>SOLD OUT</p>
                </div>
                
            </div>
        </div>
    </>    
  )
}

export default AirBnB