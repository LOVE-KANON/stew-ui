import type { FC } from "react";
import {
    Container,
    Box,
    Typography,
    TextField,
    Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login: FC = () => {

    const navigate = useNavigate();
    
    const handleLogin = (): void => {
        navigate("/home");
    }
    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 8 }}>
                <Typography variant="h4" gutterBottom>
                    Login
                </Typography>
                <TextField
                    fullWidth
                    label="User ID"
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    margin="normal"
                />
                <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2 }}
                    onClick={handleLogin}
                >
                    Login
                </Button>
            </Box>
        </Container>
    );
};
export default Login;
