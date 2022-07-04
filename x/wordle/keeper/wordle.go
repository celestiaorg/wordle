package keeper

import (
	"github.com/YazzyYaz/wordle/x/wordle/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetWordle set a specific wordle in the store from its index
func (k Keeper) SetWordle(ctx sdk.Context, wordle types.Wordle) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WordleKeyPrefix))
	b := k.cdc.MustMarshal(&wordle)
	store.Set(types.WordleKey(
		wordle.Index,
	), b)
}

// GetWordle returns a wordle from its index
func (k Keeper) GetWordle(
	ctx sdk.Context,
	index string,

) (val types.Wordle, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WordleKeyPrefix))

	b := store.Get(types.WordleKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveWordle removes a wordle from the store
func (k Keeper) RemoveWordle(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WordleKeyPrefix))
	store.Delete(types.WordleKey(
		index,
	))
}

// GetAllWordle returns all wordle
func (k Keeper) GetAllWordle(ctx sdk.Context) (list []types.Wordle) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WordleKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Wordle
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
