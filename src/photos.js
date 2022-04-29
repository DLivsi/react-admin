import * as React from "react";
import { List, Datagrid, TextField, EmailField } from 'react-admin';


export const PhotoList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <EmailField source="url" />
            <TextField source="thumbnailUrl" />
        </Datagrid>
    </List>
);