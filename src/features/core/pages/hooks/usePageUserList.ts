import { useEffect, useState } from "react";

type UserListItem = {
    userId: string;
    userSeq: string;
    joinedDate: string;
    sei: string;
    mei: string;
    mailAddress: string;
    position: string;
};

type UserList = {
    list: UserListItem[];
};

export const usePageUserList = () => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<UserList>(() => ({
        list: [],
    }));

    useEffect(() => {

        const load = async () => {
            setLoading(true);
            setData({
                list: [
                    {
                        userId: "user001",
                        userSeq: "1",
                        joinedDate: "20260101",
                        sei: "山田",
                        mei: "太郎",
                        mailAddress: "yamada.taro@example.com",
                        position: "管理者",
                    },
                    {
                        userId: "user002",
                        userSeq: "2",
                        joinedDate: "20260102",
                        sei: "佐藤",
                        mei: "花子",
                        mailAddress: "sato.hanako@example.com",
                        position: "一般社員",
                    },
                    {
                        userId: "user003",
                        userSeq: "3",
                        joinedDate: "20260103",
                        sei: "鈴木",
                        mei: "一郎",
                        mailAddress: "suzuki.ichiro@example.com",
                        position: "マネージャー",
                    },
                ],
            });

            setLoading(false);
        };

        load();
    }, []);

    return {
        data,
        loading,
    };
};
