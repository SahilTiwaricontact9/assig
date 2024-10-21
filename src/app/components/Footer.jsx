'use client';

import React from 'react';
import '../styles/Footer.css';
import { FaFacebookF } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaHouse } from 'react-icons/fa6';
const Footer = () => {
	return (
		<footer className="footerhaiye">
			<h1 className="footericon">Better</h1>
			<div className="mainfootercontainer">
				{/* first footer container */}
				<div className="firstfootercontainer">
					{/* first div */}
					<div className="firstsliceoffooter">
						<p className="raparapa">
							Better is a family of companies serving all your homeownership needs.
						</p>
						{/* div mortage */}
						<div className="nommocdiv">
							<h2 className="samysamy">
								Better <span className="woltageoltage">Mortgage</span>
							</h2>
							<p className="raparoraro">
								We can’t wait to say “Welcome home.” Apply 100% online, with expert customer support.
							</p>
						</div>
						{/* div  Real State*/}
						<div className="nommocdiv">
							<h2 className="samysamy">
								Better <span className="woltageoltage">Real Estate</span>
							</h2>
							<p className="raparoraro">
								Connect with a local Better Real Estate Partner Agent to find out all the ways you can
								save.
							</p>
						</div>
						{/* div Cover */}
						<div className="nommocdiv">
							<h2 className="samysamy">
								Better <span className="woltageoltage">Cover</span>
							</h2>
							<p className="raparoraro">
								Shop, bundle, and save on insurance coverage for home, auto, life, and more.
							</p>
						</div>
						{/* div inspect */}
						<div className="nommocdiv">
							<h2 className="samysamy">
								Better <span className="woltageoltage">Inspect</span>
							</h2>
							<p className="raparoraro">
								SGet free repair estimates, 24-hour turnarounds on reports, and rest easy with our
								100-day inspection guarantee.
							</p>
						</div>
						{/* div settlement services */}
						<div className="nommocdiv">
							<h2 className="samysamy">
								Better <span className="woltageoltage">Settlement Services</span>
							</h2>
							<p className="raparoraro">
								Get transparent rates when you shop for title insurance all in one convenient place.
							</p>
						</div>
					</div>
					{/* second div */}
					<div className="secondslicefooter">
						<h1 className="fdsfkdjf">Resources</h1>
						<div className="flunctuaton">
							<h1 className="ytititt">Home affordability calculator</h1>
							<h1 className="ytititt">Mortgage calculator</h1>
							<h1 className="ytititt">Free mortgage calculator</h1>
							<h1 className="ytititt">Mortgage calculator with taxes</h1>
							<h1 className="ytititt">Mortgage calculator with PMI</h1>
							<h1 className="ytititt">Rent vs buy calculator</h1>
							<h1 className="ytititt">HELOC payment calculator</h1>
							<h1 className="ytititt">HELOC vs cash-out refinance calculator</h1>
							<h1 className="ytititt">Buy a home</h1>
							<h1 className="ytititt">Sell a home</h1>
							<h1 className="ytititt">Get home inspection</h1>
						</div>
					</div>
					{/* third  div */}
					<div className="secondslicefooter">
						<h1 className="fdsfkdjf">Company</h1>
						<div className="flunctuaton">
							<h1 className="ytititt">About Us</h1>
							<h1 className="ytititt">Carrers</h1>
							<h1 className="ytititt">Media</h1>
							<h1 className="ytititt">Partner With Us</h1>
							<h1 className="ytititt">Learning center</h1>
							<h1 className="ytititt">FAQ's</h1>
							<h1 className="ytititt">Investor relations</h1>
						</div>
					</div>
					{/* fourth div */}
					<div className="secondslicefooter">
						<h1 className="fdsfkdjf">Contact Us</h1>
						<div className="flunctuaton">
							<h1 className="ytititt">hello@better.com</h1>
							<h1 className="ytititt">415-523-8837</h1>
							<h1 className="ytititt">FAQ</h1>
							<h1 className="ytititt">Glossary</h1>
							<h1 className="fdsfkdjf">Legal</h1>
							<h1 className="ytititt">NMLS Consumer Access</h1>
							<h1 className="ytititt">Privacy Policy</h1>
							<h1 className="ytititt">Terms of Use</h1>
							<h1 className="ytititt">Disclosures & Licensing</h1>
							<h1 className="ytititt">Affiliated Business</h1>
							<h1 className="ytititt">Browser Disclaimer</h1>
							<div className='halkahalka'>
							<FaHouse size={40} className="hosebouse" />
							<FaHouse size={40} className="hosebouse" />
							</div>
						</div>
					</div>
				</div>
				{/* second footer container */}
				<div className="secondfootercontainer">
					{/* logo container */}
					<div className="logoconainer">
						<FaFacebookF size={24} />
						<FaInstagram size={24} />
						<FaLinkedinIn size={24} />
					</div>
					{/* text container */}
					<div className="smallsmalltextcontainer">
						<p className="emojiesfdfd">
							1 Better Mortgage’s One Day Mortgage™ promotion offers qualified customers who provide
							certain required financial information/documentation to Better Mortgage within 4 hours of
							locking a rate on a mortgage loan the opportunity to receive an underwriting determination
							from Better Mortgage within 24 hours of their rate lock. The underwriting determination is
							subject to customary terms, including fraud and anti-money laundering checks, that take
							place pre-closing and which may trigger additional required documentation from the customer.
							Better Mortgage does not guarantee that initial underwriting approval will result in a final
							underwriting approval. See One Day Mortgage™ Terms and Conditions.
						</p>
						<p className="emojiesfdfd">
							2Better Mortgage’s One Day HELOC™ promotion offers qualified customers who provide certain
							required financial information/documentation to Better Mortgage within 4 hours of locking a
							rate on a HELOC loan the opportunity to receive an underwriting determination from Better
							Mortgage within 24 hours of their rate lock. The underwriting determination is subject to
							customary terms, including fraud and anti-money laundering checks, that take place
							pre-closing and which may trigger additional required documentation from the customer.
							Better Mortgage does not guarantee that initial underwriting approval will result in final
							underwriting approval. See One Day Heloc™ Terms and Conditions.
						</p>
						<p className="emojiesfdfd">
							3Assumes borrowers are eligible for the Automated Valuation Model (AVM) to calculate their
							home value, their loan amount is less than $400,000, all required documents are uploaded to
							their Better Mortgage online account within 24 hours of application, closing is scheduled
							for the earliest available date and time, and a notary is readily available. Funding
							timelines may vary and may be longer if an appraisal is required to calculate a borrower’s
							home value.
						</p>

						<hr />
						<p className="emojiesfdfd">
							© 2024 Better Home & Finance Holding Company and/or its affiliates. Better is a family of
							companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and
							Better Real Estate California Inc License # 02164055 provides real estate services; Better
							Cover, LLC sells insurance products; and Better Settlement Services provides title insurance
							services; and Better Inspect, LLC provides home inspection services. All rights reserved.
						</p>
						<p className="emojiesfdfd">
						Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 3 World Trade Center, 175 Greenwich Street, 57th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. NMLS Consumer Access
						</p>
						<p className="emojiesfdfd">
						Better Real Estate, LLC dba BRE, Better Home Services, BRE Services, LLC and Better Real Estate, and operating in the State of California through its wholly owned subsidiary Better Real Estate California Inc., is a licensed real estate brokerage and maintains its corporate headquarters at 325-41 Chestnut Street, Suite 826, Philadelphia, PA 19106. Here is a full listing of Better Real Estate, LLC’s license numbers. Better Real Estate, LLC provides access to real estate brokerage services via its nationwide network of partner brokerages and real estate agents (“Better Real Estate Partner Agents”). Equal Housing Opportunity. All rights reserved.
						</p>
						<p className="emojiesfdfd">
						New York State Housing and Anti-Discrimination Notice
						</p>
						<p className="emojiesfdfd">
						New York Standard Operating Procedures
						</p>
						<p className="emojiesfdfd">
						Texas Real Estate Commission: Information About Brokerage Services | Consumer Protection Notice
						</p>
						<p className="emojiesfdfd">
						Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803, Philadelphia, PA 19106.
						</p>
						<p className="emojiesfdfd">
						Homeowners insurance policies are offered through Better Cover, LLC, a Pennsylvania Resident Producer Agency. License #881593. 325-41 Chestnut Street, Suite 807, Philadelphia, PA 19106.
						</p>
						<p className="emojiesfdfd">
						Insurance quotes and policies are offered through Better Cover, LLC. A Pennsylvania Resident Producer Agency. License #881593. Here is a full listing of Better Cover, LLC’s license numbers.
						</p>
						<p className="emojiesfdfd">
						Better Inspect, LLC maintains its corporate headquarters at 325-41 Chestnut Street, Suite 846, Philadelphia, PA 19106.
						</p>
						<p className="emojiesfdfd">
						Better Mortgage Corporation, Better Real Estate, LLC, Better Settlement Services, LLC, Better Cover, LLC, Better Connect, and Better Inspect, LLC are separate operating subsidiaries of Better Home & Finance Holding Company. Each company is a separate legal entity operated and managed through its own management and governance structure as required by its state of incorporation, and applicable and legal and regulatory requirements. Products not available in all states.
						</p>
						<p className="emojiesfdfd">
						Any unauthorized use of any proprietary or intellectual property is strictly prohibited. All trademarks, service marks, trade names, logos, icons, and domain names are proprietary to Better Home & Finance Holding Company. Better Home & Finance Holding Company trademarks are federally registered with the U. S. Patent and Trademark Office. Better Cover is a registered trademark with the U.S. Patent and Trademark Office and is owned by Better Cover, LLC.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
