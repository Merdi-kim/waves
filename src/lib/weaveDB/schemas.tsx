const schema = {
	type: 'object',
	required: ['title', 'description', 'reelTxId'],
	properties: {
		title: {
			type: 'string',
		},
		description: {
			type: 'string',
		},
		reelTxId: {
			type: 'string',
		},
	},
};
