import {
    Container,
    Box,
    Typography,
    Button
} from "@mui/material";
import { useNavigate } from "react-router";

const PageHome = () => {
    const navigate = useNavigate();

    return (
        <Container maxWidth="md">
            <Box sx={{ mt: 5 }}>
                <Typography variant="h4">
                    Home
                </Typography>
    
                <Typography sx={{ mt: 2 }}>
                    ホーム画面（認証なし・仮）
                </Typography>
    
                <Button
                    variant="outlined"
                    sx={{ mt: 3 }}
                    onClick={() => navigate("/")}
                >
                    Logout
                </Button>
            </Box>
        </Container>
    );
};

export default PageHome;
