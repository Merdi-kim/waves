import WeaveDB from 'weavedb-sdk';

const db = new WeaveDB({
	contractTxId: process.env.NEXT_PUBLIC_WEAVEDB_CONTRACT_TX_ID,
});

export default db;
