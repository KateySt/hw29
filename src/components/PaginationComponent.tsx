import React, {useEffect, useState} from 'react';
import {Grid, Pagination} from "@mui/material";
import CardPerson from "./CardPerson";
import axios, {AxiosResponse} from "axios";
import {jsx} from "@emotion/react";
import JSX = jsx.JSX;
import ReactDOM from "react-dom/client";

interface pageI {
    page: number;
}

const PaginationComponent = (): JSX.Element => {
    let arr: object = {};
    const [page, setPage] = useState<pageI>({page: 1});

    const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
        setPage({page: value});
    };

    useEffect(() => {
        axios.get(`character/?page=${page.page}`).then(data => {
            console.log(data.data.results)

            const root = ReactDOM.createRoot(
                document.getElementById('card') as HTMLElement
            );
            root.render(data.data.results.map((text: any, id: number): JSX.Element => {
                return <CardPerson key={id} date={text}/>;
            }))
            return data.data.results;
        });
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
            {arr ?
                <Grid container justifyContent="center" id="card">
                    {
                        /* arr.map((text: any, id: number): JSX.Element => {
                                 console.log("----->", text)
                                 console.log("----->", arr)
                                 return <CardPerson key={id} date={text}/>;
                             }
                         )*/

                    }
                </Grid> :
                <Grid/>
            }
        </div>
    );
};

export default PaginationComponent;
