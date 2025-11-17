import React from 'react';

function MyHero(props) {
    return (
        <>
            <div className="hero bg-base-200 min-h-screen" style={{ backgroundImage: "url('/myband1.jpg')" }}>
                <div className="hero-content text-start">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-extraboldgit ">Hello there</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyHero;