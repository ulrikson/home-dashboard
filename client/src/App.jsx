import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="min-h-screen bg-gray-900 text-white">
			<div className="max-w-7xl mx-auto px-4 py-8">
				<div className="flex justify-center space-x-8 mb-8">
					<a
						href="https://vite.dev"
						target="_blank"
						className="transition-transform hover:scale-110"
					>
						<img
							src={viteLogo}
							className="h-24 p-6"
							alt="Vite logo"
						/>
					</a>
					<a
						href="https://react.dev"
						target="_blank"
						className="transition-transform hover:scale-110"
					>
						<img
							src={reactLogo}
							className="h-24 p-6 animate-spin-slow"
							alt="React logo"
						/>
					</a>
				</div>
				<h1 className="text-5xl font-bold mb-8">Vite + React = 🚀</h1>
				<div className="bg-gray-800 rounded-lg p-8 mb-8 max-w-md mx-auto">
					<button
						onClick={() => setCount(count => count + 1)}
						className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
					>
						count is {count}
					</button>
					<p className="mt-4 text-gray-300">
						Edit{' '}
						<code className="bg-gray-700 px-2 py-1 rounded">
							src/App.jsx
						</code>{' '}
						and save to test HMR
					</p>
				</div>
				<p className="text-gray-400">
					Click on the Vite and React logos to learn more
				</p>
			</div>
		</div>
	);
}

export default App;
