export const getCastIntentLink = (fid: number) => {
	const shareLink = `http://localhost:5173/api/dev/share/${fid}`;
	const text =
		"I just got roasted. Click the frame to get your wallet roasted.\n";
	const castIntentLink = `https://warpcast.com/~/compose?text=${encodeURI(
		text,
	)}&embeds[]=${shareLink}`;

	return castIntentLink;
};