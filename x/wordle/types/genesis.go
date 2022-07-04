package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		WordleList: []Wordle{},
		GuessList:  []Guess{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in wordle
	wordleIndexMap := make(map[string]struct{})

	for _, elem := range gs.WordleList {
		index := string(WordleKey(elem.Index))
		if _, ok := wordleIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for wordle")
		}
		wordleIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in guess
	guessIndexMap := make(map[string]struct{})

	for _, elem := range gs.GuessList {
		index := string(GuessKey(elem.Index))
		if _, ok := guessIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for guess")
		}
		guessIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
