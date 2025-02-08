import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

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
				<h1 className="text-5xl text-center font-bold mb-8">
					Vite + React = 🚀
				</h1>
				<div className="bg-gray-800 rounded-lg p-8 mb-8 max-w-md mx-auto">
					<Button onClick={fetchData}>Fetch Data from Backend</Button>
					{data && (
						<p className="mt-4 text-gray-300">
							Data from backend: {JSON.stringify(data)}
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default App;
