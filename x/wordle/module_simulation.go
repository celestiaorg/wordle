package wordle

import (
	"math/rand"

	"github.com/YazzyYaz/wordle/testutil/sample"
	wordlesimulation "github.com/YazzyYaz/wordle/x/wordle/simulation"
	"github.com/YazzyYaz/wordle/x/wordle/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = wordlesimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgSubmitWordle = "op_weight_msg_submit_wordle"
	// TODO: Determine the simulation weight value
	defaultWeightMsgSubmitWordle int = 100

	opWeightMsgSubmitGuess = "op_weight_msg_submit_guess"
	// TODO: Determine the simulation weight value
	defaultWeightMsgSubmitGuess int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	wordleGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&wordleGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgSubmitWordle int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgSubmitWordle, &weightMsgSubmitWordle, nil,
		func(_ *rand.Rand) {
			weightMsgSubmitWordle = defaultWeightMsgSubmitWordle
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgSubmitWordle,
		wordlesimulation.SimulateMsgSubmitWordle(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgSubmitGuess int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgSubmitGuess, &weightMsgSubmitGuess, nil,
		func(_ *rand.Rand) {
			weightMsgSubmitGuess = defaultWeightMsgSubmitGuess
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgSubmitGuess,
		wordlesimulation.SimulateMsgSubmitGuess(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
