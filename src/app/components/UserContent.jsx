'use client';
import React from 'react';
import '../styles/UserContent.css';
import { FaStar } from 'react-icons/fa';
import firstUserImage from '../../../public/still-quote-Arian.webp';
import Image from 'next/image';
const UserContent = () => {
	return (
		<div className="myusercontentmain">
			{/* card and naming button container changing  */}
			<div className="cardsandnamesbutton">
				{/* threee images */}
				<Image className="usersimages" src={firstUserImage} alt="User1" />
				<div className="tooglebutton">
					<button className='thisisbuttontoogle'>Arian</button>
					<button className='thisisbuttontoogle'>Amanda</button>
					<button className='thisisbuttontoogle'>Paul</button>
				</div>
			</div>
			{/* second div conatiner */}
			<div className="secondusercontentcontainer">
				{/* inside content */}
                {/* first div heading */}
				<div className="mainheadingofcontentventent">
					<h1 className="contentventent">Find out why we’re better.</h1>
				</div>
                {/* second div-> mybutton */}
                <div className="seeallstories">
                    <h1 className="seallstoriesbutton">See all our stores</h1>
                </div>
                {/* third little text */}
                <div className="littletextsomething">
                    <FaStar size={24} color='22AD7B' /> <span className="truestpilot">Trustpilot</span>
                    <span className="excellent">Excellent
                    4.4 out of 5</span>
                </div>
			</div>
		</div>
	);
};

export default UserContent;
