import React from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import styled from "styled-components";


const CardContainer = styled.div`
  margin: 0 0 8px 0;
  position: relative;
  max-width: 100%;
  word-wrap: break-word;
`;




const TdCard = () => {
    return (

        <CardContainer>
            <Card>
                <CardContent>
                    <Typography>TEST</Typography>
                </CardContent>
            </Card>
        </CardContainer>
    )
}
export default TdCard