import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { IconButton, Typography } from '@mui/material';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';

export default function NoteCard({ note, handleDelete }) {
    return (
        <div>
            <Card elevation={1}>
                <CardHeader 
                    action={
                        <IconButton onClick={() =>handleDelete(note.id)}>
                            <DeleteOutlined />
                        </IconButton>
                    }
                    title={note.title}
                    subheader={note.category}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
