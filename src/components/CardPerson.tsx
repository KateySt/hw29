import React from 'react';
import {Avatar} from "@mui/material";
import "../style/style.css";

const CardPerson = (props:any):JSX.Element => {
    return (
        <div className='line_block'>
            <div>
                <Avatar
                    src={props.date.image}
                    alt={props.date.name}
                    sx={{
                        width: 150,
                        height: 150,
                        margin: 'auto',
                    }
                    }/>
                <p>{props.date.name}</p>
            </div>
        </div>
    );
};

export default CardPerson;