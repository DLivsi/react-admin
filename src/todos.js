import * as React from "react";
import { List, Datagrid, TextField, EmailField } from 'react-admin';


export const TodoList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="completed" />
        </Datagrid>
    </List>
);