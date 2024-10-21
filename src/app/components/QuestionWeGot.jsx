'use client';
import React from 'react';
import '../styles/QuestionWeGot.css';
const QuestionWeGot = () => {
	return (
		<div className="mainquestioncontainer">
			{/* first container of big text */}
			<div className="firstquestioncontainer">
				<h1 className="honeonehandmainh">Got questions? We've got answers</h1>
			</div>
			{/* second container of 3 texts */}
			<div className="secondquestioncontainer">
                {/* three buttons */}
                <button className="samehitohhaiyesari">Our products</button>
                <button className="samehitohhaiyesari">Calculators</button>
                <button className="samehitohhaiyesari">Guide and FAQ's</button>
            </div>
		</div>
	);
};

export default QuestionWeGot;
