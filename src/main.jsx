import React from 'react';
// import './App.css';
import { useFormik } from "formik";
import axios from 'axios';
import AdoptMe from './AdoptMe';
import './AdoptMe.css';
import Gret from './imgs/goldern-ret.jpg';
import pug from './imgs/pug.jpg';
import ragdo from './imgs/ragdo.jpg';
import husky from './imgs/husky.jpg';
import location from './imgs/loation-icon.svg';
import dogicon from './imgs/dog-icon.svg';
import caticon from './imgs/cat.png';

export default function Main() {
    const formik = useFormik({
        initialValues: {
            myName: '',
            myEmail: '',
            mySubject: '',
            myDescription: '',
        },
        onSubmit
    })
    const port = process.env.PORT || 3001;
    async function onSubmit(values) {
        axios.post(`http://localhost:${port}/contact`, values)
            .then(result => console.log(result))
            .catch(err => console.log(err))
        // console.log(values)
    }


    return (
        <>
            <nav className="navbar px-md-0 navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <a className="navbar-brand" href="index.html">PetMitra<span>Helping Pets Community</span></a>
                    <button className="navbar-toggler" type="button" data-t oggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu"></span> Menu
                    </button>

                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
                            <li className="nav-item"><a href=<AdoptMe /> className="nav-link">Adopt Me</a></li>
                            <li className="nav-item"><a href={{}} className="nav-link">Practice Areas</a></li>
                            <li className="nav-item"><a href={{}} className="nav-link">Blog</a></li>
                            <li className="nav-item"><a href={{}} className="nav-link">Contact</a></li>
                            <li className="nav-item cta"><a href={{}} className="nav-link">Free Advices</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="hero-wrap js-fullheight" style={{ backgroundImage: 'url("images/Homepage.jpg")', backgroundSize: "cover" }} data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-start" data-scrollax-parent="true">
                        <div className="col-md-6 ">
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <h2 className="subheading">Welcome To PetMitra</h2>
                            <br />
                            <br />
                            <h1>Find your new best friend today!
                                <span
                                    className="txt-rotate"
                                    data-period="2000"
                                    data-rotate='[ "Freedom.", "Rights.", "Case.", "Custody." ]'></span>
                            </h1>
                            <br />
                            <p className="mb-4">Meet our adorable furry friends looking for a forever home. Whether you're seeking a loyal companion, a playful buddy, or a loving pet, your new best friend is just a pawshake away! Explore our pets in need of a loving family and start your pet adoption journey.</p>
                            <p><br /><a href={{}} className="btn btn-primary mr-md-4 py-2 px-4" style={{ marginBottom: "80px" }}>Get Advice <span className="ion-ios-arrow-forward"></span></a></p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ftco-section ftco-no-pt">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 py-5">
                            <div className="heading-section ">
                                <span className="subheading">Services</span>
                                <h2 className="mb-4">Why Choose Us?</h2>
                                <p>Choose us for a compassionate approach to pet adoption. Find your perfect furry companion and make a difference in their lives.</p>
                                <p><a href={{}} className="btn btn-primary py-3 px-4">Free Consultation</a></p>
                            </div>
                        </div>
                        <div className="col-lg-9 services-wrap px-4 pt-5">
                            <div className="row pt-md-3">
                                <div className="col-md-4 d-flex align-items-stretch">
                                    <div className="services text-center">
                                        <div className="icon d-flex justify-content-center align-items-center">
                                            <span className="flaticon-lawyer"></span>
                                        </div>
                                        <div className="text">
                                            <h3>Fight for Pets</h3>
                                            <p>We work tirelessly to provide loving homes and a brighter future for pets in need. Join us in our mission to make a difference in the lives of these deserving companions.</p>
                                        </div>
                                        <a href={{}} className="btn-custom d-flex align-items-center justify-content-center"><span className="ion-ios-arrow-round-forward"></span></a>
                                    </div>
                                </div>
                                <div className="col-md-4 d-flex align-items-stretch">
                                    <div className="services text-center">
                                        <div className="icon d-flex justify-content-center align-items-center">
                                            <span className="flaticon-lawyer"></span>
                                        </div>
                                        <div className="text">
                                            <h3>Best Web Application</h3>
                                            <p>This web application is exceptional for pet adoption, fostering a vibrant community of pet enthusiasts and owners.</p>
                                        </div>
                                        <a href={{}} className="btn-custom d-flex align-items-center justify-content-center"><span className="ion-ios-arrow-round-forward"></span></a>
                                    </div>
                                </div>
                                <div className="col-md-4 d-flex align-items-stretch">
                                    <div className="services text-center">
                                        <div className="icon d-flex justify-content-center align-items-center">
                                            <span className="flaticon-lawyer"></span>
                                        </div>
                                        <div className="text">
                                            <h3>Experienced Advisors</h3>
                                            <p>Our team of experienced advisors offers immediate assistance to users seeking advice on pet-related inquiries.</p>
                                        </div>
                                        <a href={{}} className="btn-custom d-flex align-items-center justify-content-center"><span className="ion-ios-arrow-round-forward"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section ftco-no-pt ftco-no-pb">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-md-6 d-flex">
                            <div className="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-end" style={{ backgroundImage: 'url("images/Pet.jpg")' }}>
                                <a href="https://youtu.be/5iWBWemXYWg?si=xc3u9kJWkDRtVlIB" className="icon-video popup-vimeo d-flex justify-content-center align-items-center">
                                    <span className="icon-play"></span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 pl-md-5">
                            <div className="row justify-content-start pt-3 pb-3">
                                <div className="col-md-12 heading-section">
                                    <span className="subheading">Welcome to PetMitra</span>
                                    <h2 className="mb-4">We Always Fight For Animals Justice</h2>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                                    <div className="tabulation-2 mt-4">
                                        <ul className="nav nav-pills nav-fill d-md-flex d-block">
                                            <li className="nav-item mb-md-0 mb-2">
                                                <a className="nav-link active py-2" data-toggle="tab" href="#home1">Our Mission</a>
                                            </li>
                                            <li className="nav-item px-lg-2 mb-md-0 mb-2">
                                                <a className="nav-link py-2" data-toggle="tab" href="#home2">Our Vision</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link py-2 mb-md-0 mb-2" data-toggle="tab" href="#home3">Our Value</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content bg-light rounded mt-2">
                                            <div className="tab-pane container p-0 active" id="home1">
                                                <p>To rescue, nurture, and find loving homes for pets in need while fostering a compassionate community of pet lovers. We are dedicated to improving the lives of both pets and their human companions, one adoption at a time.</p>
                                            </div>
                                            <div className="tab-pane container p-0 fade" id="home2">
                                                <p>To create a world where every pet finds a forever home, and where the bond between pets and their owners enriches lives. We aspire to build a global network of responsible pet owners, creating a brighter, more loving future for all our furry friends.</p>
                                            </div>
                                            <div className="tab-pane container p-0 fade" id="home3">
                                                <p>Our values guide our actions and define our organization. Compassion lies at the core of all that we do, driving our commitment to the welfare of animals and the happiness of pet owners.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="years d-flex mt-4 mt-md-5">
                                        <h4>
                                            <span className="number mr-2" data-number="2">2</span>
                                            <span>Years of Experience</span>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        {/* <div className="col-md-10 text-center heading-section">
              <span className="subheading">Explore Case Studies</span>
              <h2 className="mb-4">1000+ Completed Cases Successfully</h2>
            </div> */}
                    </div>
                    {/* <div className="row">
            <div className="col-md-12">
              <div className="carousel-case owl-carousel ">
                <div className="item">
                  <div className="case img d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url("images/case-1.jpg")' }}>
                    <div className="text text-center">
                      <h3><a href={{}}>Legal Seperation</a></h3>
                      <span>Corporate</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="case img d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url("images/case-2.jpg")' }}>
                    <div className="text text-center">
                      <h3><a href={{}}>Legal Seperation</a></h3>
                      <span>Corporate</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="case img d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url("images/case-3.jpg")' }}>
                    <div className="text text-center">
                      <h3><a href={{}}>Legal Seperation</a></h3>
                      <span>Corporate</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="case img d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url("images/case-4.jpg")' }}>
                    <div className="text text-center">
                      <h3><a href={{}}>Legal Seperation</a></h3>
                      <span>Corporate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 text-center mt-4">
              <a href="case.html" className="btn btn-primary px-5">See All Successful Projects</a>
            </div>
          </div> */}
                </div>
            </section>


            {/*Adopt Us*/}

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
                                    <img className="card-img-size" src={Gret} alt="" />
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
                                        <img className="w-5 icon h-auto" src={dogicon} alt="" />
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
                                        <img class="w-5 icon h-auto" src={location} alt="" />
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
                                    <img class="card-img-size" src={pug} alt="" />
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
                                        <img class="w-5 icon h-auto" src={dogicon} alt="" />
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
                                        <img class="w-5 icon h-auto" src={location} alt="" />
                                        <span>Lucknow</span>
                                    </li>
                                </ul>
                                <a class="self-center" href={{}}>
                                    <button type="button" class="hover-button">Adopt me</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card 3 */}

            </section>


            <section className="ftco-section ftco-no-pt">
                <div className="container-fluid px-md-5">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 text-center heading-section ">
                            {/* <span className="subheading">Our Attorney</span> */}
                            <h2 className="mb-4">Our Community Advisors</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="block-2 ">
                                <div className="flipper">
                                    <div className="front" style={{ backgroundImage: 'url("/images/person_1.jpg")' }}>
                                        <div className="box">
                                            <h2>Ryan Anderson</h2>
                                            <p>Director</p>
                                        </div>
                                    </div>
                                    <div className="back">
                                        <blockquote>
                                            <p>&ldquo;Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text &rdquo;</p>
                                        </blockquote>
                                        <div className="author d-flex">
                                            <div className="image align-self-center">
                                                <img src="images/person_1.jpg" alt="" />
                                            </div>
                                            <div className="name align-self-center ml-3">Ryan Anderson <span className="position">Director</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="block-2 ">
                                <div className="flipper">
                                    <div className="front" style={{ backgroundImage: 'url("/images/person_2.jpg")' }}>
                                        <div className="box">
                                            <h2>Greg Washer</h2>
                                            <p>Director</p>
                                        </div>
                                    </div>
                                    <div className="back">

                                        <blockquote>
                                            <p>&ldquo;Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text &rdquo;</p>
                                        </blockquote>
                                        <div className="author d-flex">
                                            <div className="image align-self-center">
                                                <img src="images/person_2.jpg" alt="" />
                                            </div>
                                            <div className="name align-self-center ml-3">Greg Washer<span className="position">Director</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="block-2">
                                <div className="flipper">
                                    <div className="front" style={{ backgroundImage: 'url("/images/person_3.jpg")' }}>
                                        <div className="box">
                                            <h2>Tony Henderson</h2>
                                            <p>Director</p>
                                        </div>
                                    </div>
                                    <div className="back">

                                        <blockquote>
                                            <p>&ldquo;Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text &rdquo;</p>
                                        </blockquote>
                                        <div className="author d-flex">
                                            <div className="image align-self-center">
                                                <img src="images/person_3.jpg" alt="" />
                                            </div>
                                            <div className="name align-self-center ml-3">Tony Henderson <span className="position">Director</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="block-2">
                                <div className="flipper">
                                    <div className="front" style={{ backgroundImage: 'url("/images/person_4.jpg")' }}>
                                        <div className="box">
                                            <h2>Jack Smith</h2>
                                            <p>Director</p>
                                        </div>
                                    </div>
                                    <div className="back">

                                        <blockquote>
                                            <p>&ldquo;Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text &rdquo;</p>
                                        </blockquote>
                                        <div className="author d-flex">
                                            <div className="image align-self-center">
                                                <img src="images/person_4.jpg" alt="" />
                                            </div>
                                            <div className="name align-self-center ml-3">Jack Smith <span className="position">Director</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="ftco-consultation ftco-section ftco-no-pt ftco-no-pb img" style={{ backgroundImage: 'url("images/2.jpg")' }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row d-md-flex justify-content-end">
                        <div className="col-md-6 half p-3 py-5 pl-md-5 heading-section heading-section-white">
                            <span className="subheading">Booking an Appointment</span>
                            <h2 className="mb-4">Free Consultation</h2>
                            <form action={{}} className="consultation" onSubmit={formik.handleSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Name" name="myname" required
                                        {...formik.getFieldProps('myName')} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Email" name="myEmail" required
                                        {...formik.getFieldProps('myEmail')} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Subject" name="mySubject" required
                                        {...formik.getFieldProps('mySubject')} />
                                </div>
                                <div className="form-group">
                                    <input type='text' cols="30" rows="7" className="form-control" placeholder="Message" name="myDescription" required
                                        {...formik.getFieldProps('myDescription')} />
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Send message" className="btn btn-dark py-3 px-4" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


            {/* <section className="ftco-section testimony-section">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 text-center heading-section">
              <span className="subheading">Testimonial</span>
              <h2 className="mb-4">Happy Clients</h2>
            </div>
          </div>
          <div className="row ftco-animate">
            <div className="col-md-12">
              <div className="carousel-testimony owl-carousel ftco-owl">
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="text">
                      <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sint quod vitae cupiditate velit odio voluptatem, culpa consequatur atque. Ex accusantium labore nam dolor inventore animi eaque atque maiores id?</p>
                      <div className="d-flex align-items-center">
                        <div className="user-img" style={{ backgroundImage: 'url("images/person_1.jpg")' }}></div>
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="text">
                      <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis ipsa ab, dolorum error assumenda consequuntur. Aperiam, tempore sunt qui perspiciatis similique placeat odio dolorum numquam veritatis quos esse illo. Labore.</p>
                      <div className="d-flex align-items-center">
                        <div className="user-img" style={{ backgroundImage: 'url("images/person_2.jpg")' }}></div>
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="text">
                      <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis ipsa ab, dolorum error assumenda consequuntur. Aperiam, tempore sunt qui perspiciatis similique placeat odio dolorum numquam veritatis quos esse illo. Labore.</p>
                      <div className="d-flex align-items-center">
                        <div className="user-img" style={{ backgroundImage: 'url("images/person_3.jpg")' }}></div>
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="text">
                      <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis ipsa ab, dolorum error assumenda consequuntur. Aperiam, tempore sunt qui perspiciatis similique placeat odio dolorum numquam veritatis quos esse illo. Labore.</p>
                      <div className="d-flex align-items-center">
                        <div className="user-img" style={{ backgroundImage: 'url("images/person_1.jpg")' }}></div>
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="text">
                      <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis ipsa ab, dolorum error assumenda consequuntur. Aperiam, tempore sunt qui perspiciatis similique placeat odio dolorum numquam veritatis quos esse illo. Labore.</p>
                      <div className="d-flex align-items-center">
                        <div className="user-img" style={{ backgroundImage: 'url("images/person_2.jpg")' }}></div>
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section text-center">
                            <span className="subheading">Our Blog</span>
                            <h2>Recent Blog</h2>
                        </div>
                    </div>
                    <div className="row d-flex">
                        <div className="col-md-4 d-flex ">
                            <div className="blog-entry justify-content-end">
                                <div className="text px-4 py-4">
                                    <h3 className="heading mb-0"><a href={{}}>All you want to know about industrial laws</a></h3>
                                </div>
                                <a href="blog-single.html" className="block-20" style={{ backgroundImage: 'url("images/image_1.jpg")' }}>
                                </a>
                                <div className="text p-4 float-right d-block">
                                    <div className="topper d-flex align-items-center">
                                        <div className="one py-2 pl-3 pr-1 align-self-stretch">
                                            <span className="day">18</span>
                                        </div>
                                        <div className="two pl-0 pr-3 py-2 align-self-stretch">
                                            <span className="yr">2019</span>
                                            <span className="mos">October</span>
                                        </div>
                                    </div>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                    <p><a href={{}} className="btn btn-primary">Read more</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex">
                            <div className="blog-entry justify-content-end">
                                <div className="text px-4 py-4">
                                    <h3 className="heading mb-0"><a href={{}}>All you want to know about industrial laws</a></h3>
                                </div>
                                <a href="blog-single.html" className="block-20" style={{ backgroundImage: 'url("images/image_2.jpg")' }}>
                                </a>
                                <div className="text p-4 float-right d-block">
                                    <div className="topper d-flex align-items-center">
                                        <div className="one py-2 pl-3 pr-1 align-self-stretch">
                                            <span className="day">18</span>
                                        </div>
                                        <div className="two pl-0 pr-3 py-2 align-self-stretch">
                                            <span className="yr">2019</span>
                                            <span className="mos">October</span>
                                        </div>
                                    </div>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                    <p><a href={{}} className="btn btn-primary">Read more</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex ">
                            <div className="blog-entry justify-content-end">
                                <div className="text px-4 py-4">
                                    <h3 className="heading mb-0"><a href={{}}>All you want to know about industrial laws</a></h3>
                                </div>
                                <a href="blog-single.html" className="block-20" style={{ backgroundImage: 'url("images/image_3.jpg")' }}>
                                </a>
                                <div className="text p-4 float-right d-block">
                                    <div className="topper d-flex align-items-center">
                                        <div className="one py-2 pl-3 pr-1 align-self-stretch">
                                            <span className="day">18</span>
                                        </div>
                                        <div className="two pl-0 pr-3 py-2 align-self-stretch">
                                            <span className="yr">2019</span>
                                            <span className="mos">October</span>
                                        </div>
                                    </div>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                    <p><a href={{}} className="btn btn-primary">Read more</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <section className="ftco-section ftco-no-pt ftco-no-pb bg-light">
        <div className="container">
          <div className="row d-flex justify-content-end">
            <div className="col-md-8 py-4 px-md-4 bg-primary">
              <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                  <h2 className="mb-0" style={{ color:"white", fontSize: "24px" }}>Subcribe to our Newsletter</h2>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                  <form action={{}} className="subscribe-form">
                    <div className="form-group d-flex">
                      <input type="text" className="form-control" placeholder="Enter email address" />
                        <input type="submit" value="Subscribe" className="submit px-3" />
                        </div>
                      </form>
                    </div>
                </div>
              </div>
            </div>
          </div>
      </section> */}

            <footer className="ftco-footer ftco-bg-dark ftco-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="logo"><a href={{}}>PetMitra <span>Helping Pets Community</span></a></h2>
                                <p>Meet our adorable furry friends looking for a forever home. Whether you're seeking a loyal companion, a playful buddy, or a loving pet, your new best friend is just a pawshake away! Explore our pets in need of a loving family and start your pet adoption journey.</p>
                                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                    <li className="ftco-animate"><a href={{}}><span className="icon-twitter"></span></a></li>
                                    <li className="ftco-animate"><a href={{}}><span className="icon-facebook"></span></a></li>
                                    <li className="ftco-animate"><a href={{}}><span className="icon-instagram"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4 ml-md-5">
                                <h2 className="ftco-heading-2">Practice Areas</h2>
                                <ul className="list-unstyled">
                                    <li><a href={{}} className="py-1 d-block"><span className="ion-ios-arrow-forward mr-3"></span>Medical Issues</a></li>
                                    <li><a href={{}} className="py-1 d-block"><span className="ion-ios-arrow-forward mr-3"></span>Pet Adoption</a></li>
                                    <li><a href={{}} className="py-1 d-block"><span className="ion-ios-arrow-forward mr-3"></span>Pet Community</a></li>
                                    <li><a href={{}} className="py-1 d-block"><span className="ion-ios-arrow-forward mr-3"></span>Pet Services</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Have a Questions?</h2>
                                <div className="block-23 mb-3">
                                    <ul>
                                        <li><span className="icon icon-map-marker"></span><span className="text">ENERGY ACRES, UPES, BIDHOLI, via, Prem Nagar, Uttarakhand 248007</span></li>
                                        <li><a href={{}}><span className="icon icon-phone"></span><span className="text">+91 9557008087</span></a></li>
                                        <li><a href={{}}><span className="icon icon-envelope"></span><span className="text">prathamrushil2003@gmail.com</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Opening Hours</h2>
                                <div className="opening-hours">
                                    <h4>Opening Days:</h4>
                                    <p className="pl-3">
                                        <span>Monday – Friday : 9am to 20 pm</span>
                                        <span>Saturday : 9am to 17 pm</span>
                                    </p>
                                    <h4>Vacations:</h4>
                                    <p className="pl-3">
                                        <span>All Sunday Days</span>
                                        <span>All Official Holidays</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p className="text-center text-md-end text-xl-start">
                                All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    );
}
