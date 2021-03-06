
import { IP2PExchangeTransaction, IStakeEntry, IWalletReputation, VOTING_DIRECTION } from "./interfaces";
const fsExtra = require('fs-extra')

export class StakingPool {

    private static stakeEntries: IStakeEntry[] = []
    private static walletReputations: IWalletReputation[] = []
    private static p2pExchangeTransactions: IP2PExchangeTransaction


    public static stakeETHAndMakeTransaction(walletAddress: string, amount: number, transactionInput: any) {
        const p2pExchangeTransactions: IP2PExchangeTransaction = StakingPool.getInitialTransaction()
        p2pExchangeTransactions.initiatingWalletAddress = walletAddress
        p2pExchangeTransactions.transactionInput = transactionInput

        const originalTransactionId = '12345'

        const stakeEntry: IStakeEntry = {
            referenceTransactionId: originalTransactionId,
            stakingWalletAddress: walletAddress,
            amountStaked: amount,
            timestamp: Date.now()
        }

        StakingPool.stakeEntries.push(stakeEntry)

        return originalTransactionId
    }

    public static voteOnTransaction(walletAddress: string, referredTransactioId: string, votingDirection: VOTING_DIRECTION, amount: number): string {
        const stakeEntry: IStakeEntry = {
            referenceTransactionId: referredTransactioId,
            stakingWalletAddress: walletAddress,
            amountStaked: amount,
            timestamp: Date.now()
        }

        StakingPool.stakeEntries.push(stakeEntry)

        return 'ourfancyVotingTransactionIDh726'
    }

    public static async repayStakedETHToSuccessfulContributorsAndVoters(transactionId: string): Promise<any[]> {

        const repaymentTransactionId = 'ourfancyRepaymentTransactionIDh726'

        const result = []
        for (const e of this.stakeEntries) {
            if (transactionId === e.referenceTransactionId) {

                const resultEntry = {
                    rewardedWalletAddress: e.stakingWalletAddress,
                    referenceTransactionId: e.referenceTransactionId,
                    rewardAmount: e.amountStaked
                }

                result.push(resultEntry)
            }
        }


        return result
    }

    public static getWalletReputation(walletAddress: string): number {
        const entry = StakingPool.walletReputations.filter((entry: IWalletReputation) => entry.walletAddress === walletAddress)[0]
        if (entry === undefined) {
            return 1 // this is the initial reputation score
        } else {
            return entry.reputation
        }
    }


    private static getInitialTransaction(): IP2PExchangeTransaction {

        return {
            initiatingWalletAddress: "",
            transactionId: "",
            timeStampTriggered: "",
            timestampFinalized: "",
            transactionInput: "",
            votes: [
                {
                    ups: 0,
                    downs: 0
                }
            ]
        }
    }

    private static async repay() {

    }



}