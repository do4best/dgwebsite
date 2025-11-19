import React from 'react';
import img from "/bgband.jpg"
function MyAnotherSub() {
    return (
        <>
            <div className=" image-1/2 w-full shadow-sm">
                <figure>
                    <img
                        src={img}
                        alt="Shoes" />
                </figure>
                <div className="flex flex-row justify-center align-middle">
                <div className="">
                    <h2 className="">Card Title</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div></div>
            </div>

        </>
    );
}

export default MyAnotherSub;