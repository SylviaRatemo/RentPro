import React from 'react'
import Github from "../../assets/Social-Icons/Github.png";
import Insta from "../../assets/Social-Icons/instagram.png";
import Twitter from "../../assets/Social-Icons/Twitter.png";

export const ContactText = () => {
    return (
        <section className='flex flex-col gap-[20px] justify-center lg:w-[45%] w-full'>
            <div className="">
                Hey Rentalog Users, <br />
                We are always looking forward to hearing from you.
                Please feel free to reach out to us for any queries, suggestions, or
                feedback. <br />
                We would love to hear from you. <br />
                <br />
                Contact us: <br />
                Email: <a href="mailto:ratemosylvia@gmail.com" className='font-bold text-primaryGreen underline'> support@rentalog.in </a> <br />
                Phone: <a href="tel:+254711781450" className='font-bold text-primaryGreen underline'>  +91 62015 77047 </a> <br />
                Address: Nairobi, Kenya <br />
                <br />
                The RentPro Team
            </div>
            <div
                className="flex gap-x-12 lg:justify-center justify-start"
            >
                <a href="https://twitter.com/RatemoSylvia">
                    <img src={Twitter} alt="Twitter-logo" className="h-8" />
                </a>
                <a href="https://github.com/SylviaRatemo">
                    <img src={Github} alt="Github-logo" className="h-8" />
                </a>
                <a href="https://www.instagram.com/gauravsingh1281">
                    <img src={Insta} alt="Insta-logo" className="h-8" />
                </a>
            </div>
        </section>
    )
}
