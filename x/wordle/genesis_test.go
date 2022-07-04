package wordle_test

import (
	"testing"

	keepertest "github.com/YazzyYaz/wordle/testutil/keeper"
	"github.com/YazzyYaz/wordle/testutil/nullify"
	"github.com/YazzyYaz/wordle/x/wordle"
	"github.com/YazzyYaz/wordle/x/wordle/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.WordleKeeper(t)
	wordle.InitGenesis(ctx, *k, genesisState)
	got := wordle.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
