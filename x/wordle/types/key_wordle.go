package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// WordleKeyPrefix is the prefix to retrieve all Wordle
	WordleKeyPrefix = "Wordle/value/"
)

// WordleKey returns the store key to retrieve a Wordle from the index fields
func WordleKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
