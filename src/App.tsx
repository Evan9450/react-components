import './App.css';

// import reactLogo from './assets/react.svg';
// import { useState } from 'react';
// import viteLogo from '/vite.svg';

function App() {
	return (
		<>
			<div className='w-full h-full flex justify-center items-center'>
				<ul className='space-y-8'>
					<li>
						<button className='bg-red-500 w-80 h-20 rounded-lg flex justify-center items-center font-semibold text-2xl hover:bg-red-800'>
							Modal
						</button>
					</li>
					<li>
						<div className='bg-red-500 w-80 h-20 rounded-lg'></div>
					</li>
					<li>
						<div className='bg-red-500 w-80 h-20 rounded-lg'></div>
					</li>
				</ul>
			</div>
		</>
	);
}

export default App;
