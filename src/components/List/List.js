import { GridList, GridListTile } from '@material-ui/core';
import React from 'react';
import dataList from '../../data/data.json';

const List = () => {
    return (
        <div>
            <GridList cellHeight={200} cols={4} style={{ width: "800", height: "600" }}>
                {dataList.map(data => <GridListTile key={data.id}>
                    <img src={data.image} alt="" />
                </GridListTile>)}
            </GridList>
        </div>
    );
};

export default List;