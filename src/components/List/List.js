import {  GridListTile } from '@material-ui/core';
import ImageList from '@material-ui/core/ImageList';

import React from 'react';
import dataList from '../../data/data.json';

const List = () => {
    return (
        <div>
            <ImageList rowHeight={200} cols={4} style={{ width: "800", height: "600" }}>
                {dataList.map(data => <GridListTile key={data.id}>
                    <img src={data.image} alt="" />
                </GridListTile>)}
            </ImageList>
        </div>
    );
};

export default List;