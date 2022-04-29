import * as React from "react";
import { List, Datagrid, TextField, EmailField, SimpleForm, ReferenceInput, SelectInput, TextInput, Create, Edit } from 'react-admin';
import MyUrlField from "./MyUrlField";

export const CommentList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="body" />
        </Datagrid>
    </List>
);

export const CommentCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);

export const CommentEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);



























