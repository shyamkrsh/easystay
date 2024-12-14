import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'react-hot-toast';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DeleteListing({ id }) {

    let baseUrl = import.meta.env.VITE_API_BASE_URL;
    const navigate = useNavigate()

    const handleDeleteListing = () => {
        axios.delete(`${baseUrl}/api/listings/${id}/delete`, {
            withCredentials: true,
        }).then((res) => {
            console.log(res.data);
            toast.success("Your post has been deleted");
            navigate("/dashboard");
        }).catch((err) => {
            toast.error(err.message);
        })
    }

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button variant="outlined" startIcon={<DeleteIcon />} className="h-[2.5rem]" onClick={handleClickOpen}>
                Delete
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle><p className='text-2xl font-bold'>Alert</p></DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Are you agree to delete this services
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleDeleteListing}>Agree</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
