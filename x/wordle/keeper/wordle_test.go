package keeper_test

import (
	"strconv"
	"testing"

	keepertest "github.com/YazzyYaz/wordle/testutil/keeper"
	"github.com/YazzyYaz/wordle/testutil/nullify"
	"github.com/YazzyYaz/wordle/x/wordle/keeper"
	"github.com/YazzyYaz/wordle/x/wordle/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNWordle(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Wordle {
	items := make([]types.Wordle, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetWordle(ctx, items[i])
	}
	return items
}

func TestWordleGet(t *testing.T) {
	keeper, ctx := keepertest.WordleKeeper(t)
	items := createNWordle(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetWordle(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestWordleRemove(t *testing.T) {
	keeper, ctx := keepertest.WordleKeeper(t)
	items := createNWordle(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveWordle(ctx,
			item.Index,
		)
		_, found := keeper.GetWordle(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestWordleGetAll(t *testing.T) {
	keeper, ctx := keepertest.WordleKeeper(t)
	items := createNWordle(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllWordle(ctx)),
	)
}
