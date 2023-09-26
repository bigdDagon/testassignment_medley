import React from 'react';
import useSearchPayout from '../hooks/useSearchPayout';
import { useParams } from "react-router-dom";
import PaymentDetail from '../components/PaymentDetail';
import { DataType } from '../types/types';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Button = styled.button`
    width: 150px;
    height: 30px;
    border-width: 0px;
    border-radius: 6px;
    background-color: #999DFF;
    margin: 30px 20px;
`;

function Search() {
    const { id } = useParams();
    const navigate = useNavigate();
    const {data, isFetching, isError} = useSearchPayout(id);
    
    if (isFetching) {
        return <h1>Fetching ...</h1>
    }
    if (isError) {
        return <h1>Error while fetching</h1>
    }
    if (data.length === 0) {
        return (
            <>
                <h1>No Result</h1>
                <Button onClick = {() => navigate("/")}>Back</Button>
            </>
        )
    }
    return (
        <div>
            <h1>Search Results</h1>
            <Button onClick = {() => navigate("/")}>Back</Button>
            <PaymentDetail DateAndTime="Date & Time" Status="Status" Value="Value" Username={ "Username"} OddOrEven="Even"/>
                {
                    (data || []).map((data: DataType, index: number)  => 
                        <PaymentDetail key = {data.dateAndTime} DateAndTime="Friday" Status={data.status} Value={data.value} Username = {data.username} OddOrEven={index % 2 === 0 ? "odd" : "Even"}/>
                    )
                }       
        </div>
    );
}

export default Search;