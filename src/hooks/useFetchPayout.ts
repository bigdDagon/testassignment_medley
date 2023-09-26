import { useQuery } from '@tanstack/react-query';

const useFetchPayout = () => {
    return useQuery({
        queryKey: ["Initial Fetch"],
        queryFn: async() => {
            const response = await fetch('https://theseus-staging.lithium.ventures/api/v1/analytics/tech-test/payouts')
            const {data: result} = await response.json();
            return result;
        }
    })
}

export default useFetchPayout;

