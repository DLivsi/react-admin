import { 
    Title,
    ListBase,
    Datagrid,
    TextField,
    FilterForm,
    Pagination,
    TextInput
} from 'react-admin';
import { Card } from '@mui/material';

const filters = [<TextInput label="Search" source="q" size="small" alwaysOn />];

export const BookList = () => (
    <ListBase>
        <div>
            <Title title="Book list" />
            <FilterForm filters={filters} />
            <Card>
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="title" />
                    <TextField source="author" />
                    <TextField source="year" />
                </Datagrid>
            </Card>
            <Pagination />
        </div>
    </ListBase>
);