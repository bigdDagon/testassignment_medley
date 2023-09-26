import React, { ReactEventHandler, useState } from 'react';
import styled from "styled-components";
import PaymentDetail from '../components/PaymentDetail';
import { DataType } from '../types/types';
import useFetchPayout from '../hooks/useFetchPayout';
import { Search } from "@styled-icons/bootstrap";
import { useNavigate, useParams } from 'react-router-dom';

const Title = styled.p`
    font-size: 20px;
    line-height: 32px;
    font-weight: 600;
    letter: -2%;
`;

const Flexrow = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 18px;
    justify-content: space-between;
`;

const FlexColumn = styled.div`
    display: flex;
    flex-direction: row;
`;

const Box = styled.div`
    background-color: #999DFF;
    width: 16px;
    height: 32px;
    border-radius: 4px;
    margin-right: 16px;
`;

const Container = styled.div`
    margin-left: 1.605%;
`;

const Button = styled.button`
    width: 150px;
    height: 30px;
    border-width: 0px;
    border-radius: 6px;
    background-color: #999DFF;
`;

const SearchBox = styled.input`
    width: 500px;
    height: 50px;
    font-size: 20px;
    font-weight: 500;
    border: 1px solid none;
    border-radius: 30px;
    padding: 10px 30px;
    color: rgba(0, 0, 0, 0.87);
    display: flex;
    background-color: rgba(0, 0, 0, 0.05);
`;

function Body() {
    const { data: payoutData, isFetching, isError} = useFetchPayout();
    const [ showUsername, setShowUsername] = useState(false);
    const [ searchTerm, setSearchTerm ] = useState("");
    const navigate = useNavigate();


    const formatDate = (inputDate: string): string => {
        const options: Intl.DateTimeFormatOptions = {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        };
        const formattedDate: string = new Date(inputDate).toLocaleDateString('en-US', options);
        return formattedDate; 
    }

    const handleSearch = (e: React.KeyboardEvent) => {
        if (e.keyCode != 13) return;
        console.log(e.keyCode);
        navigate(`/search/${searchTerm}`);
    }

    if (isFetching) {
        return <h1>Fetching...</h1>
    }

    if (isError) {
        return <h1>Error while fetching</h1>
    }

    return (
        <div className = "body">
            <Container>
                <Flexrow>
                    <FlexColumn>
                        <Box/>
                        <Title>Payout History</Title>
                    </FlexColumn>
                    <FlexColumn>
                        <Button onClick = {() => setShowUsername(!showUsername)}>
                            {!showUsername ? 'Show Username' : 'Hide Username'}
                        </Button>
                    </FlexColumn>
                </Flexrow>
                <Flexrow >
                    <SearchBox placeholder='Search' type = "text" onChange = {(e) => setSearchTerm(e.target.value)} onKeyDown={(e) => handleSearch(e)}/>
                </Flexrow>
                <PaymentDetail DateAndTime="Date & Time" Status="Status" Value="Value" Username={ showUsername ? "Username" : undefined} OddOrEven="Even"/>
                {
                    (payoutData || []).map((data: DataType, index: number)  => 
                        <PaymentDetail key = {data.dateAndTime} DateAndTime={formatDate(data.dateAndTime)} Status={data.status} Value={data.value} Username = { showUsername? data.username : undefined } OddOrEven={index % 2 === 0 ? "odd" : "Even"}/>
                    )
                }       
            </Container>
        </div>
    );
}

export default Body;