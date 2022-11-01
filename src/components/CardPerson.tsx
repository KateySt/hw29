import React from 'react';
import {Avatar} from "@mui/material";
import "../style/style.css";

interface cardI {
    image: string;
    name:string;
}

const CardPerson = (props: cardI): JSX.Element => {
    return (
        <div className='line_block'>
            <div>
                <Avatar
                    src={props.image}
                    alt={props.name}
                    sx={{
                        width: 150,
                        height: 150,
                        margin: 'auto',
                    }
                    }/>
                <p>{props.name}</p>
            </div>
        </div>
    );
};

export default CardPerson;