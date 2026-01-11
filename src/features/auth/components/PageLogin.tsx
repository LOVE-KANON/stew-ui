import {
    Container,
    Box,
    Typography,
    TextField,
    Button,
} from "@mui/material";
import { useLogin } from "@/features/auth/hooks/useLogin";

const PageLogin = () => {

    const loginState = useLogin();

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
                    value={loginState.loginId}
                    onChange={(e) => loginState.setLoginId(e.target.value)}
                />
                <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    margin="normal"
                    value={loginState.password}
                    onChange={(e) => loginState.setPassword(e.target.value)}
                />
                <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2 }}
                    onClick={loginState.login}
                >
                    Login
                </Button>
            </Box>
        </Container>
    );
};

export default PageLogin;
