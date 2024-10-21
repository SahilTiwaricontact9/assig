'use client';
import '../styles/Start.css';
import { FaPhoneAlt } from 'react-icons/fa';
import smallImage from "../../../public/betty1.jpg"
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlineHouse } from "react-icons/md";
import { TbHomeDollar } from "react-icons/tb";
import { PiCurrencyCircleDollarBold } from "react-icons/pi";
import { TbCirclePercentage } from "react-icons/tb";
import { IoMdPhonePortrait } from "react-icons/io";
import React from 'react';
import Image from 'next/image';

const Start = () => {
	return (
		<div className="mainstartcontainer">
			{/* first header container */}
			<div className="firstheaderstartcontainer">
				{/* left side  */}
				<div className="startleftside">
					<h1 className="mainlogohaibhaiii">Better</h1>
					<span className="mortagevortage">Mortgage</span>
				</div>
				{/* right side */}
				<div className="coyafhoa">
					<div className="honecontainer">
						<FaPhoneAlt color="#007849" />
					</div>
					<span className="numbervumber">Need help? Call (415) 523 8837</span>
				</div>
			</div>
			{/* second container of line and photo */}
			<div className="lineandphotomain">
				<div className="mylinemine"></div>
                <div className="photoimage">
                    <Image className='realmyiamge' src={smallImage} />
                </div>
			</div>
            {/* third container */}
            <div className="realthirdcontainetmain">
                {/* first text container */}
                <div className="sometextcontainer">
                    <h1 className='thisisosmemytext'>Hi, I'm Betsy!
                    What can I help you with?</h1>
                </div>
                {/* second three options container */}
                <div className="thisissomethreeoptons">
                    {/* first div */}
                    <div className="allsamehaibuttons">
                      <MdOutlineHouse size={36} className='fdsafsdaf' color='#017848'/>
                      <h2 className='howerrei'>Buying a home</h2>
                    </div>
                    {/* second div */}
                    <div className="allsamehaibuttons">
                      <TbHomeDollar size={36} className='fdsafsdaf' color='#017848'/>
                      <h2 className='howerrei'>Refinance my mortgage</h2>
                    </div>
                    {/* third dic */}
                    <div className="allsamehaibuttons">
                      <PiCurrencyCircleDollarBold size={36} className='fdsafsdaf' color='#017848'/>
                      <h2 className='howerrei'>Get cash from my home</h2>
                    </div>
                </div>
                {/* third number two numberin dolars and k */}
                <div className="numberindollarandk">
                    <div className="dollarswala">
                        <h1 className="numberwunder">$100B</h1>
                        <p className='seriouspara'>home loans funded entirely online</p>
                    </div>
                    <div className="dollarswala">
                        <h1 className="numberwunder">400K</h1>
                        <p className='seriouspara'>Customers who chose a Better Mortgage</p>
                    </div>
                    
                </div>
                {/* fourth div */}
                <div className="fourthdivofmycontianerzz">
                    <h2 className="allfoursamypikny">After a few questions, you'll unlock:</h2>
                    {/* divs three divs */}
                    <div className='eyrierwerb'>
                    <TbCirclePercentage size={22} color='#007849' />
                    <h2 className="allfoursamypikny">Custom mortgage rates</h2>
                    </div>
                    <div className='eyrierwerb'>
                    <RiMoneyDollarCircleLine size={22} color='#007849' />
                    <h2 className="allfoursamypikny">Exclusive offers</h2>
                    </div>
                    <div className='eyrierwerb'>
                    <IoMdPhonePortrait size={22} color='#007849' />
                    <h2 className="allfoursamypikny">A personalized dashboard</h2>
                    </div>
                </div>
            </div>
		</div>
	);
};

export default Start;
