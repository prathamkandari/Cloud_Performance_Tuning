import React from 'react';
import './AdoptMe.css';


const AdoptMe = () => {
    return (
        <>
            <section className="pet-card-flex">
                <div>
                    <h1 className="m-heading text-3xl lg:text-6xl hover:shadow-2xl antialiased hover:subpixel-antialiased">
                        Meet our Friends Here
                    </h1>
                </div>
                <div className="one-line-card" id="meet">
                    {/* Card 1 */}
                    <div className="main-card card-height shadow-2xl">
                        <div className="main-img">
                            <div className="hv rounded-lg shadow-lg max-w-xs card-img-div">
                                <a href={{}}>
                                    <img className="card-img-size" src="" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="main-text">
                            <div className="p-4 flex flex-col gap-2">
                                <h5 className="text_3 md:text-[40px] font-bold mb-2 text-center">
                                    Bongo
                                </h5>
                                <ul className="grid grid-cols-2 gap-5 text_4">
                                    <li className="flex gap-2 text-xl justify-self-center">
                                        <img className="w-5 icon h-auto" src="Assets/Images/dog-icon.svg" alt="" />
                                        <span>Dog</span>
                                    </li>
                                    {/* Add other list items here */}
                                    <li class="flex text-xl justify-self-center">
                                        <span>8 years</span>
                                    </li>
                                    <li class="flex text-xl justify-self-center">
                                        <span>Male</span>
                                    </li>
                                    <li class="flex text-xl justify-self-center">
                                        <span>G-Retriever</span>
                                    </li>
                                    <li class="flex text-xl justify-self-center">
                                        <span>Brown</span>
                                    </li>
                                    <li class="flex gap-2 text-xl justify-self-center">
                                        <img class="w-5 icon h-auto" src="Assets/Images/loation-icon.svg" alt="" />
                                        <span>Delhi</span>
                                    </li>
                                </ul>
                                <a className="self-center pt-2" href={{}}>
                                    <button type="button" className="hover-button">Adopt me</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Repeat the above structure for other cards (Card 2 to Card 6) */}
                    {/* Card 2 */}
                    <div className="main-card card-height shadow-2xl">
                        {/* ... Card 2 content ... */}
                        <div class="main-img">
                            <div class="hv rounded-lg shadow-lg max-w-xs card-img-div">
                                <a href={{}}>
                                    <img class="card-img-size" src="Assets/Images/pug.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                        <div class="main-text">
                            <div class="p-4 flex flex-col gap-2">
                                <h5 class="text_3 md:text-[40px] font-bold mb-2 text-center">
                                    Roblet
                                </h5>
                                <ul class="grid grid-cols-2 gap-5 text_4">
                                    <li class="flex gap-2 text-xl justify-self-center">
                                        <img class="w-5 icon h-auto" src="Assets/Images/dog-icon.svg" alt="" />
                                        <span>Dog</span>
                                    </li>
                                    <li class="flex text-xl justify-self-center">
                                        <span>8 years</span>
                                    </li>
                                    <li class="flex text-xl justify-self-center">
                                        <span>Male</span>
                                    </li>
                                    <li class="flex text-xl justify-self-center">
                                        <span>Pug</span>
                                    </li>
                                    <li class="flex text-xl justify-self-center">
                                        <span>Brown</span>
                                    </li>
                                    <li class="flex gap-2 text-xl justify-self-center">
                                        <img class="w-5 icon h-auto" src="Assets/Images/loation-icon.svg" alt="" />
                                        <span>Lucknow</span>
                                    </li>
                                </ul>
                                <a class="self-center" href={{}}>
                                    <button type="button" class="hover-button">Adopt me</button></a>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div class="one-line-card">
                        <div className="main-card card-height shadow-2xl">
                            {/* ... Card 3 content ... */}
                            <div class="main-img">
                                <div class="hv rounded-lg shadow-lg max-w-xs card-img-div">
                                    <a href="#">
                                        <img class="card-img-size" src="Assets/Images/husky.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div class="main-text">
                                <div class="p-4 flex flex-col gap-2">
                                    <h5 class="text_3 md:text-[40px] font-bold mb-2 text-center">
                                        Sipper
                                    </h5>
                                    <ul class="grid grid-cols-2 gap-5 text_4">
                                        <li class="flex gap-2 text-xl justify-self-center">
                                            <img class="w-5 icon h-auto" src="Assets/Images/dog-icon.svg" alt="" />
                                            <span>Dog</span>
                                        </li>
                                        <li class="flex text-xl justify-self-center">
                                            <span>7 years</span>
                                        </li>
                                        <li class="flex text-xl justify-self-center">
                                            <span>Male</span>
                                        </li>
                                        <li class="flex text-xl justify-self-center">
                                            <span>Husky</span>
                                        </li>
                                        <li class="flex text-xl justify-self-center">
                                            <span>Brown</span>
                                        </li>
                                        <li class="flex gap-2 text-xl justify-self-center">
                                            <img class="w-5 icon h-auto" src="Assets/Images/loation-icon.svg" alt="" />
                                            <span>Kashmir</span>
                                        </li>
                                    </ul>
                                    <a class="self-center" href="adopt.html">
                                        <button type="button" class="hover-button">Adopt me</button></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="main-card card-height shadow-2xl">
                        {/* ... Card 4 content ... */}
                        <div class="main-img">
                            <div class="hv rounded-lg shadow-lg max-w-xs card-img-div">
                                <a href={{}}>
                                    <img class="card-img-size" src="Assets/Images/ragdo.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                        <div class="main-text">
                            <div class="p-4 flex flex-col gap-2">
                                <h5 class="text_3 md:text-[40px] font-bold mb-2 text-center">
                                    Russia
                                </h5>
                                <ul class="grid grid-cols-2 gap-5 text_4">
                                    <li class="flex gap-2 text-xl justify-self-center">
                                        <img class="w-5 icon h-auto" src="Assets/Images/cat.png" alt="" />
                                        <span>Cat</span>
                                    </li>
                                    <li class="flex text-xl justify-self-center">
                                        <span>2.5 years</span>
                                    </li>
                                    <li class="flex text-xl justify-self-center">
                                        <span>Female</span>
                                    </li>
                                    <li class="flex text-xl justify-self-center">
                                        <span>Ragdoll</span>
                                    </li>
                                    <li class="flex text-xl justify-self-center">
                                        <span>White</span>
                                    </li>
                                    <li class="flex gap-2 text-xl justify-self-center">
                                        <img class="w-5 icon h-auto" src="Assets/Images/loation-icon.svg" alt="" />
                                        <span>Karnataka</span>
                                    </li>
                                </ul>
                                <a class="self-center" href="adopt.html">
                                    <button type="button" class="hover-button">Adopt me</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AdoptMe