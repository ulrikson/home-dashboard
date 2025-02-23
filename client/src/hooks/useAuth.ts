import { useState, useEffect } from 'react';
import pb from '@/lib/pocketbase';

export function useAuth() {
	const [isAuthenticated, setIsAuthenticated] = useState(
		pb.authStore.isValid
	);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const login = async (email: string, password: string) => {
		try {
			await pb.collection('users').authWithPassword(email, password);
			setIsAuthenticated(true);
			setError(null);
		} catch (err) {
			setError(err instanceof Error ? err.message : 'Failed to login');
			console.error('Login error:', err);
		}
	};

	const logout = () => {
		pb.authStore.clear();
		setIsAuthenticated(false);
	};

	// Check auth state on mount and when authStore changes
	useEffect(() => {
		const unsubscribe = pb.authStore.onChange(() => {
			setIsAuthenticated(pb.authStore.isValid);
		});

		setLoading(false);

		return () => {
			unsubscribe();
		};
	}, []);

	return { isAuthenticated, loading, error, login, logout };
}
