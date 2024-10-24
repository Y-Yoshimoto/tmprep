// インポート
import { useEffect, useState } from "react";
import { Box, Button, Modal, Stack, Typography } from '@mui/material';

// タイムライン表示コンポーネント
export const ImageModal = (props) => {
    // URL
    const urlA = "/images/sampleimage/testImageA.jpg";
    const urlB = "/images/sampleimage/testImageB.jpg";

    return (
        <>
            <div>ImageModal</div>
            <ImageAndModal url={urlA} />
            <ImageAndModal url={urlB} />
        </>
    );
}

const ImageAndModal = ({ url }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        console.log("handleOpen");
        setOpen(true);
    }
    const handleClose = () => {
        console.log("handleClose");
        setOpen(false);
    }

    return (
        <>
            <Box onClick={handleOpen}>
                <img src={url} alt="sample" style={{ width: "20%", cursor: "pointer" }} />
            </Box>
            <ImageOnModal url={url} open={open} handleClose={handleClose} />
        </>
    )
}

const ImageOnModal = ({ url, open, handleClose }) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '95%',
        //background: 'background.paper',
        //height: '100%',
        //width: 400,
        bgcolor: 'background.paper',
        //border: '2px solid #000',
        //boxShadow: 24,
        //p: 4,
        justifyContent: "center"
    };
    //width: 'fit-content'
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{}}>
                        ヘッダー
                    </Box>
                    <Stack direction="row" spacing={2} justifyContent="center">
                        <Button>左</Button>
                        <div>
                            <img src={url} alt="sample" style={{ objectFit: "contain", width: "100%", maxHeight: "80vh", verticalAlign: "bottom" }} onClick={handleClose} />
                        </div>
                        <Button>右</Button>
                    </Stack>
                    <Box sx={{}}>
                        フッター
                    </Box>
                </Box>
            </Modal >
        </>
    )
}

const ImageOnModal2 = ({ url, open, handleClose }) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '95%',
        //background: 'background.paper',
        //height: '100%',
        //width: 400,
        bgcolor: 'background.paper',
        //border: '2px solid #000',
        //boxShadow: 24,
        //p: 4,
        justifyContent: "center"
    };
    //width: 'fit-content'
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} onClick={handleClose}>
                    <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                        <Button variant="contained">左</Button>
                        <Box sx={{ bgcolor: '#FFFF00', }}>
                            <Box sx={{}}>
                                ヘッダー
                            </Box>
                            <img src={url} alt="sample" style={{ objectFit: "contain", width: "100%", maxHeight: "80vh", verticalAlign: "bottom" }} onClick={handleClose} />
                            <Box sx={{}}>
                                フッター
                            </Box>
                        </Box>
                        <Button variant="contained" >右</Button>
                    </Stack>

                </Box>
            </Modal >
        </>
    )
}

