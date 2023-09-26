import { useQuery } from "@tanstack/react-query";

const useSearchPayout = (searchTerm?: string) => {
    return useQuery({
        queryKey: [`search-${searchTerm}`],
        queryFn: async () => {
            const response = await fetch(`https://theseus-staging.lithium.ventures/api/v1/analytics/tech-test/search?query=${searchTerm}`);
            return response.json();
        }
    })
}

export default useSearchPayout;