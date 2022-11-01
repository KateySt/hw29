import React, {useEffect, useState} from 'react';
import {Grid, Pagination} from "@mui/material";
import CardPerson from "./CardPerson";
import {jsx} from "@emotion/react";
import JSX = jsx.JSX;
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {getCharacterAsync, selectCharList} from "../features/rm/RickMortyPaginationSlice";

export interface pageI {
    page: number;
}

const PaginationComponent = (): JSX.Element => {
    const pages = useAppSelector(selectCharList);
    const dispatch = useAppDispatch();
    const [page, setPage] = useState<pageI>({page: 1});

    const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
        setPage({page: value});
    };

    useEffect(() => {
        dispatch(getCharacterAsync(page.page));
    }, [page]);

    return (
        <div>
            <Grid container justifyContent="center">
                <Pagination count={42}
                            page={page.page}
                            onChange={handleChange}
                            variant="outlined"
                            color="secondary"
                            sx={{m: 1}}/>
            </Grid>

            <Grid container justifyContent="center" id="card">
                {
                    pages.results ?
                        <Grid container justifyContent="center">
                            {
                                pages.results.map((char: any, index: number):JSX.Element => {
                                        return <CardPerson key={index} name={char.name} image={char.image}/>
                                    }
                                )
                            }
                        </Grid> :
                        <Grid/>
                }

            </Grid> :
            <Grid/>

        </div>
    );
};

export default PaginationComponent;
