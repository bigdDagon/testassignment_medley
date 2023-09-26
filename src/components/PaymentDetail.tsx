import React from 'react';
import styled from "styled-components";

interface PropType {
    DateAndTime: string;
    Status: string;
    Value: string;
    Username?: string;
    OddOrEven: string;
};

const PaymentRow = styled.div<{ fontSize?: string; color?: string}>`
    padding: 24px;
    width: 100%;
    height: 48px;
    font-size: ${props => props.fontSize};
    background-color: ${props => props.color};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
`;

const Status = styled.div`
    display: flex;
    align-items: center;
    width: 150px;
    height: 48px;
    position: relative;
    padding: 2px 0px 2px;
    margin: 6px 6px;
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    width: 150px;
`;

const StatusBox = styled.span`
    position: absolute;
    left: 0px;
    top: 10px;
    height: 28px;
    font-weight: 600;
    letter-spacing: -0.14px;
    line-weight: 24px;
    padding: 5px 8px;
    border-width: 0px;
    border-radius: 6px;
    background-color: ${props => props.color};
`;

function PaymentDetail(props: PropType) {
    return (
        <div>
            <PaymentRow color = {props.OddOrEven === 'odd' ? 'rgba(244, 244, 244, 0.5)' : '#ffffff'} fontSize = {props.DateAndTime === 'Date & Time' ? '12px' : '14px'}>
                <Title>
                    {props.DateAndTime}
                </Title>         
                <Status>
                    {
                        props.Status === 'Status' ? 'Status' :
                        (<StatusBox color = {props.Status === 'Pending' ? 'rgba(111, 118, 126, 0.4)' : '#60ca57'}>
                            {props.Status === 'Pending' ? 'Pending' : 'Paid'}
                        </StatusBox>)
                    }
                </Status>       
                <Title>
                    {props.Value}
                </Title>
                {
                    props.Username && <Title>{props.Username}</Title>
                }
            </PaymentRow>
        </div>
    );
}

export default PaymentDetail;