'use client';
import React from 'react';
import { FaArrowTrendDown } from 'react-icons/fa6';
import { MdAccessAlarms } from 'react-icons/md';
import handeImage from '../../../public/mobilehand.webp';
import { FaRegStarHalfStroke } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import '../styles/Homepage.css';
import Image from 'next/image';
import UserContent from './UserContent';
import QuestionWeGot from './QuestionWeGot';
import BuyHomeContent from './BuyHomeContent';
import Footer from './Footer';
import Start from './Start';
import AboutUs from './AboutUs';
const HomePage = () => {
  return (
    <>

		<div className="mainhomepagecontainer">
			{/* first container */}
			<div className="firsthomepagecontainer">
				{/* logo container */}
				<div className="ogocontainer">
					<FaArrowTrendDown size={22} color="#6F4CF7" />
				</div>
				{/* heading */}
				<div className="headingontainer">
					<h1 className="thisishone">Rate drop alert</h1>
				</div>
			</div>
			{/* second container */}
			<div className="secondhomepagecontainer">
				<h1 className="badabadacontainer">The rate drop you’ve been waiting for</h1>
			</div>
			{/* third contaienr */}
			<div className="thirdhomepagecontainer">
				{/* first div approval button*/}
				<div className="littlechildone">
					{/* approval button */}
					<div className="approvalmybutton">
						<h2 className="startmyarpoval">Start my approval</h2>
					</div>
					<div className="fds">
						<MdAccessAlarms color="#fffdfa" size={20} />
						<h6 className="waha">3 min | No credit impact</h6>
					</div>
				</div>
				{/* second div phone img */}
				<div className="littlechildtwo">
					<Image className="handyimage" src={handeImage} alt="fdsf" />
				</div>
				{/* third div --> raings  */}
				<div className="littlechildthree">
          {/* first thing */}
					<div className="firstgoogleandstarts">
						<FcGoogle size={24} style={{ marginRight: '4px' }} />
						<FaStar size={24} color="#FFBD15" />
						<FaStar size={24} color="#FFBD15" />
						<FaStar size={24} color="#FFBD15" />
						<FaStar size={24} color="#FFBD15" />
						<FaRegStarHalfStroke size={24} color="#FFBD15" />
					</div>
          {/* second thing  heading*/}
          <div className="headingvading">
            <h1 className='startrating'>4.6 Stars | 3177 Google reviews</h1>
          </div>
				</div>
			</div>
		</div>
    <UserContent/>
	<QuestionWeGot/>
	<BuyHomeContent/>
	
	
    </>
	);
};

export default HomePage;
