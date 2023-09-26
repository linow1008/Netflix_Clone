import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

import useCurrentuser from "@/hooks/useCureentUser";

export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: "/auth",
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
}

export default function Home() {
    const { data: user } = useCurrentuser();
    return (
        <>
            <h1 className="text-4xl text-green-500">넷플릭스 코딩</h1>
            <p className="text-white">
                로그인 : {user?.name} , 이메일 : {user?.email}
            </p>
            <button className="h-10 w-full bg-white" onClick={() => signOut()}>
                로그아웃
            </button>
        </>
    );
}
