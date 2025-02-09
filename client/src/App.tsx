import React from 'react';
import { Dashboard } from '@/components/dashboard';
const App: React.FC = () => {
	return (
		// todo: refactor to components
		<div className="py-8 min-h-screen bg-slate-900 text-white">
			<div className="max-w-7xl mx-auto px-4 py-8">
				<Dashboard />
			</div>
		</div>
	);
};

export default App;
