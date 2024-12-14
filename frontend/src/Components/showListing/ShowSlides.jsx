import React, { useEffect, useRef, useState } from "react";


function ShowSlides({ img1, img2, img3, img4 }) {




    return (
        <div className=" w-[90%] m-auto flex">
            <div className="w-[50%]">
                <div>
                    <img src={img1} style={{ width: "100%" }} className=" h-[10rem] md:h-[15rem] transition-all hover:scale-110  cursor-pointer" />
                </div>
                <div>
                    <img src={img2} style={{ width: "100%" }} className=" h-[10rem] md:h-[15rem] transition-all hover:scale-110  cursor-pointer" />
                </div>
            </div>
            <div className="w-[50%]">
                <div>
                    <img src={img3} style={{ width: "100%" }} className=" h-[10rem] md:h-[15rem] transition-all hover:scale-110  cursor-pointer" />
                </div>
                <div>
                    <img src={img4} style={{ width: "100%" }} className="h-[10rem] md:h-[15rem] transition-all hover:scale-110 cursor-pointer" />
                </div>
            </div>
          
        </div >
    );
}
export default ShowSlides;
