import React from 'react';
import { Dashboard } from '@/components/dashboard';
import { Login } from '@/components/login';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';

const App: React.FC = () => {
	const { isAuthenticated, loading, logout } = useAuth();

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="py-8 min-h-screen bg-slate-900 text-white">
			<div className="max-w-7xl mx-auto px-4 py-8">
				{isAuthenticated ? (
					<>
						<Dashboard />
						<div className="flex justify-end mt-4">
							<Button onClick={logout} variant="destructive">
								Logout
							</Button>
						</div>
					</>
				) : (
					<Login />
				)}
			</div>
		</div>
	);
};

export default App;
