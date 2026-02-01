import {
    Box,
    Button,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Paper,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { usePageUserList } from "./hooks/usePageUserList";

const PageUserList = () => {

    const pageState = usePageUserList();

    if (pageState.loading) {
        return <div>Loading...</div>;
    }

    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
                <Typography
                    variant="h5"
                    sx={{ py: 2, fontWeight: 600, }}
                >
                    ユーザ一覧
                </Typography>
            </Grid>

            <Grid size={{ xs: 12 }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: "#198754" }}
                        component={RouterLink}
                        to="/core/maintenance/user/create"
                    >
                        新規
                    </Button>
                </Box>
            </Grid>

            <Grid size={{ xs: 12 }}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>氏名</TableCell>
                                <TableCell>メールアドレス</TableCell>
                                <TableCell>入社日</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {pageState.data.list.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={3}>
                                        データがありません。
                                    </TableCell>
                                </TableRow>
                            )}

                            {pageState.data.list.map((item) => (
                                <TableRow key={`${item.userId}-${item.userSeq}`}>
                                    <TableCell>
                                        <Button
                                            component={RouterLink}
                                            to={`/core/maintenance/user/edit/${item.userId}`}
                                            variant="text"
                                        >
                                            {item.sei}{"　"}{item.mei}
                                        </Button>
                                    </TableCell>
                                    <TableCell>{item.mailAddress}</TableCell>
                                    <TableCell>{item.joinedDate}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
};

export default PageUserList;
