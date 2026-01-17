import { useState, useEffect, useCallback } from 'react';

const CACHE_KEY = 'blog_articles_cache';
const API_URL = 'https://forem.com/api/articles?username=ariyoaresa';

/**
 * Custom hook for fetching articles with SWR-like caching
 * - Shows cached data immediately
 * - Fetches fresh data in the background
 * - Updates UI when new data arrives
 */
export const useCachedArticles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Get cached data from localStorage
    const getCachedData = useCallback(() => {
        try {
            const cached = localStorage.getItem(CACHE_KEY);
            if (cached) {
                return JSON.parse(cached);
            }
        } catch (e) {
            console.warn('Failed to read cache:', e);
        }
        return null;
    }, []);

    // Save data to localStorage cache
    const setCachedData = useCallback((data) => {
        try {
            localStorage.setItem(CACHE_KEY, JSON.stringify({
                data,
                timestamp: Date.now()
            }));
        } catch (e) {
            console.warn('Failed to write cache:', e);
        }
    }, []);

    // Fetch fresh data from API
    const fetchFreshData = useCallback(async () => {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error('Failed to fetch articles');
            }
            const data = await response.json();

            // Update cache and state
            setCachedData(data);
            setArticles(data);
            setError(null);
        } catch (err) {
            // Only set error if we have no cached data
            if (articles.length === 0) {
                setError(err.message);
            }
        } finally {
            setLoading(false);
        }
    }, [setCachedData, articles.length]);

    useEffect(() => {
        // Step 1: Try to load from cache immediately
        const cached = getCachedData();

        if (cached?.data && Array.isArray(cached.data)) {
            // Show cached data instantly - no loading spinner!
            setArticles(cached.data);
            setLoading(false);
        }

        // Step 2: Always fetch fresh data in the background
        fetchFreshData();
    }, [getCachedData, fetchFreshData]);

    return { articles, loading, error };
};
