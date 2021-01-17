export declare enum VOTING_DIRECTION {
    up = 1,
    down = 2
}
export declare class ComplianceService {
    static stakeETHBeforeMakingATransaction(walletAddress: string, amount: number): Promise<string>;
    static repayStakedETHToSuccessfulContributors(referredTransactioId: string): void;
    static voteOnTransaction(walletAddress: string, referredTransactioId: string, votingDirection: VOTING_DIRECTION): void;
}
