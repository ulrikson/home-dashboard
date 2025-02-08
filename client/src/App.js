import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);

	const fetchWelcomeMessage = async () => {
		try {
			setLoading(true);
			const response = await fetch('http://localhost:5000/');
			const data = await response.json();
			setMessage(data.message);
		} catch (error) {
			setMessage('Error fetching data from backend');
			console.error('Error:', error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<button
					onClick={fetchWelcomeMessage}
					style={{
						padding: '10px 20px',
						fontSize: '16px',
						margin: '20px 0',
						cursor: 'pointer',
					}}
				>
					{loading ? 'Loading...' : 'Fetch Welcome Message'}
				</button>
				{message && (
					<div style={{ marginTop: '20px' }}>
						<h3>Response from Backend:</h3>
						<p>{message}</p>
					</div>
				)}
			</header>
		</div>
	);
}

export default App;
