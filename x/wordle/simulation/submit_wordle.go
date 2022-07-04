package simulation

import (
	"math/rand"

	"github.com/YazzyYaz/wordle/x/wordle/keeper"
	"github.com/YazzyYaz/wordle/x/wordle/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
)

func SimulateMsgSubmitWordle(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgSubmitWordle{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the SubmitWordle simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "SubmitWordle simulation not implemented"), nil, nil
	}
}
