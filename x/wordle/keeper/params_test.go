package keeper_test

import (
	"testing"

	testkeeper "github.com/YazzyYaz/wordle/testutil/keeper"
	"github.com/YazzyYaz/wordle/x/wordle/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.WordleKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
