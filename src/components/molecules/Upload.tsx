import { Colors } from '@/constants'
import { removeFileExtension } from '@/utils'
import { Button, List, ListItem, ListItemText } from '@mui/material'
import { useState } from 'react'
import styled from 'styled-components'
import { BadgeMolecule, BoxAtom, IconAtom, TextAtom } from '@/components'

interface Props {
    label: string
    additionalLabel?: string
    onUpload: (file: File) => void
}

export const UploadMolecule = (props: Props) => {
    const [isHovered, setIsHovered] = useState(false)
    const [document, setDocument] = useState<File>()

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    })

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        if (!event.target.files) return

        const file = event.target.files[0]

        if (file) {
            setDocument(file)
            props.onUpload(file)
        }
    }

    const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
        event.preventDefault()

        const file = event.dataTransfer.files[0]
        setDocument(file)
        props.onUpload(file)
    }

    const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
        event.preventDefault()
        setIsHovered(true)
    }

    const handleDragLeave = () => {
        setIsHovered(false)
    }

    const handleDeleteDocument = () => {
        setDocument(undefined)
    }

    return (
        <BoxAtom direction="vertical">
            <Button
                htmlFor="file-input"
                component="label"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                sx={{
                    textTransform: 'unset',
                    backgroundColor: isHovered
                        ? Colors.LIGHT_BLUE
                        : Colors.WHITE,
                    border: `1px dashed ${Colors.LIGHT_BLUE}`,
                    borderRadius: 2,
                    boxShadow: 'none',
                    p: 2,
                    ':hover': {
                        backgroundColor: Colors.WHITE,
                    },
                }}
            >
                <IconAtom
                    iconName="attachFile"
                    color={Colors.DARK_BLUE}
                    sx={{ pr: 1 }}
                />
                <TextAtom color={Colors.DARK_BLUE} sx={{ fontSize: 14 }}>
                    {props.label}
                </TextAtom>
            </Button>
            <VisuallyHiddenInput
                type="file"
                id="file-input"
                accept=".pdf, .doc, .docx"
                onChange={handleInputChange}
                style={{ display: 'none' }}
            />
            {document && (
                <List dense>
                    <ListItem sx={{ p: 0 }}>
                        <ListItemText
                            primary={
                                <BadgeMolecule
                                    label={removeFileExtension(document.name)}
                                    onClick={handleDeleteDocument}
                                />
                            }
                        />
                    </ListItem>
                </List>
            )}
        </BoxAtom>
    )
}
