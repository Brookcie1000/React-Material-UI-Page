import React from "react";
import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";

export default function NoteCard({ info, handleDelete }) {

    return (
        <div>
            <Card elevation={1}
            sx={info.category === 'todos' ? {border: '1px solid red'} : null}
            >
                <CardHeader
                    avatar={
                        <Avatar
                        sx={
                            {backgroundColor: () => {
                                if (info.category === 'money') {
                                    return 'green'
                                }
                                if (info.category === 'reminders') {
                                    return 'orange'
                                }
                                if (info.category === 'todos') {
                                    return 'red'
                                }
                            }}
                        }>
                            {info.category[0].toUpperCase()}
                        </Avatar>
                    } 
                    action={
                        <IconButton onClick={() => handleDelete(info.id)}>
                            <DeleteOutlined />
                        </IconButton>
                    }
                    title={info.name}
                    subheader={info.category}
                />
                <CardContent>
                    <Typography variant="body2" color="secondary">
                        {info.favFood}
                    </Typography>
                </CardContent>
            </Card>
        </div>

    )

}