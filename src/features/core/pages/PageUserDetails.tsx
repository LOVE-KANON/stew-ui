import {
    Button,
    Box,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import { usePageUserDetails } from "./hooks/usePageUserDetails";

const PageUserDetails = () => {

    const pageState = usePageUserDetails();

    if (pageState.loading) {
        return <div>Loading...</div>;
    }

    if (!pageState.data) {
        return null;
    }

    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="body1" gutterBottom>ユーザID</Typography>
                <Box sx={{ maxWidth: 360 }}>
                    <TextField
                        name="userId"
                        value={pageState.data.userId}
                        fullWidth
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        size="small"
                    />
                </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="body1" gutterBottom>ユーザ連番</Typography>
                <Box sx={{ maxWidth: 360 }}>
                    <TextField
                        name="userSeq"
                        value={pageState.data.userSeq}
                        fullWidth
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        size="small"
                    />
                </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="body1" gutterBottom>姓</Typography>
                <Box sx={{ maxWidth: 360 }}>
                    <TextField
                        name="sei"
                        value={pageState.data.sei}
                        onChange={(e)=>pageState.handleChange(e.target.name, e.target.value)}
                        fullWidth
                        variant="outlined"
                        size="small"
                    />
                </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="body1" gutterBottom>名</Typography>
                <Box sx={{ maxWidth: 360 }}>
                    <TextField
                        name="mei"
                        value={pageState.data.mei}
                        onChange={(e)=>pageState.handleChange(e.target.name, e.target.value)}
                        fullWidth
                        variant="outlined"
                        size="small"
                    />
                </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="body1" gutterBottom>メールアドレス</Typography>
                <Box sx={{ maxWidth: 360 }}>
                    <TextField
                        name="mailAddress"
                        value={pageState.data.mailAddress}
                        onChange={(e)=>pageState.handleChange(e.target.name, e.target.value)}
                        fullWidth
                        variant="outlined"
                        size="small"
                    />
                </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="body1" gutterBottom>パスワード</Typography>
                <Box sx={{ maxWidth: 360 }}>
                    <TextField
                        name="password"
                        value={pageState.data.password}
                        onChange={(e)=>pageState.handleChange(e.target.name, e.target.value)}
                        type="password"
                        fullWidth
                        variant="outlined"
                        size="small"
                    />
                </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="body1" gutterBottom>入社日</Typography>
                <Box sx={{ maxWidth: 360 }}>
                    <TextField
                        name="joinedDate"
                        value={pageState.data.joinedDate}
                        onChange={(e)=>pageState.handleChange(e.target.name, e.target.value)}
                        fullWidth
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        size="small"
                    />
                </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="body1" gutterBottom>退社日</Typography>
                <Box sx={{ maxWidth: 360 }}>
                    <TextField
                        name="retiredDate"
                        value={pageState.data.retiredDate}
                        onChange={(e)=>pageState.handleChange(e.target.name, e.target.value)}
                        fullWidth
                        variant="outlined"
                        size="small"
                    />
                </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="body1" gutterBottom>役職</Typography>
                <Box sx={{ maxWidth: 360 }}>
                    <TextField
                        name="position"
                        value={pageState.data.position}
                        onChange={(e)=>pageState.handleChange(e.target.name, e.target.value)}
                        fullWidth
                        variant="outlined"
                        size="small"
                    />
                </Box>
            </Grid>

            <Grid size={{ xs: 12 }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        mt: 3,
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: "#198754" }}
                        onClick={pageState.onClickUpdate}
                    >
                        更新
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
};

export default PageUserDetails;
