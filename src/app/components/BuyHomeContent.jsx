'use client';

import React from 'react';
import '../styles/BuyHomeContent.css';
import firstHomeImage from '../../../public/first-home.webp';
import fkdsjfHomeImage from '../../../public/one-day-mortgage.webp';
import threepersomimageImage from '../../../public/insurance.webp';
import firstfirstytimageImage from '../../../public/better-heloc.webp';
import { FaArrowRightLong } from 'react-icons/fa6';
import Image from 'next/image';
const BuyHomeContent = () => {
	return (
		<div className="mainhomebuycontencontainer">
			{/* first container */}
			<div className="firstbuycontainerhome">
				{/* first container */}
				<div className="firstcontainerhaiyeinsidehome">
					{/* first div */}
					<div>
						<h1 className="buyingyourfirsthome">Buying your first home with Better</h1>
					</div>
					{/* second div right arrow */}
					<div className="myarrowcontianer">
						<FaArrowRightLong className="jsva" />
					</div>

					{/* third div */}
					<div>
						<Image className="myfirstwebsp" src={firstHomeImage} />
					</div>
				</div>
                {/* Second container */}
			<div className="secondbuycontainerhome">
				{/* text container */}
				<div className="fdasfjweryuwuierwr">
					<h1 className="fpoerier">One Day Mortgage</h1>
					<p className="erwwqwq">
						Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for
						traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter
						in a few weeks.1
					</p>
                    {/* second div right arrow */}
					<div className="myarrowcontianer">
						<FaArrowRightLong className="jsva" />
					</div>
				</div>
				{/* image contianer */}
                <div className="eryizzwewewe">
                    <Image src={fkdsjfHomeImage} className='faefwerwerewvfdvdf' />
                </div>
			</div>
			</div>
			{/* second container */}
            <div className="firstbuycontainerhome">
				{/* freost  container */}
                <div className="secondbuycontainerhome">
				{/* text container */}
				<div className="fdasfjweryuwuierwr">
					<h1 className="fpoerier">One Day Mortgage</h1>
					<p className="erwwqwq">
						Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for
						traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter
						in a few weeks.1
					</p>
                    {/* second div right arrow */}
					<div className="myarrowcontianer">
						<FaArrowRightLong className="jsva" />
					</div>
				</div>
				{/* image contianer */}
                <div className="eryizzwewewe">
                    <Image src={firstfirstytimageImage} className='faefwerwerewvfdvdf' />
                </div>
			</div>
				
                {/* Secoyesecondhiand container */}
                <div className="firstcontainerhaiyeinsidehome">
					{/* first div */}
					<div>
						<h1 className="buyingyourfirsthome">Buying your first home with Better</h1>
					</div>
					{/* second div right arrow */}
					<div className="myarrowcontianer">
						<FaArrowRightLong className="jsva" />
					</div>

					{/* third div */}
					<div>
						<Image className="myfirstwebsp" src={threepersomimageImage} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default BuyHomeContent;
