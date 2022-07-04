package keeper

import (
	"github.com/YazzyYaz/wordle/x/wordle/types"
)

var _ types.QueryServer = Keeper{}
