import {
    Container,
    Box,
    Typography,
    TextField,
    Button,
} from "@mui/material";
import { usePageLogin } from "./hooks/usePageLogin";

const PageLogin = () => {

    const pageState = usePageLogin();

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 8 }}>
                <Typography variant="h4" gutterBottom>
                    Login
                </Typography>
                <TextField
                    name="loginId"
                    value={pageState.data.loginId}
                    onChange={(e)=>pageState.handleChange(e.target.name, e.target.value)}
                    fullWidth
                    label="ログインID"
                    margin="normal"
                />
                <TextField
                    name="password"
                    value={pageState.data.password}
                    onChange={(e)=>pageState.handleChange(e.target.name, e.target.value)}
                    type="password"
                    fullWidth
                    label="Password"
                    margin="normal"
                />
                <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2 }}
                    onClick={pageState.onClickLogin}
                >
                    Login
                </Button>
            </Box>
        </Container>
    );
};

export default PageLogin;
