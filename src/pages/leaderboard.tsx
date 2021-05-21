import Head from 'next/head';

import PageIndex from './index'
import { ListRanked } from './../components/ListRanked'


export default function Leaderboard() {
    return (
        <PageIndex>
            <Head>
                <title>Leaderboard | Move.it</title>
                <meta name="description" content="Agora você tem um rank para competir com seus amigos" />
            </Head>
            <h1>Leaderboard</h1>
            <ListRanked />
        </PageIndex>
    )

}