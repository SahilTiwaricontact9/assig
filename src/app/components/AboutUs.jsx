'use client';
import '../styles/AboutUs.css';
import React from 'react';
import VishalBhiyaImage from '../../../public/vishal-mission.jpg';
import Image from 'next/image';
import softBank from "../../../public/softbanck-removebg-preview.png"
import allyImage from "../../../public/ally-removebg-preview.png"
import cityImage from "../../../public/citi-removebg-preview.png"
import pingImage from "../../../public/pinganbank-removebg-preview.png"
import goldmanImage from "../../../public/goldman-removebg-preview.png"
import kpcbImage from "../../../public/kpcb-removebg-preview.png"
import americaImage from "../../../public/american-removebg-preview.png"



const AboutUs = () => {
	return (
		<div className="mainaboutussucontainer">
			{/* first div -> some text heading */}
			<div className="someimportantheadingreally">
				<h1 className="ourmissionyadhaina">Our mission</h1>
				<h1 className="missionyadhainabigtext">
					We’re making homeownership simpler, faster — and most importantly, more accessible for all
					Americans.
				</h1>
			</div>
			{/* second div-> text and video */}
			<div className="textinformationandvideo">
				{/* first div ot text */}
				<div className="firsdivoftext">
					{/* first heading */}
					<div className="reriowr">
						<h1 className="fdsafasdfsdrer">The status quo is broken</h1>
					</div>
					<div className="rewinfd">
						<p className="fekuchandra">
							The traditional processes around homeownership are opaque and stressful. Fees aren’t
							transparent and some are simply outrageous in size. Traditional mortgage lending is rife
							with unnecessary fees and slow, painful processes. It’s a system set up to benefit insiders
							— not you. Better.com CEO, Vishal Garg, set out to change that.
						</p>
					</div>
					<div className="wbewet">
						<button className="selfbuttonandmtbutton">Read Vishal's story</button>
					</div>
				</div>
				{/* seocnd div of video */}
				<div className="seconddivofvieeo">
					<Image src={VishalBhiyaImage} className="vishalbhiyaimage" />
				</div>
			</div>
			{/* third div-> green background heading */}
			<div className="greeenbackgrounddivvib">
				<h1 className="badabadadgt">How we’re changing things</h1>
				<p className="updownsamesamehai">Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers’.</p>
				<p className="updownsamesamehai">That’s why Better.com is redefining the homeownership process from the ground up. We’re using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.</p>
			</div>
			{/* fourth div -> Backed by */}
			<div className="thisisreallybackbycontainer">
				<h1 className="bacdgfer">Backed by</h1>
				<div className="fshdavzqw">
					<Image className='jdsaqwrwew' src={softBank} />
					<Image className='jdsaqwrwew' src={allyImage} />
					<Image className='jdsaqwrwew' src={cityImage} />
					<Image className='jdsaqwrwew' src={pingImage} />
					<Image className='jdsaqwrwew' src={goldmanImage} />
					<Image className='jdsaqwrwew' src={kpcbImage} />
					<Image className='jdsaqwrwew' src={americaImage} />
				</div>
			</div>
			{/* fifth div -> Company Timeline */}
			<div className="timelinecompanytimeassahi">
				<h1 className='sfdafsadfsdafsd'>2014</h1>
				<div className="yetohlinehaiyeye"></div>
				<div className="contentdivofbigjerer">
					<p className='ksdafheawrvtdrsewe'>After Vishal Garg’s first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.</p>
				</div>
				<h1 className='sfdafsadfsdaopewropdfsnfdfsd'>2015</h1>
				<div className="contentdivldsffdsafsfklsadfofbigjerer">
					<p className='ksdafheawrvtdrsewe'>Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).</p>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
