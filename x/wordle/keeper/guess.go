package keeper

import (
	"github.com/YazzyYaz/wordle/x/wordle/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetGuess set a specific guess in the store from its index
func (k Keeper) SetGuess(ctx sdk.Context, guess types.Guess) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GuessKeyPrefix))
	b := k.cdc.MustMarshal(&guess)
	store.Set(types.GuessKey(
		guess.Index,
	), b)
}

// GetGuess returns a guess from its index
func (k Keeper) GetGuess(
	ctx sdk.Context,
	index string,

) (val types.Guess, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GuessKeyPrefix))

	b := store.Get(types.GuessKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveGuess removes a guess from the store
func (k Keeper) RemoveGuess(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GuessKeyPrefix))
	store.Delete(types.GuessKey(
		index,
	))
}

// GetAllGuess returns all guess
func (k Keeper) GetAllGuess(ctx sdk.Context) (list []types.Guess) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GuessKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Guess
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
