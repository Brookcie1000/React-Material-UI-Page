import React from "react";
import { Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";

export default function NoteCard({ info, handleDelete }) {

    return (
        <div>
            <Card elevation={1}
            sx={info.category === 'money' ? {border: '1px solid red'} : null}
            >
                <CardHeader 
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