import * as React from "react";
import { List, Datagrid, TextField } from 'react-admin';
import MyUrlField from "./MyUrlField";

export const AlbumList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
        </Datagrid>
    </List>
);