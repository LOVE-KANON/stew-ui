import {
    Container,
    Box,
    Typography,
    TextField,
    Button,
} from "@mui/material";
import { usePageLogin } from "@/features/core/pages/hooks/usePageLogin";

const PageLogin = () => {

    const pageState = usePageLogin();

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
                    value={pageState.loginId}
                    onChange={(e) => pageState.setLoginId(e.target.value)}
                />
                <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    margin="normal"
                    value={pageState.password}
                    onChange={(e) => pageState.setPassword(e.target.value)}
                />
                <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2 }}
                    onClick={pageState.login}
                >
                    Login
                </Button>
            </Box>
        </Container>
    );
};

export default PageLogin;
