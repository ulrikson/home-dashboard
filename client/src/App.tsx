import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

// Define the type for our backend response
interface BackendResponse {
	message?: string;
	[key: string]: any; // Allow for other properties
}

const App: React.FC = () => {
	const [data, setData] = useState<BackendResponse | null>(null);

	const fetchData = async (): Promise<void> => {
		try {
			const response = await fetch('http://localhost:5000/');
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			const result: BackendResponse = await response.json();
			setData(result);
		} catch (error) {
			console.error(
				'Error fetching data:',
				error instanceof Error ? error.message : 'Unknown error'
			);
		}
	};

	return (
		<div className="min-h-screen bg-gray-900 text-white">
			<div className="max-w-7xl mx-auto px-4 py-8">
				<div className="flex justify-center space-x-8 mb-8">
					<a
						href="https://vite.dev"
						target="_blank"
						rel="noopener noreferrer"
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
						rel="noopener noreferrer"
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
						onClick={fetchData}
						className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
					>
						Fetch Data from Backend
					</button>
					{data && (
						<p className="mt-4 text-gray-300">
							Data from backend: {JSON.stringify(data)}
						</p>
					)}
				</div>
				<p className="text-gray-400">
					Click on the Vite and React logos to learn more
				</p>
			</div>
		</div>
	);
};

export default App;
